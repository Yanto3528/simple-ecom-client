import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="container mx-auto flex items-center justify-center flex-col min-h-screen gap-2">
      <div className="flex items-center gap-2">
        <Button>Submit</Button>
        <Button variant="outline">Cancel</Button>
        <Button variant="outline" loading>
          Cancel
        </Button>
        <Button className="bg-primary-light border-none text-primary">Cancel</Button>
        <Button loading>Loading...</Button>
      </div>
      <div className="flex items-center gap-2">
        <Button colorScheme="secondary">Cancel</Button>
        <Button colorScheme="secondary" variant="outline">
          Cancel
        </Button>
        <Button className="bg-secondary-light border-none text-secondary-darker">Cancel</Button>
        <Button colorScheme="secondary" loading>
          Loading...
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button colorScheme="danger">Cancel</Button>
        <Button colorScheme="danger" variant="outline">
          Cancel
        </Button>
        <Button className="bg-danger-light border-none text-danger">Cancel</Button>
        <Button colorScheme="danger" loading>
          Loading...
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="text">Cancel</Button>
        <Button colorScheme="danger" variant="text">
          Cancel
        </Button>
        <Button colorScheme="secondary" variant="text">
          Cancel
        </Button>
        <Button variant="text" loading>
          Loading...
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="link">Cancel</Button>
      </div>
    </main>
  );
}
