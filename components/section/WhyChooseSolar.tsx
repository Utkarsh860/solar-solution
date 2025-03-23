"use client"
import { WorldMap } from "../ui/world-map";

import { Cover } from "../ui/cover";

import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-[90%] md:max-w-6xl mx-auto h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans">
        Get Assured Benefits
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Lower Bills",
    title: "Reduce electricity costs by up to 80%.",
    src: "/low-bills.jpg",
    content: <DummyContent />,
  },
  {
    category: "Energy Independence",
    title: "Generate your own Energy, avoid blackouts, and reduce reliance on the grid.",
    src: "/energy-independence.jpg",
    content: <DummyContent />,
  },
  {
    category: "Government Subsidies and Incentives",
    title: "Get up to 1,08,000 in solar incentives and tax benefits.",
    src: "/government.jpg",
    content: <DummyContent />,
  },

  {
    category: "Eco-Friendly",
    title: "Reduce carbon footprint and contribute to a cleaner environment.",
    src: "/eco-friendly.jpg",
    content: <DummyContent />,
  },
  {
    category: "Low Maintenance",
    title: "Durable panels last 25+ years with minimal upkeep.",
    src: "/low-maintain.jpg",
    content: <DummyContent />,
  },
  {
    category: "Increase Property Value",
    title: "Solar-equipped homes sell faster and at higher prices.",
    src: "/property.jpg",
    content: <DummyContent />,
  },
];


export default function WhyChooseSolar() {
  return (
    <div className="bg-black w-full">
      <div className="max-w-7xl mx-auto text-center mb-[4rem]">
        <h1 className="text-4xl sm:text-7xl font-semibold max-w-7xl mx-auto text-center mt-2  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 dark:from-neutral-800 dark:via-white dark:to-white">
          Why choose &nbsp;
          <Cover>solar energy</Cover>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base md:text-lg   font-normal text-neutral-500 pt-2 pb-4">
          Power your home with clean energy, save money, and enjoy government
          incentives and subsidies.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 31.2304, lng: 121.4737 }, // Shanghai, China
            end: { lat: 39.9042, lng: 116.4074 }, // Beijing, China
          },
          {
            start: { lat: 39.9042, lng: 116.4074 }, // Beijing, China
            end: { lat: 35.6762, lng: 139.6503 }, // Tokyo, Japan
          },
          {
            start: { lat: 35.6762, lng: 139.6503 }, // Tokyo, Japan
            end: { lat: 12.9716, lng: 77.5946 }, // Bengaluru, India
          },
          {
            start: { lat: 12.9716, lng: 77.5946 }, // Bengaluru, India
            end: { lat: 25.2769, lng: 55.2962 }, // Dubai, UAE
          },
          {
            start: { lat: 25.2769, lng: 55.2962 }, // Dubai, UAE
            end: { lat: 55.605, lng: 13.0038 }, // Malmö, Sweden
          },
          {
            start: { lat: 55.605, lng: 13.0038 }, // Malmö, Sweden
            end: { lat: 52.52, lng: 13.405 }, // Berlin, Germany
          },
          {
            start: { lat: 52.52, lng: 13.405 }, // Berlin, Germany
            end: { lat: 32.7157, lng: -117.1611 }, // San Diego, USA
          },

          {
            start: { lat: 34.0522, lng: -118.2437 }, // Los Angeles, USA
            end: { lat: 21.3069, lng: -157.8583 }, // Honolulu, USA
          },
        ]}
      />
      <AppleCardsCarouselDemo />
    </div>
  );
}
