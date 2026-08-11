"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";

export default function PlanComparisonTable() {
  const plans = [
    { feature: "QR Codes", starter: "100", pro: "1000", business: "Unlimited", enterprise: "Unlimited" },
    { feature: "Analytics", starter: false, pro: true, business: true, enterprise: true },
    { feature: "Custom Branding", starter: false, pro: true, business: true, enterprise: true },
    { feature: "Priority Support", starter: false, pro: true, business: true, enterprise: true },
    { feature: "Dedicated Manager", starter: false, pro: false, business: true, enterprise: true },
  ];

  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value
        ? <Check className="h-3.5 w-3.5 text-green-500 mx-auto" />
        : <X className="h-3.5 w-3.5 text-red-500 mx-auto" />;
    }
    return <span className="text-xs">{value}</span>;
  };

  return (
    <div className="rounded-xl border bg-card">
      <div className="px-4 py-3 border-b">
        <h3 className="text-sm font-semibold">Plan Comparison</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Compare all available plans</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xs py-2">Features</TableHead>
            <TableHead className="text-center text-xs py-2">Starter</TableHead>
            <TableHead className="text-center text-xs py-2">Pro</TableHead>
            <TableHead className="text-center text-xs py-2">Business</TableHead>
            <TableHead className="text-center text-xs py-2">Enterprise</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plans.map((row) => (
            <TableRow key={row.feature}>
              <TableCell className="text-xs py-2 font-medium">{row.feature}</TableCell>
              <TableCell className="text-center py-2">{renderValue(row.starter)}</TableCell>
              <TableCell className="text-center py-2">{renderValue(row.pro)}</TableCell>
              <TableCell className="text-center py-2">{renderValue(row.business)}</TableCell>
              <TableCell className="text-center py-2">{renderValue(row.enterprise)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}