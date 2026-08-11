"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export default function BillingInfoCard() {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="text-sm font-semibold mb-3">Billing Information</h3>
        <div className="space-y-2.5">
          {[
            { icon: Building2, label: "Business Name", value: "Apni Digi Pvt Ltd" },
            { icon: Mail, label: "Email", value: "support@apnidigi.com" },
            { icon: Phone, label: "Phone", value: "+91 9876543210" },
            { icon: MapPin, label: "Address", value: "Bhopal, Madhya Pradesh, India" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-2">
              <Icon className="h-4 w-4 text-purple-600 mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-xs font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full rounded-lg border py-1.5 text-sm font-medium hover:bg-muted transition">
          Edit Billing Info
        </button>
      </CardContent>
    </Card>
  );
}