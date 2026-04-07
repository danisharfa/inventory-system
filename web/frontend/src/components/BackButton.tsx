'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { CircleArrowLeft } from 'lucide-react';

export function BackButton() {
  const router = useRouter();

  return (
    <Button variant="outline" onClick={() => router.back()}>
      <CircleArrowLeft />
      Back
    </Button>
  );
}
