'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from '@tanstack/react-form';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

import { productSchema } from '@/lib/schema/product';

export function AddProductDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      quantity: 0,
    },

    onSubmit: async ({ value }) => {
      const result = productSchema.safeParse(value);

      if (!result.success) {
        const firstError = result.error.issues[0]?.message;
        toast.error(firstError || 'Invalid input', {
          position: 'bottom-center',
        });
        return;
      }

      try {
        const res = await fetch('http://localhost:8080/api/product', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(result.data),
        });

        if (!res.ok) throw new Error();

        toast.success('Product created', {
          position: 'bottom-center',
        });

        setOpen(false);
        router.refresh();
      } catch {
        toast.error('Failed to create product', {
          position: 'bottom-center',
        });
      }
    },
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);

        if (!isOpen) {
          form.reset();
        }
      }}
    >
      <DialogTrigger asChild>
        <Button>Add Product</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogDescription>Fill in the product details below and click save.</DialogDescription>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Product Name</Label>
            <form.Field name="name">
              {(field) => (
                <Input
                  id="name"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Enter product name"
                />
              )}
            </form.Field>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="description">Description</Label>
            <form.Field name="description">
              {(field) => (
                <Input
                  id="description"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Enter description"
                />
              )}
            </form.Field>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="price">Price</Label>
            <form.Field name="price">
              {(field) => (
                <Input
                  id="price"
                  type="number"
                  value={field.state.value}
                  onChange={(e) => {
                    const val = e.target.value;
                    field.handleChange(val === '' ? 0 : Number(val));
                  }}
                  placeholder="Enter price"
                />
              )}
            </form.Field>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="quantity">Quantity</Label>
            <form.Field name="quantity">
              {(field) => (
                <Input
                  id="quantity"
                  type="number"
                  value={field.state.value}
                  onChange={(e) => {
                    const val = e.target.value;
                    field.handleChange(val === '' ? 0 : Number(val));
                  }}
                  placeholder="Enter quantity"
                />
              )}
            </form.Field>
          </div>

          <DialogFooter>
            <Button type="submit" disabled={form.state.isSubmitting}>
              {form.state.isSubmitting ? 'Saving...' : 'Save'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
