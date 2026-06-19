import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="space-y-4 p-4">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Order Details
          </h1>

          <p className="text-sm text-muted-foreground">
            Order #{id}
          </p>
        </div>

        <Button>
          Print Invoice
        </Button>
      </div>

      {/* Top Cards */}
      <div className="grid gap-4 lg:grid-cols-3">

        <Card>
          <CardHeader>
            <CardTitle>
              Order Information
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-2 text-sm">
            <p><strong>Order ID:</strong> #{id}</p>
            <p><strong>Order Date:</strong> 19 May 2024</p>
            <p><strong>Status:</strong> Delivered</p>
            <p><strong>Payment:</strong> Paid</p>
            <p><strong>Method:</strong> UPI</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              Customer Information
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-2 text-sm">
            <p>Rahul Kumar</p>
            <p>+91 9876543210</p>
            <p>rahul@gmail.com</p>
            <p>Ranchi, Jharkhand</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              Order Summary
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹2,330</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹120</span>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹2,450</span>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Bottom */}
      <div className="grid gap-4 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>
                Order Items
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-3">

                <div className="flex justify-between border-b pb-2">
                  <span>Samsung 55" TV</span>
                  <span>₹45,000</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span>Whirlpool Fridge</span>
                  <span>₹28,900</span>
                </div>

                <div className="flex justify-between">
                  <span>Sony Headphones</span>
                  <span>₹8,990</span>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>
                Order Timeline
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 text-sm">
              <p>✅ Order Placed</p>
              <p>✅ Payment Confirmed</p>
              <p>✅ Packed</p>
              <p>✅ Shipped</p>
              <p>✅ Delivered</p>
            </CardContent>
          </Card>
        </div>

      </div>

    </div>
  );
}