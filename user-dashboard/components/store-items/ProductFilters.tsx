"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProductFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-3 justify-between">
      <div className="relative w-full md:max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />

        <Input
          placeholder="Search products..."
          className="pl-10"
        />
      </div>

      <div className="flex gap-2">
        <Button variant="outline">
          Filter
        </Button>

        <Button variant="outline">
          Category
        </Button>

        <Button variant="outline">
          Status
        </Button>
      </div>
    </div>
  );
}