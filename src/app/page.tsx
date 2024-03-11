import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex a min-h-screen flex-col ">
      <Navbar />

      <Hero />
    </main>
  );
}
