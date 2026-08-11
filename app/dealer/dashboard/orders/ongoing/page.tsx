"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const bookedOrders = [
  { id: "#1232", customer: "Neha Verma",    products: "1 Item",  amount: "₹3,200", date: "17 May, 2024" },
  { id: "#1228", customer: "Sneha Toppo",   products: "3 Items", amount: "₹2,950", date: "15 May, 2024" },
  { id: "#1224", customer: "Alok T.",       products: "2 Items", amount: "₹1,650", date: "14 May, 2024" },
  { id: "#1219", customer: "Kavita Kumari", products: "1 Item",  amount: "₹1,120", date: "13 May, 2024" },
  { id: "#1215", customer: "Deepak Oraon",  products: "4 Items", amount: "₹4,600", date: "12 May, 2024" },
];

export default function BookedOrdersPage() {
  const router = useRouter();

  const [search, setSearch]         = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterDate, setFilterDate] = useState("");

  // Search + date filter dono ek saath
  const filtered = bookedOrders.filter((o) => {
    if (search) {
      const s = search.toLowerCase();
      if (!o.customer.toLowerCase().includes(s) && !o.id.includes(s)) return false;
    }
    if (filterDate && !o.date.toLowerCase().includes(filterDate.toLowerCase())) return false;
    return true;
  });

  // CSV export
  function handleExport() {
    const rows = [["ID", "Customer", "Products", "Amount", "Date"]];
    filtered.forEach((o) => rows.push([o.id, o.customer, o.products, o.amount, o.date]));
    const csv = rows.map((r) => r.join(",")).join("\n");
    const a = document.createElement("a");
    a.href = "data:text/csv," + encodeURIComponent(csv);
    a.download = "booked-orders.csv";
    a.click();
  }

  return (
    <div className="space-y-4 p-4">
      <div>
        <h1 className="text-3xl font-bold">Ongoing Orders</h1>
        <p className="text-sm text-muted-foreground">Orders that are confirmed and waiting to be processed.</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={() => router.push("/dealer/dashboard/orders")}>All 128</Button>
        <Button size="sm">Booked 32</Button>
        <Button variant="outline" size="sm" onClick={() => router.push("/dealer/dashboard/orders/ongoing")}>Ongoing 28</Button>
        <Button variant="outline" size="sm" onClick={() => router.push("/dealer/dashboard/orders/delivered")}>Delivered 56</Button>
        <Button variant="outline" size="sm" onClick={() => router.push("/dealer/dashboard/orders/cancelled")}>Cancelled 12</Button>
      </div>

      {/* Search + Filter + Date + Export */}
      <div className="flex flex-col lg:flex-row gap-3">
        <Input
          placeholder="Search order ID, customer name..."
          className="lg:max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button variant="outline" onClick={() => setFilterOpen(!filterOpen)}>
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>

        <Button variant="outline" onClick={() => setFilterOpen(!filterOpen)}>
          Date Range
        </Button>

        <Button variant="outline" onClick={handleExport}>
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Filter Panel */}
      {filterOpen && (
        <div className="flex flex-wrap gap-4 p-4 rounded-xl border bg-muted/30 items-end">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-muted-foreground">Date contains</label>
            <input
              type="text"
              placeholder="e.g. May, 2024, 17 May"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm bg-background"
              style={{ minWidth: "200px" }}
            />
          </div>

          <Button onClick={() => setFilterOpen(false)}>Apply</Button>

          <Button
            variant="outline"
            onClick={() => { setFilterDate(""); setFilterOpen(false); }}
          >
            Clear
          </Button>
        </div>
      )}

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
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                  Koi order nahi mila
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((order) => (
                <TableRow
                  key={order.id}
                  className="cursor-pointer"
                  onClick={() => router.push(`/dealer/dashboard/orders/${order.id.replace("#", "")}`)}
                >
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.products}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation(); // row click rok dega jab Process dabao
                        router.push(`/dashboard/orders/${order.id.replace("#", "")}/process`);
                      }}
                    >
                      Process
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <p className="text-sm text-muted-foreground">
        {filtered.length} orders dikh rahe hain (total {bookedOrders.length} mein se)
      </p>
    </div>
  );
}