import { ChartBarDemoGrid } from "@/components/chart";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <main>
      <SidebarTrigger />

      <section className="h-[calc(100vh-4rem)] w-7xl border border-red-500 flex items-center justify-center">
        <ChartBarDemoGrid />
      </section>
    </main>
  );
}
