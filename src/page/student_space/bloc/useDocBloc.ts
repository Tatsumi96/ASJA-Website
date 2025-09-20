import type { DocEntity } from "@/features/doc/doc.entity";
import { docRepo } from "@/injection";
import { useState } from "react";
import { toast } from "sonner";

export const useDocBloc = () => {
  const [docList, setDoclist] = useState<DocEntity[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(4);
  const [hasReachedMax, setHasReachedMax] = useState<boolean>(false);

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

  return { docList, setPage, setLimit, fetchDocList, hasReachedMax };
};
