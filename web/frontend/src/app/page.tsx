import { GoButton } from '@/components/GoButton';

export default function HomePage() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-3xl sm:text-6xl font-bold">Inventory System</h1>
      <GoButton title="Go to Inventory" route="/inventory" />
    </div>
  );
}
