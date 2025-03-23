
"use client"
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";



const Header = () => {
  return (
    <div>
      <div className="relative flex h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent blur-lg"></div>
        <Navbar className="top-2" />

        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-8 pt-20 md:pt-0 mt-[4rem] md:mt-0">
          
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center font-bold text-transparent text-5xl md:text-7xl py-4">
            Power Your Future with Solar Energy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm md:text-lg   font-normal text-neutral-500 pt-2 pb-4">
            Switch to
            solar today and cut your electricity bills by 70%. Be the part of
            green revolution. Save Money, Reduce your Carbon footprint, and gain
            energy independence. Start today.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-4">
            <button
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50 w-full md:w-[fit-content]"
              onClick={() => {
                alert("Get a Free Consult");
              }}
            >
              Get a Free Consult
            </button>
            <button
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50 w-full md:w-[fit-content]"
              onClick={() => {
                alert("Call-to-Action");
              }}
            >
              Call-to-Action
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-[#03071e] to-black blur-lg"></div>
      </div>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div>
      <div
        className={cn(
          "fixed w-[90%] md:max-w-4xl mx-auto inset-x-0 z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Why Solar?">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Benefits">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
             
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="globe.svg"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="globe.svg"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="globe.svg"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="globe.svg"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="globe.svg"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="globe.svg"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header