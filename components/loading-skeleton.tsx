import { Skeleton } from "./ui/skeleton";

export default function LoadingSkeleton({
  customClass,
}: {
  customClass?: string;
}) {
  return (
    <Skeleton className={`h-[90vh] w-full m-4 bg-gray-300 ${customClass}`} />
  );
}
