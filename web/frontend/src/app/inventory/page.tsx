import { DataTable } from '@/components/ui/data-table';
import { columns } from '@/components/product/ProductTable';
import { AddProductDialog } from '@/components/product/AddProductDialog';
import { apiUrl } from '@/lib/api';

async function getProducts() {
  const res = await fetch(apiUrl('/product'));

  return res.json();
}
export default async function InventoryPage() {
  const data = await getProducts();

  return (
    <div className="flex min-h-svh flex-col gap-6 p-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <AddProductDialog />
        </div>
        <DataTable columns={columns} data={data} title="Product List" />
      </div>
    </div>
  );
}
