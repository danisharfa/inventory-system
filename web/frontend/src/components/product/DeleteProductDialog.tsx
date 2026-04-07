'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Trash } from 'lucide-react';

import { apiUrl } from '@/lib/api';

interface DeleteProductDialogProps {
  productId: number;
}

export function DeleteProductDialog({ productId }: DeleteProductDialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);

    try {
      const res = await fetch(apiUrl(`/product/${productId}`), {
        method: 'DELETE',
      });

      if (!res.ok) {
        let errorMessage = 'Failed to delete product';

        try {
          const errorBody = await res.json();
          errorMessage = errorBody?.message ?? errorMessage;
        } catch {
          errorMessage = await res.text().catch(() => errorMessage);
        }

        throw new Error(errorMessage);
      }

      setOpen(false);
      router.push('/inventory');
      router.refresh();
      toast.success('Product deleted successfully', {
        position: 'bottom-center',
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to delete product';
      toast.error(message, {
        position: 'bottom-center',
      });
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="sm">
          <Trash />
          Delete
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this product and remove it
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            disabled={isDeleting}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
