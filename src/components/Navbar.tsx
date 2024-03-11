import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Navbar() {
  return (
    <div className="flex  justify-items-center px-24 z-10  py-4  items-center ">
      <div className="font-bold mr-auto flex-1 text-lg">BibleApp</div>
      <Input placeholder="Search..." className="max-w-[750px]" />

      <div className="gap-2 flex flex-1 items-center justify-center">
        <Button variant="outline" className="ml-auto ">
          Log In
        </Button>
        <Button variant="outline" className="">
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
