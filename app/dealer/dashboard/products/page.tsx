"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Filter,
  Plus,
  Pencil,
  Eye,
  MoreVertical,
  Package,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import StatCard from "@/components/dashboard/stat-card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const products = [
  { id: 1, name: "Samsung 55'' 4K UHD TV", category: "Electronics", price: "₹45,000", stock: 10, status: "Active" },
  { id: 2, name: "Whirlpool 245L Fridge", category: "Home Appliances", price: "₹28,900", stock: 5, status: "Active" },
  { id: 3, name: "LG 7Kg Washing Machine", category: "Home Appliances", price: "₹22,500", stock: 2, status: "Low Stock" },
  { id: 4, name: "iPhone 14 (128GB)", category: "Mobile & Accessories", price: "₹59,900", stock: 8, status: "Active" },
  { id: 5, name: "Sony Headphone", category: "Electronics", price: "₹8,990", stock: 15, status: "Active" },
];

export default function ProductsPage() {
  const router = useRouter();

  // Search ki value
  const [search, setSearch] = useState("");

  // Category filter
  const [selectedCategory, setSelectedCategory] = useState("");

  // Status filter
  const [selectedStatus, setSelectedStatus] = useState("");

  // Filter panel open/close
  const [filterOpen, setFilterOpen] = useState(false);

  // Teen filters ek saath lagao
  const filtered = products.filter((p) => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (selectedCategory && p.category !== selectedCategory) return false;
    if (selectedStatus && p.status !== selectedStatus) return false;
    return true;
  });

  return (
    <div className="space-y-4 p-4">

      {/* Header — bilkul same */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">All Products</h1>
          <p className="text-muted-foreground text-sm">Manage and view all your products here.</p>
        </div>
        <Button onClick={() => router.push("/dashboard/products/add")}>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      {/* Search + Filter — same UI, ab kaam karega */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Button variant="outline" onClick={() => setFilterOpen(!filterOpen)}>
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Filter Panel — sirf Filter click karne pe dikhega */}
      {filterOpen && (
        <div className="flex flex-wrap gap-4 p-4 rounded-xl border bg-muted/30 items-end">

          {/* Category dropdown */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-muted-foreground">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm bg-background"
            >
              <option value="">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Home Appliances">Home Appliances</option>
              <option value="Mobile & Accessories">Mobile & Accessories</option>
            </select>
          </div>

          {/* Status dropdown */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-muted-foreground">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm bg-background"
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <Button onClick={() => setFilterOpen(false)}>Apply</Button>

          <Button
            variant="outline"
            onClick={() => { setSelectedCategory(""); setSelectedStatus(""); setFilterOpen(false); }}
          >
            Clear
          </Button>
        </div>
      )}

      {/* Stats — same */}
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Products" value="45" icon={<Package size={22} />} />
        <StatCard title="Active" value="40" icon={<CheckCircle2 size={22} />} />
        <StatCard title="Inactive" value="3" icon={<XCircle size={22} />} />
        <StatCard title="Low Stock" value="5" icon={<AlertTriangle size={22} />} />
      </div>

      {/* Table — bilkul same */}
      <div className="rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                  Koi product nahi mila
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Badge>{product.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => router.push(`/dashboard/products/edit/${product.id}`)}
                      >
                        <Pencil size={16} />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => router.push(`/dashboard/products/${product.id}`)}
                      >
                        <Eye size={16} />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <MoreVertical size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

    </div>
  );
}