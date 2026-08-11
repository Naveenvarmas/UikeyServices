import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Filter,
  Download,
  Calendar,
} from "lucide-react";

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
    date: "19 May, 2024",
    products: "3 Items",
    amount: "₹2,450",
    status: "Delivered",
    payment: "Paid",
  },
  {
    id: "#1231",
    date: "16 May, 2024",
    products: "4 Items",
    amount: "₹2,800",
    status: "Delivered",
    payment: "Paid",
  },
  {
    id: "#1228",
    date: "15 May, 2024",
    products: "2 Items",
    amount: "₹1,650",
    status: "Ongoing",
    payment: "Paid",
  },
  {
    id: "#1219",
    date: "13 May, 2024",
    products: "1 Item",
    amount: "₹1,120",
    status: "Cancelled",
    payment: "Refunded",
  },
  {
    id: "#1215",
    date: "12 May, 2024",
    products: "4 Items",
    amount: "₹4,600",
    status: "Delivered",
    payment: "Paid",
  },
];

export default async function CustomerOrdersPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="space-y-4 p-4">

      <div>
        <h1 className="text-3xl font-bold">
          Customer Orders
        </h1>

        <p className="text-sm text-muted-foreground">
          Customer ID: {id}
        </p>
      </div>

      {/* Search & Filters */}

      <div className="flex flex-wrap gap-3">

        <Input
          placeholder="Search orders..."
          className="max-w-md"
        />

        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
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

      {/* Tabs */}

      <div className="flex flex-wrap gap-2">

        <Button size="sm">
          All Orders (12)
        </Button>

        <Button variant="outline" size="sm">
          Ongoing (2)
        </Button>

        <Button variant="outline" size="sm">
          Delivered (8)
        </Button>

        <Button variant="outline" size="sm">
          Cancelled (2)
        </Button>

        <Button variant="outline" size="sm">
          Returned (0)
        </Button>

      </div>

      {/* Orders Table */}

      <div className="rounded-xl border">

        <Table>

          <TableHeader>
            <TableRow>

              <TableHead>
                Order ID
              </TableHead>

              <TableHead>
                Date
              </TableHead>

              <TableHead>
                Products
              </TableHead>

              <TableHead>
                Amount
              </TableHead>

              <TableHead>
                Status
              </TableHead>

              <TableHead>
                Payment
              </TableHead>

            </TableRow>
          </TableHeader>

          <TableBody>

            {orders.map((order) => (
              <TableRow key={order.id}>

                <TableCell>
                  {order.id}
                </TableCell>

                <TableCell>
                  {order.date}
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
                  {order.payment}
                </TableCell>

              </TableRow>
            ))}

          </TableBody>

        </Table>

      </div>

    </div>
  );
}