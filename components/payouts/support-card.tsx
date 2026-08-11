"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";

export default function SupportCard() {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
            <Headphones className="h-5 w-5 text-violet-600" />
          </div>

          <h3 className="font-semibold">
            Need Help?
          </h3>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          Our support team is here to help you with your payouts.
        </p>

        <Button
          variant="outline"
          className="w-full"
        >
          Contact Support
        </Button>
      </CardContent>
    </Card>
  );
}