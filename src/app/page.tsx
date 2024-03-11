import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="flex gap-x-7">
        <div className="font-bold mr-auto">BibleApp</div>
        <Button variant="outline">read</Button>
        <div>about</div>
        <div>contact</div>
        <Button variant="outline" className="ml-auto">
          read
        </Button>
      </div>
    </div>
  );
}
