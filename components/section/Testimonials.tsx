"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { cn } from "@/lib/utils";



const testimonials = [
  {
    name: "Amit Sharma",
    city: "Delhi",
    quote:
      "Excellent solar panel installation! My electricity bills have dropped significantly.",
  },
  {
    name: "Priya Verma",
    city: "Mumbai",
    quote:
      "Great service and support. The team explained everything clearly before installation.",
  },

  {
    name: "Rahul Nair",
    city: "Bangalore",
    quote:
      "Very satisfied with the quality of the panels. A great investment for my home.",
  },
  {
    name: "Sanya Gupta",
    city: "Jaipur",
    quote:
      "Professional and efficient installation. I highly recommend their services!",
  },
  {
    name: "Vikram Reddy",
    city: "Hyderabad",
    quote:
      "Affordable and reliable solar solutions. My home now runs on clean energy!",
  },
  {
    name: "Ankit Sharma",
    city: "Mumbai",
    quote:
      "Switching to solar was the best decision! My electricity bill has dropped by 75%, and I love contributing to a greener planet.",
  },
  {
    name: "Pooja Verma",
    city: "Delhi",
    quote:
      "The installation was quick, and the team was very professional. Plus, the government subsidy made it super affordable!",
  },
  {
    name: "Rajat Mehta",
    city: "Bangalore",
    quote:
      "I was skeptical at first, but now I see the difference. My home runs smoothly even on cloudy days with the battery backup.",
  },
  {
    name: "Neha Kapoor",
    city: "Pune",
    quote:
      "Excellent service and high-quality panels. It feels good to generate my own power and reduce dependence on the grid.",
  },
  {
    name: "Vikram Singh",
    city: "Jaipur",
    quote:
      "The savings are real! I’ve cut down my electricity expenses significantly. Highly recommend this company for solar solutions.",
  },
  {
    name: "Simran Kaur",
    city: "Chandigarh",
    quote:
      "From consultation to installation, everything was seamless. The app tracking feature helps me monitor my solar power usage easily!",
  },
  {
    name: "Amit Dubey",
    city: "Hyderabad",
    quote:
      "I feel proud to have made an eco-friendly choice. The panels are working great, and I haven’t faced any issues so far!",
  },
  {
    name: "Sneha Iyer",
    city: "Chennai",
    quote:
      "The customer support was excellent. They guided me through the entire process, and now I enjoy free electricity from the sun!",
  },
];

export default function Testimonials() {
  return (
    <div className="relative h-[50rem] w-full bg-black dark:bg-white mt-4">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "dark:[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center dark:bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
      <div className="w-[90%] md:max-w-6xl mx-auto">
        <h2 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl py-8">
          Real Stories, Real Savings – Join the Solar Revolution!
        </h2>
        <p className="relative max-w-2xl text-base md:text-lg   font-normal text-neutral-500 pt-2 leading-6">
          Across India, thousands of families and businesses have embraced solar
          energy to cut down their electricity bills, enjoy government
          subsidies, and contribute to a greener future.
        </p>
        <div className="h-[30rem] rounded-md flex flex-col antialiased dark:bg-white bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
}

    // Real Stories, Real Savings – Join the Solar Revolution!

    