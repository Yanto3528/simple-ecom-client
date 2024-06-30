import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function Home() {
  return (
    <main className="container mx-auto flex items-center justify-center flex-col min-h-screen gap-2">
      <div className="w-[500px] flex flex-col gap-3">
        <Input placeholder="Enter name" label="Name" />
        <Input type="email" placeholder="Enter email" label="Email" />
        <Input type="password" placeholder="Enter password" label="Password" />
        <Button className="mt-3" size="sm">
          Sign in
        </Button>
      </div>
    </main>
  );
}
