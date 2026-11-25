import { ChartBardGrid } from "@/components/chart";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { fetchInfloww } from "@/lib/infloww/client";
import { Creator, InflowwResponse } from "@/lib/infloww/types";
import { Suspense } from "react";

// Chart 1: Traffic
const trafficData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
];
const trafficConfig = {
  desktop: { label: "Desktop", color: "#2563eb" },
  mobile: { label: "Mobile", color: "#60a5fa" },
};

// Chart 2: Revenue
const revenueData = [
  { quarter: "Q1", sales: 1500, expenses: 800 },
  { quarter: "Q2", sales: 2300, expenses: 1100 },
  { quarter: "Q3", sales: 4500, expenses: 2200 },
  { quarter: "Q4", sales: 9300, expenses: 3300 },
];
const revenueConfig = {
  sales: { label: "Sales", color: "#10b981" },
  expenses: { label: "Expenses", color: "#ef4444" },
};

const PageContent = async () => {
  const response =
    await fetchInfloww<InflowwResponse<Creator>>("/all-creators");
  console.log("response", response);
  return (
    <section className="px-2 py-4 md:py-8 md:px-8 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
      <ChartBardGrid
        data={trafficData}
        config={trafficConfig}
        xAxisKey="month"
      />
      <ChartBardGrid
        data={revenueData}
        config={revenueConfig}
        xAxisKey="quarter"
        isLoading={false}
      />
      <ChartBardGrid
        data={trafficData}
        config={trafficConfig}
        xAxisKey="month"
      />
      <ChartBardGrid
        data={revenueData}
        config={revenueConfig}
        xAxisKey="quarter"
        isLoading={false}
      />
      <ChartBardGrid
        data={trafficData}
        config={trafficConfig}
        xAxisKey="month"
      />
      <ChartBardGrid
        data={revenueData}
        config={revenueConfig}
        xAxisKey="quarter"
        isLoading={false}
      />
      <ChartBardGrid
        data={trafficData}
        config={trafficConfig}
        xAxisKey="month"
      />
      <ChartBardGrid
        data={revenueData}
        config={revenueConfig}
        xAxisKey="quarter"
        isLoading={false}
      />
      <ChartBardGrid
        data={trafficData}
        config={trafficConfig}
        xAxisKey="month"
      />
      <ChartBardGrid
        data={revenueData}
        config={revenueConfig}
        xAxisKey="quarter"
        isLoading={false}
      />
      <ChartBardGrid
        data={trafficData}
        config={trafficConfig}
        xAxisKey="month"
      />
      <ChartBardGrid
        data={revenueData}
        config={revenueConfig}
        xAxisKey="quarter"
        isLoading={false}
      />
    </section>
  );
};

export default async function page() {
  return (
    <main className="container">
      {/* <SidebarTrigger /> */}
      <Suspense>
        <PageContent />
      </Suspense>
    </main>
  );
}
