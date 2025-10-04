"use client";

import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a label list";

const chartData = [
  { Mention: "DROIT", Etudiant: 275, fill: "#dc2626" },
  { Mention: "INFORMATIQUE", Etudiant: 200, fill: "#7c3aed" },
  { Mention: "ECONOMIE", Etudiant: 187, fill: "#d97706" },
  { Mention: "AGRONOMIE", Etudiant: 173, fill: "#059669" },
  { Mention: "LANGUE ETRANGERE APPLIQUE", Etudiant: 90, fill: "#2563eb" },
  { Mention: "SCIENCE DE LA TERRE", Etudiant: 90, fill: "#4b5563" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
  },
  safari: {
    label: "Safari",
  },
  firefox: {
    label: "Firefox",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export const ChartPie = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Label List</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[450px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="Etudiant" hideLabel />}
            />
            <Pie data={chartData} dataKey="Etudiant">
              <LabelList
                dataKey="Mention"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium"></div>
        <div className="text-muted-foreground leading-none">Total etudiant</div>
      </CardFooter>
    </Card>
  );
};
