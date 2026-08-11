"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <div className="rounded-xl border p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How can I track my order?
          </AccordionTrigger>

          <AccordionContent>
            You can track your order from the Orders
            section inside your dashboard.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            What is your return policy?
          </AccordionTrigger>

          <AccordionContent>
            Products can be returned within 7 days
            after successful delivery.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            How do I request a refund?
          </AccordionTrigger>

          <AccordionContent>
            Refund requests can be raised from
            the Orders page.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            Which payment methods are accepted?
          </AccordionTrigger>

          <AccordionContent>
            UPI, Debit Card, Credit Card,
            Net Banking and Wallets.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            How can I update my address?
          </AccordionTrigger>

          <AccordionContent>
            Go to Profile → Address section
            and update your address.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <button className="w-full mt-5 border rounded-lg py-3 text-violet-600 font-medium hover:bg-violet-50">
        View All Articles →
      </button>
    </div>
  );
}