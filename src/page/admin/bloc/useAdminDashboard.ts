import type { Branche, Level, Mention } from "@/core/types";
import type { DocDto } from "@/features/doc/doc.dto";
import type { DocEntity } from "@/features/doc/doc.entity";
import type { MentionDto } from "@/features/mention/mention.dto";
import type { UserEntity } from "@/features/mention/user.entity";
import { docRepo, mentionRepository, userRepository } from "@/injection";

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
  const [branche, setBranche] = useState<string>("");
  const [authorName, setAuthorName] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileSize = Math.round(
    selectedFile ? selectedFile.size / (1024 * 1024) : 0
  );

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [mentionData, setMentionData] = useState<MentionDto>();

  const register = async () => {
    const student: UserEntity = {
      name,
      lastName,
      contact,
      password,
      branche:
        !branche || level == "L1" || level == "L2"
          ? "COMMUN"
          : (branche as Branche),
      level: level as Level,
      mention: mention.replace(/_/g, " ") as Mention,
      role: "User",
    };
    const result = await mentionRepository.register(student);
    if (result.status === "success") {
      toast.success("Succes", {
        description: "Student added",
        className: "animate-fade animate-once animate-ease-out",
      });
      await fetchDashboardData();
    } else {
      toast.error("Error", {
        description: "Failed to add student",
      });
    }
  };

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
      branche: branche.length == 0 ? "COMMUN" : branche.replace(/_/g, " "),
      mention: mention.replace(/_/g, " "),
      level,
      lessonTitle,
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

  const fetchDashboardData = async () => {
    const result = await mentionRepository.getData();
    if (result.status == "failure")
      return toast.error("Error", {
        description: "Failed to load dashboard data",
      });

    setMentionData(result.data);
  };

  const sendToServer = async () => {
    await addDocMetaData();
    if (selectedFile) await handleUpload();
  };

  useEffect(() => {
    const callFetchUserAndDashboardData = async () => {
      await fetchUserData();
      await fetchDashboardData();
    };

    callFetchUserAndDashboardData();
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
    setBranche,
    mention,
    register,
    setName,
    setLastName,
    setPassword,
    setContact,
    mentionData,
    level,
  };
};
