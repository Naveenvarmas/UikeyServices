"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  {
    date: "18 May, 2025",
    orderId: "#ORD-250518-001",
    type: "COD Earning",
    source: "Cash on Delivery",
    amount: "+ ₹850",
    status: "Added",
  },
  {
    date: "17 May, 2025",
    orderId: "#ORD-250517-005",
    type: "COD Earning",
    source: "Cash on Delivery",
    amount: "+ ₹1,250",
    status: "Added",
  },
  {
    date: "16 May, 2025",
    orderId: "#PAYOUT-250516",
    type: "Payout Request",
    source: "HDFC Bank",
    amount: "- ₹2,000",
    status: "In Process",
  },
  {
    date: "14 May, 2025",
    orderId: "#PAYOUT-250514",
    type: "Payout",
    source: "HDFC Bank",
    amount: "- ₹1,500",
    status: "Paid",
  },
];

export default function PayoutHistoryTable() {
  return (
    <div className="rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {transactions.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.date}</TableCell>

              <TableCell className="font-medium">
                {item.orderId}
              </TableCell>

              <TableCell>{item.type}</TableCell>

              <TableCell>{item.source}</TableCell>

              <TableCell
                className={
                  item.amount.includes("+")
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                }
              >
                {item.amount}
              </TableCell>

              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}