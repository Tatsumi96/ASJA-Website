import type { Branche, Level, Mention, Tranche } from "@/core/types";
import type { DocDto } from "@/features/doc/doc.dto";
import type { DocEntity } from "@/features/doc/doc.entity";
import type { MentionDto } from "@/features/mention/mention.dto";
import type { UserDto } from "@/features/mention/user.dto";
import type { UserEntity } from "@/features/mention/user.entity";
import type { TrancheDto } from "@/features/tranche/tranche.dto";
import {
  docRepo,
  mentionRepository,
  trancheRepo,
  userRepository,
} from "@/injection";

import { useEffect, useRef, useState, useCallback } from "react";
import { toast } from "sonner";

export const useAdminDashboard = () => {
  const [isPremierPaid, setIsPremierPaid] = useState<boolean>(false);
  const [isDeuxiemePaid, setIsDeuxiemePaid] = useState<boolean>(false);
  const [isTroisiemePaid, setIsTroisiemePaid] = useState<boolean>(false);

  const [studentList, setStudentlist] = useState<UserDto[]>([]);
  const [studentPage, setStudentPage] = useState<number>(1);
  const [hasReachedMaxPage, setHasReachedMaxPage] = useState<boolean>(false);

  const [docList, setDoclist] = useState<DocEntity[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasReachedMax, setHasReachedMax] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>();

  const [uploadProgress, setUploadProgress] = useState<number>(0);

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

  const deleteStudent = async (id: string) => {
    const result = await mentionRepository.deleteStudent(id);

    if (result.status === "success") {
      toast.success("Succes", {
        description: "Student deleted",
      });
      await fetchDashboardData();
      const newStudentList = studentList.filter((item) => item.mentionId != id);
      setStudentlist(newStudentList);
    } else {
      toast.error("Error", {
        description: "Failed to delete student",
      });
    }
  };

  const sendStudentInformation = async () => {
    const student: UserEntity = {
      name: name.replace(/\s+/g, ""),
      lastName: lastName.replace(/\s+/g, ""),
      contact,
      password,
      fileName: selectedFile?.name as string,
      branche:
        !branche || level == "L1" || level == "L2"
          ? "COMMUN"
          : (branche as Branche),
      level: level as Level,
      mention: mention.replace(/_/g, " ") as Mention,
      role: "User",
      Premier: isPremierPaid,
      Deuxieme: isDeuxiemePaid,
      Troisieme: isTroisiemePaid,
    };
    const result = await mentionRepository.register(student);
    if (result.status === "success") {
      if (!selectedFile) {
        setErrorMessage("Veuillez sélectionner un fichier");
        return;
      }

      const formData = new FormData();
      formData.append("file", selectedFile);
      await mentionRepository.sendFiles(formData);

      await fetchDashboardData();
      await fetchMentionStudentData();
      cleanAddUserCard();

      toast.success("Succes", {
        description: "Student added",
        className: "animate-fade animate-once animate-ease-out",
      });
    } else {
      toast.error("Error", {
        description: "Failed to add student",
      });
    }
  };

  const cleanAddUserCard = () => {
    setName("");
    setLastName("");
    setContact("");
    setPassword("");
    setBranche("");
    setLevel("");
    setMention("");
    setImage("");
    setIsPremierPaid(false);
    setIsDeuxiemePaid(false);
    setIsTroisiemePaid(false);
  };

  const onDrop = useCallback(
    (acceptedFile: File[]) => setSelectedFile(acceptedFile[0]),
    []
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    const isValid =
      file && file?.[0].type.startsWith("image/") && file && file.length > 0;

    if (isValid) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file?.[0]);
      setSelectedFile(file[0]);
    } else {
      setImage(null);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
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
    setUploadProgress(0);
    setErrorMessage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const updateTranche = async (dto: TrancheDto) => {
    const result = await trancheRepo.update({
      id: dto.id,
      tranche: dto.tranche as Tranche,
      value: dto.value as boolean,
    });
    if (result.status === "success") {
      toast.success("Succes", {
        description: "Tranche updated",
        className: "animate-fade animate-once animate-ease-out",
      });
    } else {
      toast.error("Error", {
        description: "Failed to load document",
      });
    }
  };

  const fetchMentionStudentData = async () => {
    const limit = 3;
    const result = await mentionRepository.getStudentData(studentPage, limit);
    if (result.status === "success") {
      console.log(result.data);

      if (result.data.length == 0) {
        setHasReachedMaxPage(true);
      } else {
        setStudentlist((item) => [...item, ...result.data]);
        setStudentPage((prev) => prev + 1);
      }
    } else {
      toast.error("Error", {
        description: "Failed to load student list",
      });
    }
  };

  const fetchDocList = async () => {
    const limit = 10;
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
    fetchDocList,
    hasReachedMax,
    userName,
    handleCancel,
    handleUpload,
    handleFileChange,
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
    sendStudentInformation,
    setName,
    setLastName,
    setPassword,
    setContact,
    mentionData,
    level,
    studentList,
    fetchMentionStudentData,
    hasReachedMaxPage,
    updateTranche,
    handleImageChange,
    image,
    isPremierPaid,
    isDeuxiemePaid,
    isTroisiemePaid,
    setIsPremierPaid,
    setIsDeuxiemePaid,
    setIsTroisiemePaid,
    deleteStudent,
    cleanAddUserCard,
    name,
    lastName,
    contact,
    branche,
    password,
  };
};
