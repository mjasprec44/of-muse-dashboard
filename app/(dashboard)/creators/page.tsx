import { ChartBardGrid } from "@/components/chart";
import { DataTable } from "@/components/data-table";
import LoadingSkeleton from "@/components/loading-skeleton";
import { getAllCreators } from "@/lib/infloww/creators";
import { columns } from "@/utils/features/data-table-features";
import { Creator } from "@/utils/types/creator.types";
import { Suspense } from "react";

const CreatorsContent = async () => {
  const creators = await getAllCreators();

  const filteredCreator: Creator[] = creators.map((c) => {
    return {
      name: c.name,
      nickName: c.nickName,
      platformPid: String(c.platformPid),
      status: c.status,
      tagName: c.tagName,
    };
  });

  return (
    <main className="container">
      <section className="px-2 py-4 md:py-8 md:px-8 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        <DataTable
          columns={columns}
          data={filteredCreator}
          className="col-span-full"
        />
      </section>
    </main>
  );
};

export default async function page() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <CreatorsContent />
    </Suspense>
  );
}
