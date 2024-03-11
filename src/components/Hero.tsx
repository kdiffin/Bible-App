import { Download, Github } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function Hero() {
  return (
    <main className="grid  place-items-center relative  pt-16 pb-8 md:pt-12 md:pb-24">
      <Image
        alt="a"
        src={"/cross.png"}
        className=" -top-0 opacity-30 absolute z-0 "
        width={700}
        height={1400}
        priority
      />
      <div className="text-center justify-center z-10 items-center flex flex-col ">
        <h1 className="text-5xl lg:text-7xl  xl:text-8xl xl:max-w-screen-lg mt-24 font-bold lg:tracking-tight xl:tracking-tighter">
          The definitive Bible app made for{" "}
          <span className="text-foreground-primary">Everyone.</span>
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          Astroship is a starter template for startups, marketuuing websites &
          landing pages.
          <wbr /> Built with Astro.build and TailwindCSS. You can quickly create
          any website with this starter.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="#"
            target="_blank"
            className="flex gap-1 items-center justify-center"
            rel="noopener"
          >
            <Download />
            Download for Free
          </Link>

          <Link href={"#"} rel="noopener" target="_blank">
            <Button
              size="lg"
              className="flex gap-1 items-center justify-center"
            >
              <Github />
              GitHub Repo
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Hero;
