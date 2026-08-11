"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SupportHero() {
  return (
    <div className="rounded-2xl border bg-card p-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground">
          Hi Rahul! 👋
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          How can we help you today?
        </p>

        <div className="mt-6 flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="Search for help articles..."
              className="h-12 pl-10"
            />
          </div>

          <Button className="h-12 px-8">
            Search
          </Button>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Common searches: Order tracking, Refund, Payment,
          Return policy
        </p>
      </div>
    </div>
  );
}