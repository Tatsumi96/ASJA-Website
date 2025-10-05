import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { MentionDto } from "@/features/mention/mention.dto";
import type { Mention } from "@/core/types";

export const BarChartGraph = ({
  mention,
  color,
  item,
}: {
  mention: Mention;
  color: string;
  item: MentionDto;
}) => {
  const chartData = [
    {
      Niveau: "L1",
      Etudiant:
        item?.[mention.replace(/ /g, "_") as keyof MentionDto]?.data[0]
          ?.studentNumber ?? 0,
    },
    {
      Niveau: "L2",
      Etudiant:
        item?.[mention.replace(/ /g, "_") as keyof MentionDto]?.data[1]
          ?.studentNumber ?? 0,
    },
    {
      Niveau: "L3",
      Etudiant:
        item?.[mention.replace(/ /g, "_") as keyof MentionDto]?.data[2]
          ?.studentNumber ?? 0,
    },
    {
      Niveau: "M1",
      Etudiant:
        item?.[mention.replace(/ /g, "_") as keyof MentionDto]?.data[3]
          ?.studentNumber ?? 0,
    },
    {
      Niveau: "M2",
      Etudiant:
        item?.[mention.replace(/ /g, "_") as keyof MentionDto]?.data[4]
          ?.studentNumber ?? 0,
    },
  ];

  const fakeData = [
    { Niveau: "L1", Etudiant: 324 },
    { Niveau: "L2", Etudiant: 100 },
    { Niveau: "L3", Etudiant: 43 },
    { Niveau: "M1", Etudiant: 12 },
    { Niveau: "M2", Etudiant: 90 },
  ];

  const data = item ? chartData : fakeData;

  const chartConfig = {
    Etudiant: {
      label: "Etudiant",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig;
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="Niveau"
          tickLine={false}
          tickMargin={5}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <Bar
          dataKey="Etudiant"
          fill={color}
          radius={4}
          className="cursor-pointer"
        />
      </BarChart>
    </ChartContainer>
  );
};
