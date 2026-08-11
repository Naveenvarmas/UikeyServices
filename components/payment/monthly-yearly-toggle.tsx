"use client";

import { useState } from "react";

export default function MonthlyYearlyToggle() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="flex justify-center">
      <div className="flex items-center bg-purple-100 dark:bg-purple-950/50 p-1 rounded-xl">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition ${
            billing === "monthly"
              ? "bg-white dark:bg-purple-800 text-purple-700 dark:text-white shadow"
              : "text-purple-500 dark:text-purple-300 hover:text-purple-700 dark:hover:text-white"
          }`}
        >
          Monthly
        </button>

        <button
          onClick={() => setBilling("yearly")}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
            billing === "yearly"
              ? "bg-white dark:bg-purple-800 text-purple-700 dark:text-white shadow"
              : "text-purple-500 dark:text-purple-300 hover:text-purple-700 dark:hover:text-white"
          }`}
        >
          Yearly
          <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
            Save 20%
          </span>
        </button>
      </div>
    </div>
  );
}