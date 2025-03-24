"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // ✅ FIXED: Correct import
import { LinkPreview } from "@/components/ui/link-preview";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Subsidy() {
  const [systemSize, setSystemSize] = useState<keyof typeof subsidyRates>(3);

  const [loanAmount, setLoanAmount] = useState(0);
  const [tenure, setTenure] = useState("5");
  const [emi, setEmi] = useState(0);

  const subsidyRates = { 3: 30000, 5: 48000, 10: 78000 };
  const systemCosts = { 3: 150000, 5: 250000, 10: 500000 };

  const calculateEMI = () => {
    const subsidyAmount = subsidyRates[systemSize];
    const totalCost = systemCosts[systemSize];
    const finalCost = totalCost - subsidyAmount;
    const interestRate = 8.5 / 100 / 12; // 8.5% yearly interest
    const tenureMonths = Number(tenure) * 12;

    const monthlyEMI =
      (finalCost * interestRate * Math.pow(1 + interestRate, tenureMonths)) /
      (Math.pow(1 + interestRate, tenureMonths) - 1);

    setLoanAmount(finalCost);
    setEmi(Number(monthlyEMI.toFixed(2)));
  };

  return (
    <div className="w-[90%] md:max-w-6xl mx-auto h-full pt-16">
      <h2 className="text-4xl sm:text-7xl  font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans py-4">
        Switch to Solar & Save Big
      </h2>
      <div className="flex justify-between mt-4 md:mt-16 h-[40rem] gap-1 md:gap-8 flex-col-reverse md:flex-row">
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-[1.4rem] font-sans tracking-tight font-light">
            Unlock solar savings with{"  "}
            <LinkPreview
              url="https://www.india.gov.in/spotlight/pm-surya-ghar-muft-bijli-yojana"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-500 text-[1.7rem]"
            >
              Govt. PM Surya Ghar Yojana
            </LinkPreview>{" "}
            Govt. subsidy up to ₹1,08,000 & Free Electricity.
          </div>
          <button
            className="h-12 w-1/2 rounded-md border border-slate-800 bg-gradient-to-r from-gray-800 to-gray-900 px-6 font-medium text-white hover:opacity-80"
            onClick={() => alert("Get a Free Consult")}
          >
            How to do
          </button>
        </div>

        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full border border-slate-800 bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-white mb-3 font-sans">
              📊 Check Your Solar EMI & Subsidy
            </h3>

            <label className="block text-slate-400 text-sm">
              Solar System Size (kW)
            </label>
            <select
              value={systemSize}
              onChange={(e) =>
                setSystemSize(Number(e.target.value) as 3 | 5 | 10)
              }
              className="w-full p-3 mt-2 text-white bg-gray-900 border border-gray-700 rounded-lg cursor-pointer"
            >
              <option value="3">3 kW</option>
              <option value="5">5 kW</option>
              <option value="10">10 kW</option>
            </select>

            <label className="block text-slate-400 text-sm mt-4">
              Loan Tenure (Years)
            </label>
            <select
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full p-3 mt-2 text-white bg-gray-900 border border-gray-700 rounded-lg cursor-pointer"
            >
              <option value="5">5 Years</option>
              <option value="10">10 Years</option>
            </select>

            <button
              className="w-full p-3 mt-2 text-white bg-gray-900 border border-gray-700 rounded-lg hover:opacity-80 cursor-pointer font-sans tracking-wider"
              onClick={calculateEMI}
            >
              Calculate EMI & Subsidy
            </button>
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative inline-flex h-12 w-full mt-4 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-8 text-sm font-medium text-white backdrop-blur-3xl">
                    Call us
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {loanAmount > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full p-3 text-white bg-gray-900 border border-gray-700 rounded-lg mt-4"
              >
                <p className="text-base flex justify-between">
                  <span className="text-slate-400 block">Govt. Subsidy:</span>
                  <span className="text-lg font-sans block">
                    {" "}
                    ₹{subsidyRates[systemSize].toLocaleString()}
                  </span>
                </p>
                <p className="text-base flex justify-between">
                  <span className="text-slate-400 block">
                    Final Cost After Subsidy:
                  </span>{" "}
                  <span className="text-lg font-sans block">
                    ₹{loanAmount.toLocaleString()}
                  </span>
                </p>
                <p className="text-base flex justify-between">
                  <span className="text-slate-400 block"> Estimated EMI: </span>
                  <span className="text-lg font-sans block"> ₹{emi}/month</span>
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
