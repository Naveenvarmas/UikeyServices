"use client";

import { Card, CardContent } from "@/components/ui/card";

const payouts = [
  {
    amount: "₹1,500",
    date: "14 May, 2025",
  },
  {
    amount: "₹800",
    date: "06 May, 2025",
  },
];

export default function RecentPayoutsCard() {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">
            Recent Payouts
          </h3>

          <button className="text-sm text-violet-600">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {payouts.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-3 last:border-0"
            >
              <div>
                <p className="font-medium">
                  {item.amount}
                </p>

                <p className="text-xs text-muted-foreground">
                  {item.date}
                </p>
              </div>

              <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
                Paid
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}