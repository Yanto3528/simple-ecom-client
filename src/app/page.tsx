'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { Input } from '@/components/ui/Input';
import { InputNumber } from '@/components/ui/InputNumber';
import { InputPassword } from '@/components/ui/InputPassword';

export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <main className="container mx-auto flex items-center justify-center flex-col min-h-screen gap-2">
      <div className="w-[500px] flex flex-col gap-3">
        <Input placeholder="Enter name" label="Name" />
        <Input type="email" placeholder="Enter email" label="Email" />
        <InputPassword placeholder="Enter password" label="Password" />
        <InputNumber
          value={value}
          onChange={setValue}
          min={0}
          max={100}
          placeholder="Enter age"
          label="Age"
        />
        <div className="flex items-center flex-wrap gap-2">
          <Chip variant="subtle">Technology</Chip>
          <Chip colorScheme="secondary" variant="subtle">
            Design
          </Chip>
          <Chip variant="subtle" colorScheme="danger">
            Infra
          </Chip>
          <Chip variant="subtle" colorScheme="success">
            Web development
          </Chip>
          <Chip variant="subtle" colorScheme="warning">
            Web development
          </Chip>
          <Chip variant="subtle" colorScheme="info">
            Web development
          </Chip>
        </div>
        <Button className="mt-3" size="sm">
          Sign in
        </Button>
      </div>
    </main>
  );
}
