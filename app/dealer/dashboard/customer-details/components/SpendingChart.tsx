"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const spendingData = [
  {
    month: "Mar",
    amount: 3200,
  },
  {
    month: "Apr",
    amount: 4800,
  },
  {
    month: "May",
    amount: 2900,
  },
  {
    month: "Jun",
    amount: 5600,
  },
  {
    month: "Jul",
    amount: 4100,
  },
  {
    month: "Aug",
    amount: 5000,
  },
];

export default function SpendingChart() {
  return (
    <div className="mt-6">

      <div className="mb-4">
        <h3 className="font-semibold">
          Spending Overview
        </h3>

        <p className="text-sm text-muted-foreground">
          Customer spending over the last 6 months.
        </p>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart
            data={spendingData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              className="stroke-muted"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) =>
                `₹${value / 1000}k`
              }
            />

            <Tooltip
              formatter={(value) =>
                `₹${Number(value).toLocaleString("en-IN")}`
              }
            />

            <Line
              type="monotone"
              dataKey="amount"
              stroke="currentColor"
              strokeWidth={2}
              dot={{
                r: 4,
              }}
              className="text-primary"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}