"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SpendingChart from "./SpendingChart";

interface SpendingOverviewProps {
  totalSpent: number;
  orders: number;
  avgOrderValue: number;
}

export default function SpendingOverview({
  totalSpent,
  orders,
  avgOrderValue,
}: SpendingOverviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending Overview</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">

        {/* Statistics */}
        <div className="grid gap-4 md:grid-cols-3">

          {/* Total Spent */}
          <div className="rounded-xl border bg-card p-4">
            <p className="text-sm text-muted-foreground">
              Total Spent
            </p>

            <p className="mt-2 text-2xl font-bold">
              ₹{totalSpent.toLocaleString("en-IN")}
            </p>
          </div>

          {/* Orders */}
          <div className="rounded-xl border bg-card p-4">
            <p className="text-sm text-muted-foreground">
              Orders
            </p>

            <p className="mt-2 text-2xl font-bold">
              {orders}
            </p>
          </div>

          {/* Average Order */}
          <div className="rounded-xl border bg-card p-4">
            <p className="text-sm text-muted-foreground">
              Avg Order Value
            </p>

            <p className="mt-2 text-2xl font-bold">
              ₹{avgOrderValue.toLocaleString("en-IN")}
            </p>
          </div>

        </div>

        {/* Chart area */}
        <SpendingChart />

      </CardContent>
    </Card>
  );
}