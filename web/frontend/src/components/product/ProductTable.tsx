'use client';

import { ColumnDef } from '@tanstack/react-table';
import { GoButton } from '../GoButton';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
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
