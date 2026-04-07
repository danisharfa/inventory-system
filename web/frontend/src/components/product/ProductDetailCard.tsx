import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { type Product } from './ProductTable';
import { DeleteProductDialog } from './DeleteProductDialog';
import { EditProductDialog } from './EditProductDialog';

interface Props {
  data: Product;
}

export function ProductDetailCard({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2 className="text-xl font-semibold">{data.name}</h2>
        </CardTitle>
        <CardAction>
          <DeleteProductDialog productId={data.id} />
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground">Description</span>
            <span className="font-semibold">{data.description || '-'}</span>
          </div>
          <div className="flex flex-row gap-1">
            <span className="text-muted-foreground">Price:</span>
            <span className="font-semibold">
              {data.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
            </span>
          </div>
          <div className="flex flex-row gap-1">
            <span className="text-muted-foreground">Quantity:</span>
            <span className="font-semibold">{data.quantity.toLocaleString('id-ID')}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <EditProductDialog product={data} />
      </CardFooter>
    </Card>
  );
}
