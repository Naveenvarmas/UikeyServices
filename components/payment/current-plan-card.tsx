"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, CalendarDays } from "lucide-react";

export default function CurrentPlanCard() {
  return (
    <Card className="border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/40">
      <CardContent className="p-6">
        <div className="flex justify-between items-center w-full min-h-[90px]">

          {/* Left */}
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 flex items-center justify-center shrink-0">
              <Crown className="h-5 w-5 text-white" />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold leading-none text-foreground dark:text-white">
                  Current Plan:
                  <span className="text-purple-600 dark:text-purple-400 ml-1.5">
                    Pro Plan
                  </span>
                </h3>

                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/40 dark:text-green-400 dark:hover:bg-green-900/40 text-xs px-2 py-0.5">
                  Active
                </Badge>
              </div>

              <p className="text-xs text-muted-foreground dark:text-purple-300/70 mt-1.5">
                Your plan is active until 12 June, 2026
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" />

              <div className="flex flex-col justify-center">
                <p className="text-xs text-muted-foreground dark:text-purple-300/70">
                  Next Billing Date
                </p>

                <p className="font-semibold text-sm leading-none mt-1 text-foreground dark:text-white">
                  12 June, 2026
                </p>
              </div>
            </div>

            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-500 text-white text-sm font-semibold hover:opacity-90 transition">
              Manage Subscription
            </button>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}