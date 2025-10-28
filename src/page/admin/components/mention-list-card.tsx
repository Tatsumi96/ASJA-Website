import { Card, CardContent } from '@/components/ui/card';
import type { Mention } from '@/core/types';
import type { MentionDto } from '@/features/mention/mention.dto';
import { MdPerson2 } from 'react-icons/md';
import { useAdminDashboardContext } from '../bloc/useAdminContext';
import { BarChartGraph } from './bar-chart';

const MentionCart = ({
  className,
  mention,
  color,
  item,
  totalStudent,
}: {
  className: string;
  mention: Mention;
  color: string;
  item: MentionDto;
  totalStudent: number;
}) => {
  return (
    <Card
      className={` ${className} flex w-2/7 p-5 transition-all duration-500 items-center justify-center text-black h-85 dark:bg-transparent dark:text-white text-2xl cursor-pointer font-semibold`}
    >
      <CardContent className="flex wrap-anywhere justify-center w-full h-full flex-col ">
        <p className=" text-start text-3xl">{mention}</p>
        <p className="flex text-start my-5 text-lg gap-2 items-center">
          {' '}
          <MdPerson2 className=" text-gray-400 text-2xl" />
          {totalStudent} etudiants
        </p>
        <BarChartGraph color={color} item={item} mention={mention} />
      </CardContent>
    </Card>
  );
};

export const MentionCardList = () => {
  const { mentionData } = useAdminDashboardContext();
  return (
    <div className="flex py-10 items-center gap-5  bg-transparent justify-center flex-wrap w-full flex-row transition-all duration-500">
      {' '}
      <MentionCart
        item={mentionData as MentionDto}
        totalStudent={mentionData?.DROIT.totalStudent as number}
        mention="DROIT"
        className="border-red-600 border-4"
        color="#dc2626"
      />
      <MentionCart
        item={mentionData as MentionDto}
        totalStudent={mentionData?.INFORMATIQUE.totalStudent as number}
        mention="INFORMATIQUE"
        className="border-violet-600 border-4"
        color="#7c3aed"
      />
      <MentionCart
        item={mentionData as MentionDto}
        totalStudent={mentionData?.ECONOMIE.totalStudent as number}
        mention="ECONOMIE"
        className="border-yellow-600 border-4"
        color="#d97706"
      />
      <MentionCart
        item={mentionData as MentionDto}
        totalStudent={mentionData?.AGRONOMIE.totalStudent as number}
        mention="AGRONOMIE"
        className="border-green-600 border-4"
        color="#059669"
      />
      <MentionCart
        item={mentionData as MentionDto}
        totalStudent={mentionData?.LANGUE_ET_CULTURE.totalStudent as number}
        mention="LANGUE ET CULTURE"
        className="border-blue-600 border-4"
        color="#2563eb"
      />
      <MentionCart
        item={mentionData as MentionDto}
        totalStudent={mentionData?.SCIENCE_DE_LA_TERRE.totalStudent as number}
        mention="SCIENCE DE LA TERRE"
        className="border-gray-600 border-4"
        color="#4b5563"
      />
    </div>
  );
};
