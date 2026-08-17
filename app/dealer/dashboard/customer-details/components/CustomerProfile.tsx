"use client";

import {
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Pencil,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Customer {
  name: string;
  initials: string;
  email: string;
  phone: string;
  location: string;
  joinedDate: string;
  group: string;
  status: string;
  orders: number;
  totalSpent: number;
  averageOrderValue: number;
}

interface CustomerProfileProps {
  customer: Customer;
}

export default function CustomerProfile({
  customer,
}: CustomerProfileProps) {
  return (
    <Card className="h-fit">
      <CardContent className="p-6">

        {/* Avatar */}
        <div className="flex justify-center mt-2 ">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
            {customer.initials}
          </div>
        </div>

        {/* Customer Name */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">
            {customer.name}
          </h2>

          <span className="mt-2 inline-flex rounded-full bg-muted px-3 py-1 text-xs font-medium">
            {customer.group} Customer
          </span>
        </div>

        {/* Customer Information */}
        <div className="mt-6 space-y-4">

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-blue-600" />

            <span className="break-all text-sm">
              {customer.email}
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-red-500" />

            <span className="text-sm">
              {customer.phone}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-red-500" />

            <span className="text-sm">
              {customer.location}
            </span>
          </div>

          {/* Joined Date */}
          <div className="flex items-center gap-3">
            <CalendarDays className="h-4 w-4 text-blue-600" />

            <span className="text-sm">
              Joined on {customer.joinedDate}
            </span>
          </div>

        </div>

        {/* Small Statistics */}
        <div className="mt-7 grid grid-cols-3 gap-3 border-t pt-5">

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Orders
            </p>

            <p className="mt-1 font-semibold">
              {customer.orders}
            </p>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Spent
            </p>

            <p className="mt-1 font-semibold">
              ₹{customer.totalSpent.toLocaleString("en-IN")}
            </p>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Avg
            </p>

            <p className="mt-1 font-semibold">
              ₹{customer.averageOrderValue.toLocaleString("en-IN")}
            </p>
          </div>

        </div>

        {/* Customer Group */}
        <div className="mt-7 border-t pt-5">

          <div className="flex items-center justify-between">

            <h3 className="font-medium">
              Customer Group
            </h3>

            <Button
              variant="ghost"
              size="sm"
            >
              <Pencil className="mr-1 h-3.5 w-3.5" />
              Edit
            </Button>

          </div>

          <span className="mt-3 inline-flex rounded-full bg-muted px-3 py-1 text-xs font-medium">
            {customer.group}
          </span>

        </div>

        {/* Status */}
        <div className="mt-6 border-t pt-5">

          <div className="flex items-center justify-between">

            <h3 className="font-medium">
              Status
            </h3>

            <Button
              variant="ghost"
              size="sm"
            >
              Deactivate
            </Button>

          </div>

          <div className="mt-3 flex items-center gap-2">

            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

            <span className="text-sm">
              {customer.status}
            </span>

          </div>

        </div>

      </CardContent>
    </Card>
  );
}