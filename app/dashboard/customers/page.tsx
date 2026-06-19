"use client"
import StatCard from "@/components/dashboard/stat-card";
import { useRouter } from "next/navigation";
import {
  Users,
  UserPlus,
  RotateCcw,
  IndianRupee,
  ShoppingCart,
  Filter,
  Download,
  Calendar,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const customers = [
  {
    id : "1",
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    location: "Ranchi",
    orders: 12,
    spent: "₹25,600",
    group: "Regular",
    lastOrder: "19 May 2024",
  },
  {
    id : "2",
    name: "Amit Singh",
    email: "amit@gmail.com",
    phone: "+91 9876543211",
    location: "Jamshedpur",
    orders: 8,
    spent: "₹18,450",
    group: "Regular",
    lastOrder: "18 May 2024",
  },
  {
    id : "3",
    name: "Neha Verma",
    email: "neha@gmail.com",
    phone: "+91 9876543212",
    location: "Ranchi",
    orders: 10,
    spent: "₹22,300",
    group: "Premium",
    lastOrder: "17 May 2024",
  },
];
export default function CustomersPage() {
    const router = useRouter()
  return (
    <div className="space-y-4 p-4">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            All Customers
          </h1>

          <p className="text-sm text-muted-foreground">
            Manage and view all your customers.
          </p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">

        <StatCard
          title="Total Customers"
          value="320"
          icon={<Users size={18} />}
        />

        <StatCard
          title="New Customers"
          value="28"
          growth="+12.5%"
          icon={<UserPlus size={18} />}
        />

        <StatCard
          title="Repeat Customers"
          value="85"
          growth="+18.7%"
          icon={<RotateCcw size={18} />}
        />

        <StatCard
          title="Total Spent"
          value="₹1,25,000"
          growth="+22.3%"
          icon={<IndianRupee size={18} />}
        />

        <StatCard
          title="Avg Order Value"
          value="₹2,450"
          growth="+10.8%"
          icon={<ShoppingCart size={18} />}
        />

      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">

        <Input
          placeholder="Search customer..."
          className="max-w-md"
        />

        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>

        <Button variant="outline">
          Customer Group
        </Button>

        <Button variant="outline">
          <Calendar className="mr-2 h-4 w-4" />
          Date Range
        </Button>

        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>

      </div>

      {/* Table */}
      <div className="rounded-xl border">

        <Table>

          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead>Group</TableHead>
              <TableHead>Last Order</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>

            {customers.map((customer) => (
              <TableRow key={customer.id} 
               onClick={() =>
                  router.push(
                    `/dashboard/customers/${customer.id.replace(
                      "#",
                      ""
                    )}`
                  )
                }
              >

                <TableCell>
                  <div>
                    <p className="font-medium">
                      {customer.name}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {customer.email}
                    </p>
                  </div>
                </TableCell>

                <TableCell>
                  {customer.location}
                </TableCell>

                <TableCell>
                  {customer.orders}
                </TableCell>

                <TableCell>
                  {customer.spent}
                </TableCell>

                <TableCell>
                  <Badge>
                    {customer.group}
                  </Badge>
                </TableCell>

                <TableCell>
                  {customer.lastOrder}
                </TableCell>

              </TableRow>
            ))}

          </TableBody>

        </Table>

      </div>

    </div>
  );
}