import { BackButton } from '@/components/BackButton';
import { ProductDetailCard } from '@/components/product/ProductDetailCard';
import { apiUrl } from '@/lib/api';

type Params = Promise<{ id: string }>;

async function getProductDetails(id: string) {
  const res = await fetch(apiUrl(`/product/${id}`));

  return res.json();
}

export default async function ProductDetailPage({ params }: { params: Params }) {
  const { id } = await params;

  const data = await getProductDetails(id);

  return (
    <div className="flex min-h-svh flex-col gap-6 p-6">
      <div className="flex flex-col gap-4">
        <div className="">
          <BackButton />
        </div>
        <ProductDetailCard data={data} />
      </div>
    </div>
  );
}
