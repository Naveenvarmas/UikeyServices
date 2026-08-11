"use client";

import {
  Package,
  IndianRupee,
  RefreshCcw,
  User,
  ShoppingBag,
} from "lucide-react";

import SupportHero from "@/components/support/support-hero";
import ContactCard from "@/components/support/contact-card";
import HelpCategoryCard from "@/components/support/help-category-card";
import FaqSection from "@/components/support/faq-section";
import SupportTickets from "@/components/support/support-tickets";

export default function SupportPage() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Support
        </h1>

        <p className="text-muted-foreground">
          Get help, raise tickets and browse FAQs.
        </p>
      </div>

      {/* Hero + Categories + Contact */}
      <div className="grid xl:grid-cols-12 gap-4">
        
        {/* Left Side */}
        <div className="xl:col-span-9 space-y-4">
          <SupportHero />

          <div>
            <h2 className="text-xl font-semibold mb-3">
              What do you need help with?
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
              <HelpCategoryCard
                icon={Package}
                title="Orders & Delivery"
                description="Track, cancel or change orders"
              />

              <HelpCategoryCard
                icon={IndianRupee}
                title="Payments & Refunds"
                description="Payment issues and refunds"
              />

              <HelpCategoryCard
                icon={RefreshCcw}
                title="Returns & Exchanges"
                description="Return or exchange items"
              />

              <HelpCategoryCard
                icon={User}
                title="Account & Profile"
                description="Profile and settings issues"
              />

              <HelpCategoryCard
                icon={ShoppingBag}
                title="Products & Services"
                description="Product related support"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="xl:col-span-3">
          <ContactCard />
        </div>
      </div>

      {/* FAQ + Tickets */}
      <div className="grid xl:grid-cols-12 gap-4">
        <div className="xl:col-span-7">
          <FaqSection />
        </div>

        <div className="xl:col-span-5">
          <SupportTickets />
        </div>
      </div>
    </div>
  );
}