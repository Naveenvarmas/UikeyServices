"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function AllPlansIncludeCard() {
  const features = ["Secure QR Code Generation", "Business Dashboard Access", "Unlimited Scans Tracking", "Analytics & Reports", "Email Support", "Mobile Friendly Interface", "Data Security & Backup", "Custom Branding Options"];

  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="text-sm font-semibold mb-1">All Plans Include</h3>
        <p className="text-xs text-muted-foreground mb-3">Every subscription plan comes with these core features.</p>
        <div className="space-y-1.5">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
              <span className="text-xs">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}