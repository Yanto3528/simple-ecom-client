import { Skeleton } from '@/components/ui/Skeleton';

const skeletonItems = new Array(12).fill(null);

export function ProductCardsLoading() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skeletonItems.map((_, index) => (
        <Skeleton key={index} className="w-full h-auto aspect-square rounded-xl" />
      ))}
    </div>
  );
}
