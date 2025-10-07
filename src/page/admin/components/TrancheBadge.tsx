import { Badge } from "@/components/ui/badge";
import { useState } from "react";

import type { UserDto } from "@/features/mention/user.dto";

export const TrancheBadge = ({
  studentData,
  tranche,
}: {
  studentData: UserDto;
  tranche: keyof UserDto;
}) => {
  const value = studentData[tranche] as boolean;
  const [isPaid, setIsPaid] = useState<boolean>(value);
  return (
    <Badge
      className={`${
        isPaid ? "bg-green-600" : "bg-red-600"
      } text-white cursor-pointer`}
      onClick={() => setIsPaid((value) => !value)}
    >
      {isPaid ? "Payé" : "Non payé"}
    </Badge>
  );
};
