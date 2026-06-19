"use client";

import { useRouter } from "next/navigation";

import {
  Filter,
  Download,
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

const orders = [
  {
    id: "#1234",
    customer: "Rahul Kumar",
    products: "3 Items",
    amount: "₹2,450",
    status: "Delivered",
    date: "19 May, 2024",
  },
  {
    id: "#1233",
    customer: "Amit Singh",
    products: "2 Items",
    amount: "₹1,650",
    status: "Ongoing",
    date: "19 May, 2024",
  },
  {
    id: "#1232",
    customer: "Neha Verma",
    products: "1 Item",
    amount: "₹3,200",
    status: "Booked",
    date: "17 May, 2024",
  },
  {
    id: "#1231",
    customer: "Pooja Patel",
    products: "4 Items",
    amount: "₹2,800",
    status: "Delivered",
    date: "16 May, 2024",
  },
  {
    id: "#1230",
    customer: "Vikas Gupta",
    products: "2 Items",
    amount: "₹4,500",
    status: "Ongoing",
    date: "16 May, 2024",
  },
];

export default function OrdersPage() {
  const router = useRouter();

  return (
    <div className="space-y-4 p-4">
      <div>
        <h1 className="text-3xl font-bold">
          All Orders
        </h1>

        <p className="text-sm text-muted-foreground">
          Manage and track all your orders.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        <Button size="sm">
          All
        </Button>

        <Button
          variant="outline"
          size="sm"
        >
          Booked
        </Button>

        <Button
          variant="outline"
          size="sm"
        >
          Ongoing
        </Button>

        <Button
          variant="outline"
          size="sm"
        >
          Delivered
        </Button>

        <Button
          variant="outline"
          size="sm"
        >
          Cancelled
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-3">
        <Input
          placeholder="Search order ID, customer name..."
          className="lg:max-w-md"
        />

        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>

        <Button variant="outline">
          Date Range
        </Button>

        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Orders Table */}
      <div className="rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                onClick={() =>
                  router.push(
                    `/dashboard/orders/${order.id.replace(
                      "#",
                      ""
                    )}`
                  )
                }
                className="
                  cursor-pointer
                  hover:bg-muted/50
                  transition-colors
                "
              >
                <TableCell className="font-medium">
                  {order.id}
                </TableCell>

                <TableCell>
                  {order.customer}
                </TableCell>

                <TableCell>
                  {order.products}
                </TableCell>

                <TableCell>
                  {order.amount}
                </TableCell>

                <TableCell>
                  <Badge>
                    {order.status}
                  </Badge>
                </TableCell>

                <TableCell>
                  {order.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}