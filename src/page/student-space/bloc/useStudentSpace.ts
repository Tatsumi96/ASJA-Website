import type { DocDto } from '@/features/doc/doc.dto';
import type { PostDto } from '@/features/post/post.dto';
import type { UserDto } from '@/features/user/user.dto';
import { authRepository, docRepo, postRepo, userRepository } from '@/injection';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export const useStudentSpace = () => {
  const [docList, setDoclist] = useState<DocDto[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(4);
  const [hasReachedMax, setHasReachedMax] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserDto>();

  const [postPage, setPostPage] = useState<number>(1);
  const [post, setPostList] = useState<PostDto[]>([]);

  const fetchPostList = async () => {
    const result = await postRepo.get({ limit: 5, page: postPage });
    if (result.status === 'success') {
      if (result.data.length == 0) {
        setHasReachedMax(true);
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

  const fetchDocList = async () => {
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

  const fetchUserData = async () => {
    const result = await userRepository.getData();
    if (result.status == 'failure')
      return toast.error('Error', {
        description: 'Failed to load user data',
      });

    setUserData(result.data);
  };

  const logOut = async (navigate: (path: string) => void) => {
    const result = await authRepository.logOut();
    if (result.status == 'failure')
      return toast.error('Error', {
        description: 'something went wrong',
      });
    toast.success('Success', {
      description: 'Deconnecter',
      className: 'animate-fade animate-once animate-ease-out',
    });
    navigate('/login');
  };

  useEffect(() => {
    const callFetchUserData = async () => {
      await fetchUserData();
      await fetchPostList();
    };

    callFetchUserData();
  }, []);

  return {
    docList,
    setPage,
    setLimit,
    fetchDocList,
    hasReachedMax,
    userData,
    post,
    fetchPostList,
    logOut,
  };
};
