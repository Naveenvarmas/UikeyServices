import {
  Search,
  Plus,
  Pencil,
  Trash2,
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

const categories = [
  {
    id: 1,
    name: "Electronics",
    products: 15,
    status: "Active",
  },
  {
    id: 2,
    name: "Home Appliances",
    products: 12,
    status: "Active",
  },
  {
    id: 3,
    name: "Mobile Accessories",
    products: 8,
    status: "Active",
  },
  {
    id: 4,
    name: "Fashion",
    products: 4,
    status: "Inactive",
  },
];

export default function CategoriesPage() {
  return (
    <div className="space-y-4 p-4">

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Categories
          </h1>

          <p className="text-sm text-muted-foreground">
            Manage product categories.
          </p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

        <Input
          placeholder="Search category..."
          className="pl-10"
        />
      </div>

      <div className="rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category Name</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="font-medium">
                  {category.name}
                </TableCell>

                <TableCell>
                  {category.products}
                </TableCell>

                <TableCell>
                  <Badge
                    variant={
                      category.status === "Active"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {category.status}
                  </Badge>
                </TableCell>

                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                    >
                      <Pencil size={16} />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                    >
                      <Trash2 size={16} />
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