import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Badge,
} from "@/components/ui/badge";

import {
  Button,
} from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function CustomerDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recentOrders = [
    {
      id: "#1234",
      date: "19 May, 2024",
      amount: "₹2,450",
      status: "Delivered",
    },
    {
      id: "#1231",
      date: "16 May, 2024",
      amount: "₹2,800",
      status: "Delivered",
    },
    {
      id: "#1228",
      date: "15 May, 2024",
      amount: "₹1,600",
      status: "Ongoing",
    },
    {
      id: "#1226",
      date: "13 May, 2024",
      amount: "₹2,450",
      status: "Delivered",
    },
  ];

  return (
    <div className="p-4 space-y-4">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Customer Details
        </h1>

        <p className="text-sm text-muted-foreground">
          Customer ID: {id}
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-4">

        {/* LEFT CARD */}
        <div className="lg:col-span-4">

          <Card>

            <CardContent className="p-6">

              <div className="flex flex-col items-center text-center">

                <div className="w-20 h-20 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-2xl font-bold">
                  RK
                </div>

                <h2 className="text-xl font-semibold mt-4">
                  Rahul Kumar
                </h2>

                <Badge className="mt-2">
                  Regular Customer
                </Badge>

              </div>

              <div className="space-y-3 mt-6 text-sm">

                <p>
                  📧 rahulkumar@gmail.com
                </p>

                <p>
                  📞 +91 98888 98888
                </p>

                <p>
                  📍 Ranchi, Jharkhand
                </p>

                <p>
                  📅 Joined on 10 Mar, 2024
                </p>

              </div>

              <div className="grid grid-cols-3 gap-3 mt-6 text-center">

                <div>
                  <p className="text-xs text-muted-foreground">
                    Orders
                  </p>

                  <h3 className="font-bold">
                    12
                  </h3>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    Spent
                  </p>

                  <h3 className="font-bold">
                    ₹25,600
                  </h3>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    Avg
                  </p>

                  <h3 className="font-bold">
                    ₹2,133
                  </h3>
                </div>

              </div>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between items-center">
                  <span>
                    Customer Group
                  </span>

                  <Button
                    size="sm"
                    variant="outline"
                  >
                    Edit
                  </Button>
                </div>

                <Badge>
                  Regular
                </Badge>

                <div className="flex justify-between items-center">
                  <span>
                    Status
                  </span>

                  <Button
                    size="sm"
                    variant="outline"
                  >
                    Deactivate
                  </Button>
                </div>

                <Badge
                  variant="secondary"
                >
                  Active
                </Badge>

              </div>

            </CardContent>

          </Card>

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-8 space-y-4">

          {/* Tabs */}
          <Card>
            <CardContent className="p-4 flex gap-6">
              <Button size="sm">
                Overview
              </Button>

              <Button
                size="sm"
                variant="ghost"
              >
                Order History
              </Button>

              <Button
                size="sm"
                variant="ghost"
              >
                Addresses
              </Button>

              <Button
                size="sm"
                variant="ghost"
              >
                Notes
              </Button>
            </CardContent>
          </Card>

          {/* Overview */}
          <Card>

            <CardHeader>
              <CardTitle>
                Spending Overview
              </CardTitle>
            </CardHeader>

            <CardContent>

              <div className="grid md:grid-cols-3 gap-4">

                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">
                      Total Spent
                    </p>

                    <h3 className="text-2xl font-bold">
                      ₹25,600
                    </h3>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">
                      Orders
                    </p>

                    <h3 className="text-2xl font-bold">
                      12
                    </h3>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">
                      Avg Order Value
                    </p>

                    <h3 className="text-2xl font-bold">
                      ₹2,133
                    </h3>
                  </CardContent>
                </Card>

              </div>

              {/* Chart Placeholder */}
              <div className="mt-6 h-[250px] rounded-xl border flex items-center justify-center text-muted-foreground">
                Spending Chart
              </div>

            </CardContent>

          </Card>

          {/* Recent Orders */}
          <Card>

            <CardHeader>
              <CardTitle>
                Recent Orders
              </CardTitle>
            </CardHeader>

            <CardContent>

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
                      Amount
                    </TableHead>

                    <TableHead>
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>

                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        {order.id}
                      </TableCell>

                      <TableCell>
                        {order.date}
                      </TableCell>

                      <TableCell>
                        {order.amount}
                      </TableCell>

                      <TableCell>
                        <Badge>
                          {order.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}

                </TableBody>

              </Table>

            </CardContent>

          </Card>

        </div>

      </div>

    </div>
  );
}