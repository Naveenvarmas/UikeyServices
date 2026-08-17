"use client";

import CustomerProfile from "./components/CustomerProfile";
import CustomerTabs from "./components/CustomerTabs";
import SpendingOverview from "./components/SpendingOverview";

export default function CustomerDetailsPage() {
  // Dummy customer data
  // Replace this with API data later.
  const customer = {
    id: "orders",
    name: "Rahul Kumar",
    initials: "RK",
    email: "rahulkumar@gmail.com",
    phone: "+91 98888 98888",
    location: "Ranchi, Jharkhand",
    joinedDate: "10 Mar, 2024",
    group: "Regular",
    status: "Active",
    orders: 12,
    totalSpent: 25600,
    averageOrderValue: 2133,
  };

  return (
    <div className="space-y-6 p-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Customer Details
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Customer ID: {customer.id}
        </p>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">

        {/* Left Side */}
        <CustomerProfile
          customer={customer}
        />

        {/* Right Side */}
        <div className="space-y-6">

          {/* Tabs */}
          <CustomerTabs />

          {/* Overview */}
          <SpendingOverview
            totalSpent={customer.totalSpent}
            orders={customer.orders}
            avgOrderValue={customer.averageOrderValue}
          />

        </div>

      </div>

    </div>
  );
}