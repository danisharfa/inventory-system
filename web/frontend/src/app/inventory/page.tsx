import { DataTable } from '@/components/ui/data-table';
import { columns } from '@/components/product/ProductTable';
import { AddProductDialog } from '@/components/product/AddProductDialog';

async function getProducts() {
  console.log('Fetching products from API...');
  const res = await fetch('http://localhost:8080/api/product');

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
