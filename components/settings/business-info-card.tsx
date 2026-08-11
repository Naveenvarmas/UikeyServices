"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BusinessInfoCard() {
  return (
    <Card className="h-full">
      <CardContent className="p-6 h-full flex flex-col justify-center">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-semibold">
            Business Information
          </h3>

          <Button variant="outline" size="sm">
            Edit Details
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="/apnidigilogo.png"
            alt="Business"
            className="h-16 w-16 rounded-full border object-cover shrink-0"
          />

          <div className="flex flex-col justify-center">
            <h4 className="text-xl font-semibold leading-none">
              Sharma Electronics
            </h4>

            <p className="text-sm text-muted-foreground mt-2">
              support@sharmaelectronics.com
            </p>

            <p className="text-sm text-muted-foreground mt-1">
              +91 98765 43210
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}