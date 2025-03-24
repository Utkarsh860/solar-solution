"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    city: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const [start, setStart] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }
    }
  };
  return (
    <div
  ref={containerRef}
  className={cn(
    "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]",
    className
  )}
>
  <ul
    ref={scrollerRef}
    className={cn(
      "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
      start && "animate-scroll",
      pauseOnHover && "hover:[animation-play-state:paused]"
    )}
  >
    {items.map((item) => (
      <li
        className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-slate-800 bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-4"
        key={item.name}
      >
        <blockquote className="flex flex-col justify-between h-full">
          <div
            aria-hidden="true"
            className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
          ></div>
          <span className="relative z-20 text-base leading-[1.6]dark:text-gray-100 font-medium text-white">
            {item.quote}
          </span>
          <div className="relative z-20 mt-6 flex flex-row items-center">
            <span className="flex flex-col gap-1">
              <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400 flex justify-center items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                  className="block"
                >
                  <path d="M343-470ZM80-120v-480l320-240 215 162q-25 3-47 11.5T526-644l-126-96-240 180v360h160v80H80Zm320 0v-76q0-21 10.5-39.5T439-265q46-27 96.5-41T640-320q54 0 104.5 14t96.5 41q18 11 28.5 29.5T880-196v76H400Zm86-80h308q-35-20-74-30t-80-10q-41 0-80 10t-74 30Zm154-160q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520q-17 0-28.5 11.5T600-480q0 17 11.5 28.5T640-440Zm0 240Z" />
                </svg>
                <span className="block">
                  {item.name}, {item.city}
                </span>
              </span>
            </span>
          </div>
        </blockquote>
      </li>
    ))}
  </ul>
</div>
  );
};

{
  /* <div
  ref={containerRef}
  className={cn(
    "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]",
    className
  )}
>
  <ul
    ref={scrollerRef}
    className={cn(
      "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
      start && "animate-scroll",
      pauseOnHover && "hover:[animation-play-state:paused]"
    )}
  >
    {items.map((item) => (
      <li
        className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-slate-800 bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-4"
        key={item.name}
      >
        <blockquote className="flex flex-col justify-between h-full">
          <div
            aria-hidden="true"
            className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
          ></div>
          <span className="relative z-20 text-base leading-[1.6]dark:text-gray-100 font-medium text-white">
            {item.quote}
          </span>
          <div className="relative z-20 mt-6 flex flex-row items-center">
            <span className="flex flex-col gap-1">
              <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400 flex justify-center items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                  className="block"
                >
                  <path d="M343-470ZM80-120v-480l320-240 215 162q-25 3-47 11.5T526-644l-126-96-240 180v360h160v80H80Zm320 0v-76q0-21 10.5-39.5T439-265q46-27 96.5-41T640-320q54 0 104.5 14t96.5 41q18 11 28.5 29.5T880-196v76H400Zm86-80h308q-35-20-74-30t-80-10q-41 0-80 10t-74 30Zm154-160q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520q-17 0-28.5 11.5T600-480q0 17 11.5 28.5T640-440Zm0 240Z" />
                </svg>
                <span className="block">
                  {item.name}, {item.city}
                </span>
              </span>
            </span>
          </div>
        </blockquote>
      </li>
    ))}
  </ul>
</div>; */
}
