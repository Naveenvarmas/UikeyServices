"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Delivered",
    value: 72,
    color: "#22c55e",
  },
  {
    name: "Ongoing",
    value: 32,
    color: "#f59e0b",
  },
  {
    name: "Pending",
    value: 16,
    color: "#8b5cf6",
  },
  {
    name: "Cancelled",
    value: 8,
    color: "#ef4444",
  },
];

export default function OrderSummary() {
  return (
    <div className="border rounded-xl p-4 h-[300px]">
      <h2 className="text-lg font-semibold mb-2">
        Order Summary
      </h2>

      <div className="h-[140px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={60}
            >
              {data.map((item) => (
                <Cell
                  key={item.name}
                  fill={item.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-2 space-y-1">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <span>{item.name}</span>
            </div>

            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}