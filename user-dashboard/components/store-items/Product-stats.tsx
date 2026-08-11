"use client";

import StatCard from "@/components/dashboard/stat-card";
import {
  Package,
  CheckCircle2,
  XCircle,
  AlertTriangle,
} from "lucide-react";

export default function ProductStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Products"
        value="45"
        icon={<Package size={28} />}
      />

      <StatCard
        title="Active"
        value="40"
        icon={<CheckCircle2 size={28} />}
      />

      <StatCard
        title="Inactive"
        value="3"
        icon={<XCircle size={28} />}
      />

      <StatCard
        title="Low Stock"
        value="5"
        icon={<AlertTriangle size={28} />}
      />
    </div>
  );
}