"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RequestPayoutCard() {
  return (
    <Card>
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold mb-4">
          Request Payout
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Available Balance
            </span>

            <span className="font-semibold">
              ₹2,350.00
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Minimum Payout
            </span>

            <span>₹500.00</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Processing Time
            </span>

            <span>1-3 Days</span>
          </div>
        </div>

        <Button className="w-full mt-5">
          Request Payout
        </Button>
      </CardContent>
    </Card>
  );
}