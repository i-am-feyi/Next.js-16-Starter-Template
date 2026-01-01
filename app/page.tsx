import { IconPackage } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <IconPackage size={24} />
      <h1>Next.js 16 Starter Kit</h1>
      <p>This is a test</p>
      <Button>Click me</Button>{" "}
    </div>
  );
}
