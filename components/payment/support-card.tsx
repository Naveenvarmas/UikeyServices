"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Headphones, MessageCircle } from "lucide-react";

export default function SupportCard() {
  return (
    <Card className="h-full">
      <CardContent className="p-5 flex flex-col items-center justify-center text-center h-full">

        <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center mb-3">
          <Headphones className="h-5 w-5 text-purple-600" />
        </div>

        <h3 className="font-semibold text-base">
          Need Help?
        </h3>

        <p className="text-sm text-muted-foreground mt-1">
          Contact our support team
        </p>

        <p className="text-sm text-muted-foreground mt-3 max-w-xs">
          Our team is available 24/7 to help with billing,
          subscriptions and account issues.
        </p>

        <button className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-500 text-white py-2.5 text-sm font-medium hover:opacity-90 transition">
          <MessageCircle className="h-4 w-4" />
          Contact Support
        </button>

      </CardContent>
    </Card>
  );
}