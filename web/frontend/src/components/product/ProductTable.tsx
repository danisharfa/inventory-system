'use client';

import { ColumnDef } from '@tanstack/react-table';
import { GoButton } from '@/components/GoButton';
import { Badge } from '../ui/badge';

export type Product = {
  id: number;
  name: string;
  description: string;
  categoryId?: number;
  category?: {
    name: string;
  };
  price: number;
  quantity: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'category.name',
    header: 'Category',
    cell: ({ row }) => {
      const category = row.original.category?.name;
      return <Badge variant="secondary">{category || 'Uncategorized'}</Badge>;
    },
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => {
      const price = row.original.price;
      return price.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
    },
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
    cell: ({ row }) => {
      const quantity = row.original.quantity;
      return quantity.toLocaleString('id-ID');
    },
  },
  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => {
      const product = row.original;

      return <GoButton title="Detail" route={`/inventory/${product.id}`} />;
    },
  },
];
