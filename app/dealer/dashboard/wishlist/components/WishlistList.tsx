"use client";

import {
  Heart,
  User,
  Eye,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

interface WishlistItem {
  id: string;
  productName: string;
  price: number;
  customerName: string;
  addedDate: string;
  wishlistCount: number;
}

interface WishlistListProps {
  items: WishlistItem[];
}

export default function WishlistList({
  items,
}: WishlistListProps) {

  return (
    <Card>

      <CardHeader>

        <CardTitle>
          Wishlist Products
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Products customers have added to their wishlist.
        </p>

      </CardHeader>


      <CardContent>

        {/* Desktop Header */}

        <div className="hidden rounded-lg bg-muted px-4 py-3 text-sm font-medium md:grid md:grid-cols-[2fr_1fr_1.5fr_1fr_1fr_auto] md:gap-4">

          <div>
            Product
          </div>

          <div>
            Price
          </div>

          <div>
            Customer
          </div>

          <div>
            Added
          </div>

          <div>
            Wishlist
          </div>

          <div>
            Action
          </div>

        </div>


        {/* Items */}

        <div className="divide-y">

          {items.map((item) => (

            <div
              key={item.id}
              className="grid gap-4 px-4 py-5 md:grid-cols-[2fr_1fr_1.5fr_1fr_1fr_auto] md:items-center"
            >

              {/* Product */}

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">

                  <Heart className="h-5 w-5 text-red-500" />

                </div>

                <div>

                  <p className="font-medium">
                    {item.productName}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Product ID: {item.id}
                  </p>

                </div>

              </div>


              {/* Price */}

              <div className="font-medium">
                ₹{item.price}
              </div>


              {/* Customer */}

              <div className="flex items-center gap-2">

                <User className="h-4 w-4 text-muted-foreground" />

                <span className="text-sm">
                  {item.customerName}
                </span>

              </div>


              {/* Date */}

              <div className="text-sm text-muted-foreground">
                {item.addedDate}
              </div>


              {/* Wishlist Count */}

              <div>

                <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-600">

                  <Heart className="h-3 w-3 fill-current" />

                  {item.wishlistCount}

                </span>

              </div>


              {/* Action */}

              <div>

                <Button
                  variant="outline"
                  size="sm"
                >
                  <Eye className="mr-2 h-4 w-4" />

                  View
                </Button>

              </div>

            </div>

          ))}

        </div>

      </CardContent>

    </Card>
  );
}