import { Card, CardBody } from '@/components/ui/Card';
import { Skeleton } from '@/components/ui/Skeleton';

const skeletonItems = new Array(12).fill(null);

export function CategoryProductsLoading() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-common-grid-products gap-4">
      {skeletonItems.map((_, index) => (
        <Card key={index} className="overflow-hidden">
          <Skeleton className="aspect-square h-auto rounded-none" />
          <CardBody>
            <Skeleton className="mb-2 w-[50%]" />
            <div className="space-y-1 mb-4">
              <Skeleton className="h-4" />
              <Skeleton className="w-[30%] h-4" />
            </div>
            <Skeleton className="w-[50%]" />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
