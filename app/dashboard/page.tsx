import StatCard from "@/components/dashboard/stat-card";
import SalesChart from "@/components/dashboard/sales-chart";
import OrderSummary from "@/components/dashboard/order-summary";
import LowStock from "@/components/dashboard/low-stock";
import RecentOrders from "@/components/dashboard/recent-orders";
import BestSelling from "@/components/dashboard/best-selling";

import {
  ShoppingBag,
  IndianRupee,
  Package,
  Users,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-4 p-4">

      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      {/* Stats */}
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Orders"
          value="128"
          growth="+18.5%"
          icon={<ShoppingBag size={22} />}
        />

        <StatCard
          title="Revenue"
          value="₹1,25,000"
          growth="+22.3%"
          icon={<IndianRupee size={22} />}
        />

        <StatCard
          title="Products"
          value="45"
          icon={<Package size={22} />}
        />

        <StatCard
          title="Customers"
          value="320"
          growth="+15.2%"
          icon={<Users size={22} />}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

        <div className="lg:col-span-5">
          <SalesChart />
        </div>

        <div className="lg:col-span-3">
          <OrderSummary />
        </div>

        <div className="lg:col-span-4">
          <LowStock />
        </div>

      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

        <div className="lg:col-span-8">
          <RecentOrders />
        </div>

        <div className="lg:col-span-4">
          <BestSelling />
        </div>

      </div>

    </div>
  );
}