"use client";

import {
  Wallet,
  CircleDollarSign,
  Clock3,
  Landmark,
} from "lucide-react";

import PayoutStatCard from "@/components/payouts/payout-stat-card";
import PayoutMethodCard from "@/components/payouts/payout-method-card";
import CodPayoutProcess from "@/components/payouts/cod-payout-process";
import PayoutTabs from "@/components/payouts/payout-tabs";
import PayoutHistoryTable from "@/components/payouts/payout-history-table";
import RequestPayoutCard from "@/components/payouts/request-payout-card";
import RecentPayoutsCard from "@/components/payouts/recent-payouts-card";
import SupportCard from "@/components/payouts/support-card";

export default function PayoutsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Payouts
        </h1>

        <p className="text-muted-foreground mt-1">
          Manage COD earnings, payout requests and transaction history.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <PayoutStatCard
          title="Total Earnings (COD)"
          amount="₹6,450.00"
          subtitle="All time COD earnings"
          icon={Wallet}
        />

        <PayoutStatCard
          title="Available For Payout"
          amount="₹2,350.00"
          subtitle="Ready to withdraw"
          icon={CircleDollarSign}
        />

        <PayoutStatCard
          title="Payout In Process"
          amount="₹1,200.00"
          subtitle="Expected in 1-3 days"
          icon={Clock3}
        />

        <PayoutStatCard
          title="Total Payouts"
          amount="₹4,100.00"
          subtitle="Successfully paid"
          icon={Landmark}
        />
      </div>

      {/* Main Section */}
      <div className="grid gap-6 xl:grid-cols-12">
        {/* Left */}
        <div className="xl:col-span-8 space-y-6">
          <CodPayoutProcess />

          <div className="space-y-4">
            <PayoutTabs />
            <PayoutHistoryTable />
          </div>
        </div>

        {/* Right */}
        <div className="xl:col-span-4 space-y-6">
          <PayoutMethodCard />

          <RequestPayoutCard />

          <RecentPayoutsCard />

          <SupportCard />
        </div>
      </div>
    </div>
  );
}