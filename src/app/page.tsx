import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      <div className="flex gap-x-8 justify-items-center items-center pt-2">
        <div className="font-bold mr-auto ml-8 text-lg">BibleApp</div>
        <Input placeholder="Search..." className="max-w-[600px]" />

        <Button variant="outline" className="ml-auto ">
          Log In
        </Button>
        <Button variant="outline" className="mr-8">
          Sign In
        </Button>
      </div>
    </div>
  );
}
