"use client";

import WishlistStats from "./components/WishlistStats";
import WishlistList from "./components/WishlistList";

export default function WishlistPage() {


  const wishlistItems = [
    {
      id: "P001",
      productName: "Premium Leather Shoes",
      price: 2499,
      customerName: "Rahul Kumar",
      addedDate: "12 Aug 2026",
      wishlistCount: 42,
    },
    {
      id: "P002",
      productName: "Classic Cotton Shirt",
      price: 1299,
      customerName: "Priya Sharma",
      addedDate: "11 Aug 2026",
      wishlistCount: 35,
    },
    {
      id: "P003",
      productName: "Premium Casual Watch",
      price: 3499,
      customerName: "Arjun Reddy",
      addedDate: "10 Aug 2026",
      wishlistCount: 28,
    },
    {
      id: "P004",
      productName: "Designer Backpack",
      price: 1899,
      customerName: "Sneha Patel",
      addedDate: "8 Aug 2026",
      wishlistCount: 24,
    },
    {
      id: "P005",
      productName: "Sports Running Shoes",
      price: 2999,
      customerName: "Vikram Singh",
      addedDate: "6 Aug 2026",
      wishlistCount: 19,
    },
  ];


  const totalItems =
    wishlistItems.reduce(
      (total, item) =>
        total + item.wishlistCount,
      0
    );

  const totalProducts =
    wishlistItems.length;

  const totalCustomers =
    new Set(
      wishlistItems.map(
        (item) => item.customerName
      )
    ).size;


  return (
    <div className="space-y-6 p-6">

      <div>

        <h1 className="text-3xl font-bold">
          Wishlist
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          View products that customers have added to their wishlist.
        </p>

      </div>

      <WishlistStats
        totalItems={totalItems}
        totalProducts={totalProducts}
        totalCustomers={totalCustomers}
      />

      <WishlistList
        items={wishlistItems}
      />

    </div>
  );
}