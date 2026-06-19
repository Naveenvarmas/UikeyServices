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

const bookedOrders = [
  {
    id: "#1232",
    customer: "Neha Verma",
    products: "1 Item",
    amount: "₹3,200",
    date: "17 May, 2024",
  },
  {
    id: "#1228",
    customer: "Sneha Toppo",
    products: "3 Items",
    amount: "₹2,950",
    date: "15 May, 2024",
  },
  {
    id: "#1224",
    customer: "Alok T.",
    products: "2 Items",
    amount: "₹1,650",
    date: "14 May, 2024",
  },
  {
    id: "#1219",
    customer: "Kavita Kumari",
    products: "1 Item",
    amount: "₹1,120",
    date: "13 May, 2024",
  },
  {
    id: "#1215",
    customer: "Deepak Oraon",
    products: "4 Items",
    amount: "₹4,600",
    date: "12 May, 2024",
  },
];

export default function BookedOrdersPage() {
  return (
    <div className="space-y-4 p-4">
      <div>
        <h1 className="text-3xl font-bold">
          Booked Orders
        </h1>

        <p className="text-sm text-muted-foreground">
          Orders that are confirmed and waiting to be processed.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm">
          All 128
        </Button>

        <Button size="sm">
          Booked 32
        </Button>

        <Button variant="outline" size="sm">
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
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {bookedOrders.map((order) => (
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
                  {order.date}
                </TableCell>

                <TableCell>
                  <Button
                    size="sm"
                    variant="outline"
                  >
                    Process
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