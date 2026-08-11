"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

export default function PaymentHistoryTable() {
  const payments = [
    { invoice: "INV-1001", date: "12 Jun 2026", plan: "Pro Plan", amount: "₹999", status: "Paid" },
    { invoice: "INV-1002", date: "12 May 2026", plan: "Pro Plan", amount: "₹999", status: "Paid" },
    { invoice: "INV-1003", date: "12 Apr 2026", plan: "Starter Plan", amount: "₹499", status: "Paid" },
    { invoice: "INV-1004", date: "12 Mar 2026", plan: "Starter Plan", amount: "₹499", status: "Pending" },
  ];

  return (
    <div className="rounded-xl border bg-card">
      <div className="px-4 py-3 border-b">
        <h3 className="text-sm font-semibold">Payment History</h3>
        <p className="text-xs text-muted-foreground mt-0.5">View all your past invoices and payments.</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {["Invoice", "Date", "Plan", "Amount", "Status", "Action"].map((h) => (
              <TableHead key={h} className={`text-xs py-2 ${h === "Action" ? "text-right" : ""}`}>{h}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.invoice}>
              <TableCell className="text-xs py-2 font-medium">{payment.invoice}</TableCell>
              <TableCell className="text-xs py-2">{payment.date}</TableCell>
              <TableCell className="text-xs py-2">{payment.plan}</TableCell>
              <TableCell className="text-xs py-2">{payment.amount}</TableCell>
              <TableCell className="py-2">
                <Badge variant={payment.status === "Paid" ? "default" : "secondary"} className="text-xs">
                  {payment.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right py-2">
                <button className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border text-xs hover:bg-muted transition">
                  <Download className="h-3 w-3" />
                  Download
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}