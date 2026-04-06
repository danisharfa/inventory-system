'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface GoButtonProps {
  title: string;
  route: string;
}

export function GoButton({ title, route }: GoButtonProps) {
  const router = useRouter();

  return <Button onClick={() => router.push(route)}>{title}</Button>;
}
