"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  PackageCheck,
  Wallet,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

export default function CodPayoutProcess() {
  const steps = [
    {
      title: "Order Delivered",
      icon: PackageCheck,
    },
    {
      title: "Amount Added",
      icon: Wallet,
    },
    {
      title: "Payout Requested",
      icon: CreditCard,
    },
    {
      title: "Amount Paid",
      icon: CheckCircle2,
    },
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">
          How COD Payout Works
        </h3>

        <p className="text-sm text-muted-foreground mb-6">
          When your order is delivered successfully via Cash on Delivery,
          the amount is added to your earnings.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="h-12 w-12 rounded-full bg-violet-100 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-violet-600" />
                </div>

                <p className="text-sm font-medium">
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}