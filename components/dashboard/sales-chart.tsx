"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { name: "May 1", sales: 10000 },
  { name: "May 5", sales: 18000 },
  { name: "May 10", sales: 14000 },
  { name: "May 15", sales: 30000 },
  { name: "May 20", sales: 25000 },
  { name: "May 25", sales: 42000 },
];

export default function SalesChart() {
  return (
    <Card className="h-[300px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">
          Sales Overview
        </CardTitle>
      </CardHeader>

      <CardContent className="h-[230px] p-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11 }}
            />

            <YAxis
              tick={{ fontSize: 11 }}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#7c3aed"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}