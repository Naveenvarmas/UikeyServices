import StatCard from "@/components/dashboard/stat-card";
import SalesChart from "@/components/dashboard/sales-chart";
import LowStock from "@/components/dashboard/low-stock";
import OrderSummary from "@/components/dashboard/order-summary";

import {
  Package,
  Eye,
  ShoppingCart,
  IndianRupee,
  Star,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const topSellingProducts = [
  {
    product: "Samsung 55'' 4K UHD TV",
    sold: 25,
    revenue: "₹1,12,500",
  },
  {
    product: "Whirlpool 245L Fridge",
    sold: 18,
    revenue: "₹52,020",
  },
  {
    product: "LG 7Kg Washing Machine",
    sold: 15,
    revenue: "₹33,750",
  },
  {
    product: "iPhone 14 (128GB)",
    sold: 12,
    revenue: "₹71,880",
  },
  {
    product: "Sony WH-CH720N",
    sold: 10,
    revenue: "₹8,990",
  },
];

export default function ProductOverviewPage() {
  return (
  <div className="space-y-3 p-3">
    
    <div>
      <h1 className="text-2xl font-bold">
        Product Overview
      </h1>

      <p className="text-xs text-muted-foreground">
        Product analytics dashboard
      </p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
      <StatCard
        title="Products"
        value="45"
        icon={<Package size={18} />}
      />

      <StatCard
        title="Views"
        value="1,250"
        icon={<Eye size={18} />}
      />

      <StatCard
        title="Sales"
        value="320"
        icon={<ShoppingCart size={18} />}
      />

      <StatCard
        title="Revenue"
        value="₹1.25L"
        icon={<IndianRupee size={18} />}
      />

      <StatCard
        title="Rating"
        value="4.6"
        icon={<Star size={18} />}
      />
    </div>

    {/* Row 1 */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            Top Selling Products
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Sold</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {topSellingProducts
                .slice(0, 4)
                .map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-sm">
                      {item.product}
                    </TableCell>

                    <TableCell>
                      {item.sold}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <SalesChart />
    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <OrderSummary />
      <LowStock />
    </div>

  </div>
);
}