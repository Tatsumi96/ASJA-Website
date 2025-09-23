import type { DocDto } from "@/features/doc/doc.dto";
import type { DocEntity } from "@/features/doc/doc.entity";
import { docRepo, userRepository } from "@/injection";

import { useEffect, useRef, useState, useCallback } from "react";
import { toast } from "sonner";

export const useAdminDashboard = () => {
  const [docList, setDoclist] = useState<DocEntity[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(4);
  const [hasReachedMax, setHasReachedMax] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "uploading" | "success" | "error"
  >("idle");

  const [lessonTitle, setLessonTitle] = useState<string>("");
  const [mention, setMention] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [authorName, setAuthorName] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileSize = Math.round(
    selectedFile ? (selectedFile.size / (1024 * 1024)) : 0
  );

  const onDrop = useCallback(
    (acceptedFile: File[]) => setSelectedFile(acceptedFile[0]),
    []
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      setUploadStatus("idle");
      setErrorMessage("");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setErrorMessage("Veuillez sélectionner un fichier");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setErrorMessage("");
    const result = await docRepo.sendFiles(formData);
    if (result.status == "failure") {
      setErrorMessage("Erreur lors du téléchargement");
    } else {
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setUploadStatus("idle");
    setUploadProgress(0);
    setErrorMessage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const fetchDocList = async () => {
    const result = await docRepo.getFile(page, limit);
    if (result.status === "success") {
      if (result.data.length == 0) {
        setHasReachedMax(true);
      } else {
        setDoclist((doc) => [...doc, ...result.data]);
        setPage((prev) => prev + 1);
      }
    } else {
      toast.error("Error", {
        description: "Failed to load document",
      });
    }
  };

  const addDocMetaData = async () => {
    const doc: DocDto = {
      fileName: selectedFile?.name as string,
      fileSize: selectedFile?.size as number,
      lessonTitle,
      mention,
      level,
      authorName,
    };

    const result = await docRepo.sendMetaData(doc);
    if (result.status === "success") {
      toast.success("Succes", {
        description: "Product added",
        className: "animate-fade animate-once animate-ease-out",
      });
    } else {
      toast.error("Error", {
        description: "Failed to add product",
      });
    }
  };

  const fetchUserData = async () => {
    const result = await userRepository.getData();
    if (result.status == "failure")
      return toast.error("Error", {
        description: "Failed to load user data",
      });

    setUserName(result.data.userName);
  };

  const sendToServer = async () => {
    await addDocMetaData();
    if (selectedFile) await handleUpload();
  };

  useEffect(() => {
    const callFetchUserData = async () => {
      await fetchUserData();
    };

    callFetchUserData();
  }, []);

  return {
    addDocFile: addDocMetaData,
    docList,
    setPage,
    setLimit,
    fetchDocList,
    hasReachedMax,
    userName,
    handleCancel,
    handleUpload,
    handleFileChange,
    uploadStatus,
    errorMessage,
    uploadProgress,
    fileInputRef,
    selectedFile,
    fileSize,
    setLessonTitle,
    setMention,
    setLevel,
    sendToServer,
    setAuthorName,
    onDrop,
  };
};
