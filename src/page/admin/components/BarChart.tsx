import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { Niveau: "L1", Etudiant: 186 },
  { Niveau: "L2", Etudiant: 305 },
  { Niveau: "L3", Etudiant: 237 },
  { Niveau: "M1", Etudiant: 73 },
  { Niveau: "M2", Etudiant: 209 },
];

const chartConfig = {
  Etudiant: {
    label: "Etudiant",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export const BarChartGraph = () => {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
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
          fill="var(--color-Etudiant)"
          radius={4}
          className="cursor-pointer"
        />
      </BarChart>
    </ChartContainer>
  );
};
