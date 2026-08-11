"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tickets = [
  {
    id: "#TKT-250516-001",
    title: "Issue with order delivery",
    status: "Open",
    date: "16 May, 2025",
  },
  {
    id: "#TKT-250513-042",
    title: "Refund not received",
    status: "Resolved",
    date: "13 May, 2025",
  },
  {
    id: "#TKT-250510-015",
    title: "Payment failed but amount debited",
    status: "In Progress",
    date: "10 May, 2025",
  },
];

export default function SupportTickets() {
  return (
    <Card className="h-full">
      <CardContent className="h-full min-h-[500px] flex flex-col p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">
            My Support Tickets
          </h2>

          <button className="text-violet-600 text-sm font-medium hover:underline">
            View All Tickets
          </button>
        </div>

        {/* Tickets Centered */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="border rounded-lg p-4 hover:bg-muted/40 transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">
                    {ticket.id}
                  </p>

                  <p className="text-sm mt-1">
                    {ticket.title}
                  </p>
                </div>

                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    ticket.status === "Resolved"
                      ? "bg-green-100 text-green-700"
                      : ticket.status === "Open"
                      ? "bg-violet-100 text-violet-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {ticket.status}
                </span>
              </div>

              <p className="text-xs text-muted-foreground mt-3">
                {ticket.date}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <Button className="w-full mt-6">
          + Create New Ticket
        </Button>
      </CardContent>
    </Card>
  );
}