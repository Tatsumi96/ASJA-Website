'use client';

import { Pie, PieChart } from 'recharts';

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useAdminDashboardContext } from '../bloc/useStudentSpaceContext';

export const ChartPie = () => {
  const { mentionData } = useAdminDashboardContext();

  const item = [
    {
      Mention: 'DROIT',
      Etudiant: mentionData?.DROIT.totalStudent,
      fill: '#dc2626',
    },
    {
      Mention: 'INFORMATIQUE',
      Etudiant: mentionData?.INFORMATIQUE.totalStudent,
      fill: '#7c3aed',
    },
    {
      Mention: 'ECONOMIE',
      Etudiant: mentionData?.ECONOMIE.totalStudent,
      fill: '#d97706',
    },
    {
      Mention: 'AGRONOMIE',
      Etudiant: mentionData?.AGRONOMIE.totalStudent,
      fill: '#059669',
    },
    {
      Mention: 'LEA',
      Etudiant: mentionData?.LANGUE_ET_CULTURE.totalStudent,
      fill: '#2563eb',
    },
    {
      Mention: 'ST',
      Etudiant: mentionData?.SCIENCE_DE_LA_TERRE.totalStudent,
      fill: '#4b5563',
    },
  ];
  const fakeData = [
    { Mention: 'DROIT', Etudiant: 275, fill: '#dc2626' },
    { Mention: 'INFORMATIQUE', Etudiant: 200, fill: '#7c3aed' },
    { Mention: 'ECONOMIE', Etudiant: 187, fill: '#d97706' },
    { Mention: 'AGRONOMIE', Etudiant: 173, fill: '#059669' },
    { Mention: 'LEA', Etudiant: 90, fill: '#2563eb' },
    { Mention: 'ST', Etudiant: 90, fill: '#4b5563' },
  ];

  const chartData = mentionData ? item : fakeData;

  const chartConfig = {
    Etudiant: {
      label: 'Etudiant',
    },
    DROIT: {
      label: 'DROIT',
    },
    INFORMATIQUE: {
      label: 'INFORMATIQUE',
    },
    ECONOMIE: {
      label: 'ECONONOMIE',
    },
    AGRONOMIE: {
      label: 'AGRONOMIE',
    },

    LEA: {
      label: 'LANGUE ETRANGERE APPLIQUE',
    },

    ST: {
      label: 'SCIENCE DE LA TERRE',
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={chartConfig}
      className="w-1/4 transition-all duration-500 flex justify-center  items-center  rounded-xl "
    >
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={chartData}
          dataKey="Etudiant"
          className="cursor-pointer"
          nameKey="Mention"
        ></Pie>
      </PieChart>
    </ChartContainer>
  );
};
