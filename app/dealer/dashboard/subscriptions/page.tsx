import CurrentPlanCard from "@/components/payment/current-plan-card";
import PricingCard from "@/components/payment/pricing-card";
import MonthlyYearlyToggle from "@/components/payment/monthly-yearly-toggle";
import PlanComparisonTable from "@/components/payment/plan-comparison-table";
import PaymentHistoryTable from "@/components/payment/payment-history-table";
import SupportCard from "@/components/payment/support-card";
import BillingInfoCard from "@/components/payment/billing-info-card";
import AllPlansIncludeCard from "@/components/payment/all-plans-include-card";

export default function SubscriptionPage() {
  return (
    <div className="space-y-3 p-4">
      {/* Page Header */}
      <div>
        <h1 className="text-xl font-bold">Subscription & Billing</h1>
        <p className="text-muted-foreground text-sm mt-0.5">
          Manage your subscription plans, billing details and payment history.
        </p>
      </div>

      {/* Current Plan */}
      <CurrentPlanCard />

      {/* Billing Toggle + Pricing Cards */}
      <div className="space-y-2">
        <MonthlyYearlyToggle />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          <PricingCard
            title="Starter"
            price={499}
            description="Perfect for small businesses"
          />
          <PricingCard
            title="Professional"
            price={999}
            description="Most popular plan"
            popular
          />
          <PricingCard
            title="Business"
            price={1999}
            description="Advanced features for growing businesses"
          />
          <PricingCard
            title="Enterprise"
            price={4999}
            description="Unlimited access and premium support"
          />
        </div>
      </div>

      {/* Comparison Table */}
      <PlanComparisonTable />

      {/* Support + Billing + Features */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <SupportCard />
        <BillingInfoCard />
        <AllPlansIncludeCard />
      </div>

      {/* Payment History */}
      <PaymentHistoryTable />
    </div>
  );
}