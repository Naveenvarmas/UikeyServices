"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  popular?: boolean;
}

export default function PricingCard({ title, price, description, popular = false }: PricingCardProps) {
  const features = ["Unlimited QR Codes", "Business Profile", "Priority Support", "Analytics Dashboard", "Custom Branding"];

  return (
    <Card className={`relative transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${popular ? "border-purple-500 shadow-md" : ""}`}>
      <CardContent className="p-4">
        {popular && (
          <Badge className="absolute top-3 right-3 bg-purple-600 text-xs">Popular</Badge>
        )}
        <h3 className="text-base font-bold">{title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        <div className="mt-3">
          <span className="text-2xl font-bold">₹{price}</span>
          <span className="text-muted-foreground text-xs">/month</span>
        </div>
        <div className="mt-3 space-y-1.5">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Check className="h-3 w-3 text-green-500" />
              <span className="text-xs">{feature}</span>
            </div>
          ))}
        </div>
        <button className={`mt-4 w-full py-1.5 rounded-lg text-sm font-medium transition ${popular ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white" : "border border-border hover:bg-muted"}`}>
          Choose Plan
        </button>
      </CardContent>
    </Card>
  );
}