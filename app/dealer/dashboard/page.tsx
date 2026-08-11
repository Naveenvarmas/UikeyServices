import StatCard from "@/components/dashboard/stat-card";
import SalesChart from "@/components/dashboard/sales-chart";
import OrderSummary from "@/components/dashboard/order-summary";
import LowStock from "@/components/dashboard/low-stock";
import RecentOrders from "@/components/dashboard/recent-orders";
import BestSelling from "@/components/dashboard/best-selling";
import { ShoppingBag, IndianRupee, Package, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-4 p-2 sm:p-4">

      <h1 className="text-xl sm:text-2xl font-bold">Dashboard</h1>

      {/* Stats — 1 col mobile, 2 col tablet, 4 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        <StatCard title="Total Orders" value="128"       growth="+18.5%" icon={<ShoppingBag size={22} />} />
        <StatCard title="Revenue"      value="₹1,25,000" growth="+22.3%" icon={<IndianRupee size={22} />} />
        <StatCard title="Products"     value="45"                         icon={<Package size={22} />} />
        <StatCard title="Customers"    value="320"        growth="+15.2%" icon={<Users size={22} />} />
      </div>

      {/* Charts Row — stacked mobile, 3-col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-3">
        <div className="md:col-span-1 xl:col-span-5">
          <SalesChart />
        </div>
        <div className="md:col-span-1 xl:col-span-3">
          <OrderSummary />
        </div>
        <div className="md:col-span-2 xl:col-span-4">
          <LowStock />
        </div>
      </div>

      {/* Bottom Row — stacked mobile, 2-col desktop */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-3">
        <div className="xl:col-span-8">
          <RecentOrders />
        </div>
        <div className="xl:col-span-4">
          <BestSelling />
        </div>
      </div>

    </div>
  );
}