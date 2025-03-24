"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      question: "How much can I save by switching to solar?",
      answer:
        "Savings depend on your electricity usage and solar panel capacity. On average, customers save 50-80% on their electricity bills.",
    },
    {
      question: "Is there any government subsidy available?",
      answer:
        "Yes! The Indian government offers subsidies under various solar schemes. The subsidy amount varies by state and system size.",
    },
    {
      question: "How long does solar panel installation take?",
      answer:
        "A typical residential installation takes 2-5 days, depending on system size and site conditions.",
    },
    {
      question: "What maintenance do solar panels require?",
      answer:
        "Solar panels require minimal maintenance. Cleaning them every few months and ensuring they are free from debris will keep them efficient.",
    },
    {
      question: "What happens on cloudy or rainy days?",
      answer:
        "Solar panels still generate power on cloudy days, but at a reduced efficiency. A battery backup system can store excess energy for later use.",
    },
  ];

  return (
    <div className="w-[90%] md:max-w-6xl mx-auto relative z-10 py-16">
      <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl py-8">
        Frequently Asked Questions
      </h2>
      <p className="max-w-2xl text-base md:text-lg font-normal text-neutral-500 pt-2 leading-6">
        Everything you need to know about switching to solar energy.
      </p>
      <div className="space-y-4 mt-12">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}


function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl p-4 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] shadow-md">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-medium text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-neutral-400 text-sm">{answer}</p>
      </div>
    </div>
  );
}
