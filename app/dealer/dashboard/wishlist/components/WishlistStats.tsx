"use client";

import {
  Heart,
  Package,
  Users,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface WishlistStatsProps {
  totalItems: number;
  totalProducts: number;
  totalCustomers: number;
}

export default function WishlistStats({
  totalItems,
  totalProducts,
  totalCustomers,
}: WishlistStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">

      {/* Total Wishlist Items */}
      <Card>
        <CardContent className="p-6">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-muted-foreground">
                Total Wishlist Items
              </p>

              <p className="mt-2 text-3xl font-bold">
                {totalItems}
              </p>
            </div>

            <div className="rounded-full bg-red-100 p-3">
              <Heart className="h-6 w-6 text-red-500" />
            </div>

          </div>

        </CardContent>
      </Card>


      {/* Products */}
      <Card>
        <CardContent className="p-6">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-muted-foreground">
                Wishlisted Products
              </p>

              <p className="mt-2 text-3xl font-bold">
                {totalProducts}
              </p>
            </div>

            <div className="rounded-full bg-blue-100 p-3">
              <Package className="h-6 w-6 text-blue-600" />
            </div>

          </div>

        </CardContent>
      </Card>


      {/* Customers */}
      <Card>
        <CardContent className="p-6">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-muted-foreground">
                Customers
              </p>

              <p className="mt-2 text-3xl font-bold">
                {totalCustomers}
              </p>
            </div>

            <div className="rounded-full bg-green-100 p-3">
              <Users className="h-6 w-6 text-green-600" />
            </div>

          </div>

        </CardContent>
      </Card>

    </div>
  );
}