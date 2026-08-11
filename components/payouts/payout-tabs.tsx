"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PayoutTabs() {
  return (
    <Tabs defaultValue="all">
      <TabsList className="w-full justify-start">
        <TabsTrigger value="all">
          All Transactions
        </TabsTrigger>

        <TabsTrigger value="earnings">
          Earnings (COD)
        </TabsTrigger>

        <TabsTrigger value="payouts">
          Payouts
        </TabsTrigger>

        <TabsTrigger value="requests">
          Payout Requests
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}