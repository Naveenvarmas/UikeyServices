"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Landmark } from "lucide-react";

export default function PayoutMethodCard() {
  return (
    <Card>
      <CardContent className="p-5 space-y-4">
        <h3 className="text-lg font-semibold">
          Payout Method
        </h3>

        <div className="rounded-xl border p-4 bg-muted/30">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-violet-100 flex items-center justify-center">
              <Landmark className="h-5 w-5 text-violet-600" />
            </div>

            <div>
              <h4 className="font-semibold">
                HDFC Bank
              </h4>

              <p className="text-sm text-muted-foreground">
                A/C No. ******1234
              </p>

              <p className="text-sm text-muted-foreground">
                IFSC: HDFC0001234
              </p>

              <span className="inline-block mt-2 text-xs px-2 py-1 rounded-md bg-green-100 text-green-700">
                Verified
              </span>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full"
        >
          Change Payout Method
        </Button>
      </CardContent>
    </Card>
  );
}