"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StatCard from "@/components/dashboard/stat-card";
import {
  Users, UserPlus, RotateCcw, IndianRupee, ShoppingCart,
  Filter, Download, Calendar, Plus, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const allCustomers = [
  { id: "1", name: "Rahul Kumar",   email: "rahul@gmail.com",  phone: "+91 9876543210", location: "Ranchi",     orders: 12, spent: "₹25,600", group: "Regular", lastOrder: "19 May 2024" },
  { id: "2", name: "Amit Singh",    email: "amit@gmail.com",   phone: "+91 9876543211", location: "Jamshedpur", orders: 8,  spent: "₹18,450", group: "Regular", lastOrder: "18 May 2024" },
  { id: "3", name: "Neha Verma",    email: "neha@gmail.com",   phone: "+91 9876543212", location: "Ranchi",     orders: 10, spent: "₹22,300", group: "Premium", lastOrder: "17 May 2024" },
];

export default function CustomersPage() {
  const router = useRouter();

  const [customers, setCustomers] = useState(allCustomers);

  // Search
  const [search, setSearch] = useState("");

  // Filter panel open/close
  const [filterOpen, setFilterOpen] = useState(false);

  // Filter values
  const [filterGroup, setFilterGroup] = useState("");
  const [filterDate, setFilterDate]   = useState("");

  // Add Customer modal
  const [addOpen, setAddOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    name: "", email: "", phone: "", location: "", group: "Regular",
  });

  // Filter logic
  const filtered = customers.filter((c) => {
    if (search) {
      const s = search.toLowerCase();
      if (
        !c.name.toLowerCase().includes(s) &&
        !c.email.toLowerCase().includes(s) &&
        !c.location.toLowerCase().includes(s)
      ) return false;
    }
    if (filterGroup && c.group !== filterGroup) return false;
    if (filterDate && !c.lastOrder.toLowerCase().includes(filterDate.toLowerCase())) return false;
    return true;
  });

  // Add customer
  function handleAdd() {
    if (!newCustomer.name.trim()) return;
    const added = {
      id: String(Date.now()),
      name: newCustomer.name,
      email: newCustomer.email,
      phone: newCustomer.phone,
      location: newCustomer.location,
      orders: 0,
      spent: "₹0",
      group: newCustomer.group,
      lastOrder: "—",
    };
    setCustomers([...customers, added]);
    setNewCustomer({ name: "", email: "", phone: "", location: "", group: "Regular" });
    setAddOpen(false);
  }

  // Export CSV
  function handleExport() {
    const rows = [["Name", "Email", "Phone", "Location", "Orders", "Spent", "Group", "Last Order"]];
    filtered.forEach((c) => rows.push([c.name, c.email, c.phone, c.location, String(c.orders), c.spent, c.group, c.lastOrder]));
    const csv = rows.map((r) => r.join(",")).join("\n");
    const a = document.createElement("a");
    a.href = "data:text/csv," + encodeURIComponent(csv);
    a.download = "customers.csv";
    a.click();
  }

  return (
    <div className="space-y-4 p-4">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">All Customers</h1>
          <p className="text-sm text-muted-foreground">Manage and view all your customers.</p>
        </div>
        <Button onClick={() => setAddOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        <StatCard title="Total Customers"  value={String(customers.length)} icon={<Users size={18} />} />
        <StatCard title="New Customers"    value="28"         growth="+12.5%" icon={<UserPlus size={18} />} />
        <StatCard title="Repeat Customers" value="85"         growth="+18.7%" icon={<RotateCcw size={18} />} />
        <StatCard title="Total Spent"      value="₹1,25,000"  growth="+22.3%" icon={<IndianRupee size={18} />} />
        <StatCard title="Avg Order Value"  value="₹2,450"     growth="+10.8%" icon={<ShoppingCart size={18} />} />
      </div>

      {/* Search + Buttons */}
      <div className="flex flex-wrap gap-3">
        <Input
          placeholder="Search customer..."
          className="max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline" onClick={() => setFilterOpen(!filterOpen)}>
          <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
        <Button variant="outline" onClick={() => setFilterOpen(!filterOpen)}>
          Customer Group
        </Button>
        <Button variant="outline" onClick={() => setFilterOpen(!filterOpen)}>
          <Calendar className="mr-2 h-4 w-4" /> Date Range
        </Button>
        <Button variant="outline" onClick={handleExport}>
          <Download className="mr-2 h-4 w-4" /> Export
        </Button>
      </div>

      {/* Filter Panel */}
      {filterOpen && (
        <div className="flex flex-wrap gap-4 p-4 rounded-xl border bg-muted/30 items-end">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-muted-foreground">Customer Group</label>
            <select
              value={filterGroup}
              onChange={(e) => setFilterGroup(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm bg-background text-foreground"
              style={{ minWidth: "160px" }}
            >
              <option value="">All Groups</option>
              <option value="Regular">Regular</option>
              <option value="Premium">Premium</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-muted-foreground">Last Order Date</label>
            <input
              type="text"
              placeholder="e.g. May, 2024"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm bg-background text-foreground"
              style={{ minWidth: "180px" }}
            />
          </div>
          <Button onClick={() => setFilterOpen(false)}>Apply</Button>
          <Button variant="outline" onClick={() => { setFilterGroup(""); setFilterDate(""); setFilterOpen(false); }}>
            Clear
          </Button>
        </div>
      )}

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
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                  Koi customer nahi mila
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((customer) => (
                <TableRow
                  key={customer.id}
                  className="cursor-pointer"
                  onClick={() => router.push(`/dashboard/customers/${customer.id}`)}
                >
                  <TableCell>
                    <div>
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-xs text-muted-foreground">{customer.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{customer.location}</TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell>{customer.spent}</TableCell>
                  <TableCell><Badge>{customer.group}</Badge></TableCell>
                  <TableCell>{customer.lastOrder}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <p className="text-sm text-muted-foreground">
        {filtered.length} customers dikh rahe hain (total {customers.length} mein se)
      </p>

      {/* ===== ADD CUSTOMER MODAL ===== */}
      {addOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="bg-background border rounded-2xl p-6 w-full max-w-md shadow-2xl">

            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-bold">Add Customer</h2>
              <button onClick={() => setAddOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-muted-foreground">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Kumar"
                  value={newCustomer.name}
                  onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                  className="border rounded-lg px-3 py-2 text-sm bg-background text-foreground outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-muted-foreground">Email</label>
                <input
                  type="email"
                  placeholder="e.g. rahul@gmail.com"
                  value={newCustomer.email}
                  onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                  className="border rounded-lg px-3 py-2 text-sm bg-background text-foreground outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-muted-foreground">Phone</label>
                <input
                  type="text"
                  placeholder="e.g. +91 9876543210"
                  value={newCustomer.phone}
                  onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                  className="border rounded-lg px-3 py-2 text-sm bg-background text-foreground outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-muted-foreground">Location</label>
                <input
                  type="text"
                  placeholder="e.g. Ranchi"
                  value={newCustomer.location}
                  onChange={(e) => setNewCustomer({ ...newCustomer, location: e.target.value })}
                  className="border rounded-lg px-3 py-2 text-sm bg-background text-foreground outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-muted-foreground">Group</label>
                <select
                  value={newCustomer.group}
                  onChange={(e) => setNewCustomer({ ...newCustomer, group: e.target.value })}
                  className="border rounded-lg px-3 py-2 text-sm bg-background text-foreground"
                >
                  <option value="Regular">Regular</option>
                  <option value="Premium">Premium</option>
                </select>
              </div>

              <div className="flex gap-3 mt-2">
                <Button variant="outline" className="flex-1" onClick={() => setAddOpen(false)}>Cancel</Button>
                <Button className="flex-1" onClick={handleAdd}>Add Customer</Button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}