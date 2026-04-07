'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { apiUrl } from '@/lib/api';

type Category = {
  id: number;
  name: string;
};

type Props = {
  value?: number;
  onChange: (value?: number) => void;
};

export function CategorySelect({ value, onChange }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    fetch(apiUrl('/category'))
      .then((res) => res.json())
      .then(setCategories)
      .catch(() => setCategories([]));
  }, []);

  const handleAddCategory = async () => {
    if (!newCategory) return;

    const res = await fetch(apiUrl('/category'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newCategory }),
    });

    const data = await res.json();

    setCategories((prev) => [...prev, data]);
    onChange(data.id);

    setNewCategory('');
    setIsAdding(false);
  };

  return (
    <div className="flex flex-col gap-2">
      {!isAdding ? (
        <div className="flex gap-2">
          <Select
            value={value ? String(value) : ''}
            onValueChange={(val) => onChange(val ? Number(val) : undefined)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>

            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={String(cat.id)}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button type="button" variant="outline" onClick={() => setIsAdding(true)}>
            +
          </Button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Input
            placeholder="New category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />

          <Button type="button" onClick={handleAddCategory}>
            Save
          </Button>

          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setIsAdding(false);
              setNewCategory('');
            }}
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
}
