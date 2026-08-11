"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Eye,
  Pencil,
  MoreVertical,
} from "lucide-react";

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
    category: "Mobile",
    price: "₹59,900",
    stock: 8,
    status: "Active",
  },
];

export default function ProductTable() {
  return (
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
                <Badge
                  variant={
                    product.status === "Active"
                      ? "default"
                      : "destructive"
                  }
                >
                  {product.status}
                </Badge>
              </TableCell>

              <TableCell className="text-right">
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
  );
}