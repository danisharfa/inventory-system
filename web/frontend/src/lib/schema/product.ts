import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  categoryId: z.number().optional(),
  price: z.number().min(0, 'Price must be >= 0'),
  quantity: z.number().min(0, 'Quantity must be >= 0'),
});

export type ProductInput = z.infer<typeof productSchema>;
