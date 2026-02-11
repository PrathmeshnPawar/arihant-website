"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import { EquityCard } from "@/components/equity/EquityCard";

const trackerItems = [
  "Top Gainers",
  "Top Losers",
  "Hourly Gainers Losers",
  "52 Week High Low",
  "Advances Declines",
  "New High Low",
  "Value Volume Topper",
  "Contribution to Index",
  "Outunderme Active",
  "Only Buyers / Only Sellers",
  "Unusual Active",
  "Blockdeal BU active",
  "Sector Watch",
  "Index Constituents",
  "Historical Returns",
  "FII DII Trading Activities",
];

const analysisItems = [
  "Live Indices",
  "5 Days Up/Down",
  "Highest Lowest Delivery",
  "Rising VDP",
  "Rising VolDelFallPrice",
  "Bullish Reversal",
];

export function EquityHeader() {
  return (
    <EquityCard title="Equity Markets">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

        {/* Left Section */}
        <div>
          <p className="text-sm text-gray-500 tracking-wide">
            You are on : Home / Equity
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-wrap gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-2 text-sm font-medium shadow-sm hover:shadow-md transition">
              Daily Market Tracker
              <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              {trackerItems.map((item) => (
                <DropdownMenuItem key={item}>
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-2 text-sm font-medium shadow-sm hover:shadow-md transition">
              Market Analysis
              <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {analysisItems.map((item) => (
                <DropdownMenuItem key={item}>
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </EquityCard>
  );
}
