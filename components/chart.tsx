"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80, other: 99 },
  { month: "February", desktop: 305, mobile: 200, other: 99 },
  { month: "March", desktop: 237, mobile: 120, other: 99 },
  { month: "April", desktop: 73, mobile: 190, other: 99 },
  { month: "May", desktop: 209, mobile: 130, other: 99 },
  { month: "June", desktop: 214, mobile: 140, other: 99 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
  other: {
    label: "Other",
    color: "#eee",
  },
} satisfies ChartConfig;

export function ChartBarDemoGrid() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-50 border border-blue-500 w-full"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />{" "}
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        <Bar dataKey="other" fill="var(--color-other)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
