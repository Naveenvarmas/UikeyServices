"use client";

import {
  Filter,
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ongoingOrders = [
  {
    id: "#1233",
    customer: "Amit Singh",
    products: "2 Items",
    amount: "₹1,650",
    delivery: "21 May, 2024",
  },
  {
    id: "#1230",
    customer: "Vikas Gupta",
    products: "2 Items",
    amount: "₹4,500",
    delivery: "22 May, 2024",
  },
  {
    id: "#1226",
    customer: "Ritu Kumari",
    products: "1 Item",
    amount: "₹1,299",
    delivery: "22 May, 2024",
  },
  {
    id: "#1222",
    customer: "Sanjay T.",
    products: "4 Items",
    amount: "₹3,850",
    delivery: "23 May, 2024",
  },
  {
    id: "#1216",
    customer: "Manoj Kumar",
    products: "1 Item",
    amount: "₹650",
    delivery: "23 May, 2024",
  },
];

export default function OngoingOrdersPage() {
  return (
    <div className="space-y-4 p-4">
      <div>
        <h1 className="text-3xl font-bold">
          Ongoing Orders
        </h1>

        <p className="text-sm text-muted-foreground">
          Orders that are in progress and not yet delivered.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm">
          All 128
        </Button>

        <Button variant="outline" size="sm">
          Booked 32
        </Button>

        <Button size="sm">
          Ongoing 28
        </Button>

        <Button variant="outline" size="sm">
          Delivered 56
        </Button>

        <Button variant="outline" size="sm">
          Cancelled 12
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-3">
        <Input
          placeholder="Search order ID, customer name..."
          className="lg:max-w-md"
        />

        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>

        <Button variant="outline">
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
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>
                Expected Delivery
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {ongoingOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>

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
                  {order.delivery}
                </TableCell>

                <TableCell>
                  <Button
                    size="sm"
                    variant="outline"
                  >
                    Track
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}