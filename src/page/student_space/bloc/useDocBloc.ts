import type { DocEntity } from "@/features/doc/doc.entity";
import { docRepo, userRepository } from "@/injection";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useDocBloc = () => {
  const [docList, setDoclist] = useState<DocEntity[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(4);
  const [hasReachedMax, setHasReachedMax] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  const fetchDocList = async () => {
    const result = await docRepo.getDocFile(page, limit);
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

  const fetchUserData = async () => {
    const result = await userRepository.getData();
    if (result.status == "failure")
      return toast.error("Error", {
        description: "Failed to load user data",
      });

    setUserName(result.data.userName);
  };

  useEffect(() => {
    const callFetchUserData = async () => {
      await fetchUserData();
    };

    callFetchUserData();
  }, []);

  return { docList, setPage, setLimit, fetchDocList, hasReachedMax, userName };
};
