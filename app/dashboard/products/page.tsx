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

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Samsung 55'' 4K UHD TV",
    category: "Electronics",
    price: "₹45,000",
    stock: 10,
    status: "Active",
  },
  {
    id: 2,
    name: "Whirlpool 245L Fridge",
    category: "Home Appliances",
    price: "₹28,900",
    stock: 5,
    status: "Active",
  },
  {
    id: 3,
    name: "LG 7Kg Washing Machine",
    category: "Home Appliances",
    price: "₹22,500",
    stock: 2,
    status: "Low Stock",
  },
  {
    id: 4,
    name: "iPhone 14 (128GB)",
    category: "Mobile & Accessories",
    price: "₹59,900",
    stock: 8,
    status: "Active",
  },
  {
    id: 5,
    name: "Sony Headphone",
    category: "Electronics",
    price: "₹8,990",
    stock: 15,
    status: "Active",
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-4 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            All Products
          </h1>

          <p className="text-muted-foreground text-sm">
            Manage and view all your products here.
          </p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"
          />

          <Input
            placeholder="Search products..."
            className="pl-10"
          />
        </div>

        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>

        <Button variant="outline">
          Category
        </Button>

        <Button variant="outline">
          Status
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Products"
          value="45"
          icon={<Package size={22} />}
        />

        <StatCard
          title="Active"
          value="40"
          icon={<CheckCircle2 size={22} />}
        />

        <StatCard
          title="Inactive"
          value="3"
          icon={<XCircle size={22} />}
        />

        <StatCard
          title="Low Stock"
          value="5"
          icon={<AlertTriangle size={22} />}
        />
      </div>

      {/* Table */}
      <div className="rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">
                  {product.name}
                </TableCell>

                <TableCell>
                  {product.category}
                </TableCell>

                <TableCell>
                  {product.price}
                </TableCell>

                <TableCell>
                  {product.stock}
                </TableCell>

                <TableCell>
                  <Badge>
                    {product.status}
                  </Badge>
                </TableCell>

                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                    >
                      <Pencil size={16} />
                    </Button>

                    <Button
                      size="icon"
                      variant="ghost"
                    >
                      <Eye size={16} />
                    </Button>

                    <Button
                      size="icon"
                      variant="ghost"
                    >
                      <MoreVertical size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}