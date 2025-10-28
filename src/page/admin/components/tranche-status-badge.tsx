import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

import type { Tranche } from '@/core/types';
import type { UserDto } from '@/features/mention/user.dto';
import { useAdminDashboardContext } from '../bloc/useAdminContext';
export const TrancheBadge = ({
  studentData,
  tranche,
  trancheId,
}: {
  studentData: UserDto;
  tranche: keyof UserDto;
  trancheId: string;
}) => {
  const value = studentData[tranche] as boolean;
  const [isPaid, setIsPaid] = useState<boolean>(value);

  const { updateTranche } = useAdminDashboardContext();

  const toggle = async () => {
    const newValue = !isPaid;
    setIsPaid(newValue);

    await updateTranche({
      id: trancheId,
      tranche: tranche as Tranche,
      value: newValue,
    });
  };

  return (
    <Badge
      className={`${
        isPaid ? 'bg-green-600' : 'bg-red-600'
      } text-white cursor-pointer`}
      onClick={toggle}
    >
      {isPaid ? 'Payé' : 'Non payé'}
    </Badge>
  );
};
