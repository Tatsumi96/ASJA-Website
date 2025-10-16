import type { Branche, Level, Mention, Tranche } from '@/core/types';
import type { DocDto } from '@/features/doc/doc.dto';
import type { DocEntity } from '@/features/doc/doc.entity';
import type { LogEntity } from '@/features/log/log.entity';
import type { MentionDto } from '@/features/mention/mention.dto';
import type { UserDto } from '@/features/mention/user.dto';
import type { UserEntity } from '@/features/mention/user.entity';
import type { PostDto } from '@/features/post/post.dto';
import type { TrancheDto } from '@/features/tranche/tranche.dto';

import {
  authRepository,
  docRepo,
  logRepo,
  mentionRepository,
  postRepo,
  trancheRepo,
  userRepository,
} from '@/injection';

import { useEffect, useRef, useState, useCallback } from 'react';
import { toast } from 'sonner';

export const useAdminDashboard = () => {
  const [userMatricule, setUserMatricule] = useState<number>();

  const [postTitle, setPostTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [log, setLog] = useState<LogEntity[]>([]);
  const [logPage, setLogPage] = useState<number>(1);
  const [hasReachedMaxLogPage, setHasReachedMaxLogPage] =
    useState<boolean>(false);

  const [postPage, setPostPage] = useState<number>(1);
  const [post, setPostList] = useState<PostDto[]>([]);
  const [hasReachedMaxPostPage, setHasReachedMaxPostPage] =
    useState<boolean>(false);

  const [query, setQuery] = useState<string>('');

  const [isPremierPaid, setIsPremierPaid] = useState<boolean>(false);
  const [isDeuxiemePaid, setIsDeuxiemePaid] = useState<boolean>(false);
  const [isTroisiemePaid, setIsTroisiemePaid] = useState<boolean>(false);

  const [studentList, setStudentlist] = useState<UserDto[]>([]);
  const [initialStudentList, setInitialStudentlist] = useState<UserDto[]>([]);

  const [studentPage, setStudentPage] = useState<number>(1);
  const [hasReachedMaxPage, setHasReachedMaxPage] = useState<boolean>(false);

  const [docList, setDoclist] = useState<DocEntity[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasReachedMax, setHasReachedMax] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserDto>();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>();

  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const [lessonTitle, setLessonTitle] = useState<string>('');
  const [mention, setMention] = useState<string>('');
  const [level, setLevel] = useState<string>('');
  const [branche, setBranche] = useState<string>('');

  const [errorMessage, setErrorMessage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileSize = Math.round(
    selectedFile ? selectedFile.size / (1024 * 1024) : 0
  );

  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [mentionData, setMentionData] = useState<MentionDto>();

  const deleteStudent = async (id: string, fileName: string) => {
    const result = await mentionRepository.deleteStudent(id, fileName);

    if (result.status === 'success') {
      toast.success('Success', {
        description: 'Student deleted',
      });
      await fetchDashboardData();
      const newStudentList = studentList.filter((item) => item.mentionId != id);
      setInitialStudentlist(newStudentList);
      setStudentlist(newStudentList);
    } else {
      toast.error('Error', {
        description: 'Failed to delete student',
      });
    }
  };

  const sendPost = async () => {
    const result = await postRepo.create({
      title: postTitle.toLocaleUpperCase(),
      description: description,
      branche:
        !branche || level == 'L1' || level == 'L2'
          ? 'COMMUN'
          : (branche.replace(/_/g, ' ') as Branche),
      level: level as Level,
      mention: mention == '' ? 'ASJA' : (mention.replace(/_/g, ' ') as Mention),
      imageUrl: selectedFile?.name,
    });
    if (result.status === 'success') {
      setPostList((item) => [...item, result.data]);
      if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile);
        await postRepo.sendFiles(formData);
      }
      await fetchPostList();
      clean();

      toast.success('Success', {
        description: 'Post addee',
        className: 'animate-fade animate-once animate-ease-out',
      });
    } else {
      toast.error('Error', {
        description: 'Failed to post',
      });
    }
  };

  const fetchPostList = async () => {
    const result = await postRepo.get({ limit: 5, page: postPage });
    if (result.status === 'success') {
      if (result.data.length == 0) {
        setHasReachedMaxPostPage(true);
      } else {
        setPostList((doc) => [...doc, ...result.data]);
        setPostPage((prev) => prev + 1);
      }
    } else {
      toast.error('Error', {
        description: 'Failed to load event',
      });
    }
  };

  const fetchLogs = async () => {
    const result = await logRepo.get(logPage, 3);

    if (result.status === 'success') {
      if (result.data.length == 0) {
        setHasReachedMaxLogPage(true);
      } else {
        setLog((item) => [...item, ...result.data]);
        setLogPage((prev) => prev + 1);
      }
    } else {
      toast.error('Error', {
        description: 'Failed to load logs',
      });
    }
  };

  const updateUserInformation = async () => {
    const result = await userRepository.update({
      name: name.replace(/\s+/g, ''),
      lastName: lastName.replace(/\s+/g, ''),
      imageUrl: selectedFile?.name as string,
      branche:
        !branche || level == 'L1' || level == 'L2'
          ? 'COMMUN'
          : (branche.replace(/_/g, ' ') as Branche),
      level: level as Level,
      mention: mention.replace(/_/g, ' ') as Mention,
      contact,
      identifier: userMatricule as number,
    });

    if (result.status === 'success') {
      toast.success('Succes', {
        description: 'Student information updated',
        className: 'animate-fade animate-once animate-ease-out',
      });
    } else {
      toast.error('Error', {
        description: 'Failed to update user information',
      });
    }
  };

  const sendStudentInformation = async () => {
    const student: UserEntity = {
      name: name.replace(/\s+/g, ''),
      lastName: lastName.replace(/\s+/g, ''),
      contact,
      password,
      fileName: selectedFile?.name as string,
      branche:
        !branche || level == 'L1' || level == 'L2'
          ? 'COMMUN'
          : (branche.replace(/_/g, ' ') as Branche),
      level: level as Level,
      mention: mention.replace(/_/g, ' ') as Mention,
      role: 'Student',
      Premier: isPremierPaid,
      Deuxieme: isDeuxiemePaid,
      Troisieme: isTroisiemePaid,
    };
    const result = await mentionRepository.register(student);
    if (result.status === 'success') {
      setInitialStudentlist((item) => [...item, ...[result.data]]);
      setStudentlist((item) => [...item, ...[result.data]]);

      if (!selectedFile) {
        setErrorMessage('Veuillez sélectionner un fichier');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);
      await mentionRepository.sendFiles(formData);

      await fetchDashboardData();
      clean();

      toast.success('Succes', {
        description: 'Student added',
        className: 'animate-fade animate-once animate-ease-out',
      });
    } else {
      toast.error('Error', {
        description: 'Failed to add student',
      });
    }
  };

  const clean = () => {
    setName('');
    setLastName('');
    setContact('');
    setPassword('');
    setBranche('');
    setLevel('');
    setMention('');
    setImage('');
    setIsPremierPaid(false);
    setIsDeuxiemePaid(false);
    setIsTroisiemePaid(false);
    setPostTitle('');
    setDescription('');
    setSelectedFile(null);
  };

  const onDrop = useCallback(
    (acceptedFile: File[]) => setSelectedFile(acceptedFile[0]),
    []
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    const isValid =
      file && file?.[0].type.startsWith('image/') && file && file.length > 0;

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
      setErrorMessage('');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setErrorMessage('Veuillez sélectionner un fichier');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    setErrorMessage('');
    const result = await docRepo.sendFiles(formData);
    if (result.status == 'failure') {
      setErrorMessage('Erreur lors du téléchargement');
    } else {
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setUploadProgress(0);
    setErrorMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const updateTranche = async (dto: TrancheDto) => {
    const result = await trancheRepo.update({
      id: dto.id,
      tranche: dto.tranche as Tranche,
      value: dto.value as boolean,
    });
    if (result.status === 'success') {
      toast.success('Succes', {
        description: 'Tranche updated',
        className: 'animate-fade animate-once animate-ease-out',
      });
    } else {
      toast.error('Error', {
        description: 'Failed to load document',
      });
    }
  };

  const searchMentionStudent = async (rowLength: number) => {
    if (query.length == 0) {
      setStudentlist(initialStudentList);
    } else if (rowLength == 0) {
      const result = await mentionRepository.searchStudent(query);
      if (result.status === 'success') {
        setStudentlist(result.data);
      }
    }
  };

  const fetchMentionStudentData = async () => {
    const limit = 3;
    const result = await mentionRepository.getStudentData(studentPage, limit);
    if (result.status === 'success') {
      if (result.data.length == 0) {
        setHasReachedMaxPage(true);
      } else {
        setInitialStudentlist((item) => [...item, ...result.data]);
        setStudentlist((item) => [...item, ...result.data]);

        setStudentPage((prev) => prev + 1);
      }
    } else {
      toast.error('Error', {
        description: 'Failed to load student list',
      });
    }
  };

  const fetchDocList = async () => {
    const limit = 10;
    const result = await docRepo.getFile(page, limit);
    if (result.status === 'success') {
      if (result.data.length == 0) {
        setHasReachedMax(true);
      } else {
        setDoclist((doc) => [...doc, ...result.data]);
        setPage((prev) => prev + 1);
      }
    } else {
      toast.error('Error', {
        description: 'Failed to load document',
      });
    }
  };

  const addDocMetaData = async () => {
    const doc: DocDto = {
      fileName: selectedFile?.name as string,
      fileSize: selectedFile?.size as number,
      branche:
        !branche || level == 'L1' || level == 'L2'
          ? 'COMMUN'
          : (branche.replace(/_/g, ' ') as Branche),
      mention: mention.replace(/_/g, ' ') as Mention,
      level: level as Level,
      lessonTitle: lessonTitle.toLocaleUpperCase(),
    };

    const result = await docRepo.sendMetaData(doc);
    if (result.status === 'success') {
      toast.success('Succes', {
        description: 'Product added',
        className: 'animate-fade animate-once animate-ease-out',
      });
    } else {
      toast.error('Error', {
        description: 'Failed to add product',
      });
    }
  };

  const fetchUserData = async () => {
    const result = await userRepository.getData();
    if (result.status == 'failure')
      return toast.error('Error', {
        description: 'Failed to load user data',
      });

    setUserData(result.data as UserDto);
  };

  const fetchDashboardData = async () => {
    const result = await mentionRepository.getData();
    if (result.status == 'failure')
      return toast.error('Error', {
        description: 'Failed to load dashboard data',
      });

    setMentionData(result.data);
  };

  const sendToServer = async () => {
    await addDocMetaData();
    if (selectedFile) await handleUpload();
  };

  const deleteDoc = async (id: string, fileName: string) => {
    const result = await docRepo.delete(id, fileName);
    if (result.status == 'failure')
      return toast.error('Error', {
        description: 'Failed to delete document',
      });
    const newDocList = docList.filter((item) => item.id != id);
    setDoclist(newDocList);
  };

  const deletePost = async (id: string, fileName: string) => {
    const result = await postRepo.delete(id, fileName);
    if (result.status == 'failure')
      return toast.error('Error', {
        description: 'Failed to delete post',
      });
    const newPostList = post.filter((item) => item.id != id);
    setPostList(newPostList);
  };

  const logOut = async (navigate: (path: string) => void) => {
    const result = await authRepository.logOut();

    if (result.status == 'failure')
      return toast.error('Error', {
        description: 'Error on logged out',
      });
    toast.success('Succes', {
      description: 'Logged out',
    });
    navigate('/login');
  };

  useEffect(() => {
    const callFetchUserAndDashboardData = async () => {
      await fetchUserData();
      await fetchDashboardData();
    };

    callFetchUserAndDashboardData();
  }, []);

  return {
    addDocMetaData,
    userData,
    docList,
    setPage,
    fetchDocList,
    hasReachedMax,
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
    clean,
    name,
    lastName,
    contact,
    branche,
    password,
    searchMentionStudent,
    setQuery,
    fetchLogs,
    log,
    hasReachedMaxLogPage,
    post,
    hasReachedMaxPostPage,
    fetchPostList,
    sendPost,
    setDescription,
    setPostTitle,
    description,
    postTitle,
    deletePost,
    logOut,
    deleteDoc,
    lessonTitle,
    setImage,
    setUserMatricule,
    updateUserInformation,
  };
};
