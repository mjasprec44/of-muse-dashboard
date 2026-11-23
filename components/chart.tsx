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
import { Skeleton } from "./ui/skeleton";

interface AppBarChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>[]; // The array of data objects
  config: ChartConfig; // The config object
  xAxisKey: string; // What key to use for the X-axis (e.g., "month")
  isLoading?: boolean; // Optional loading state
}

export function ChartBardGrid({
  data,
  config,
  xAxisKey,
  isLoading = false,
}: AppBarChartProps) {
  if (isLoading) {
    return <Skeleton className="h-52 w-full bg-red-500 rounded-md" />;
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex h-75 w-full items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        No data available
      </div>
    );
  }

  return (
    <ChartContainer config={config} className="min-h-50 border ">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={xAxisKey}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        {Object.entries(config).map(([key, config]) => (
          <Bar
            key={key}
            dataKey={key}
            fill={`var(--color-${key})`}
            radius={4}
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
}
