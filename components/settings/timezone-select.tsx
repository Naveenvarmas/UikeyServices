"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TimezoneSelectProps {
  defaultValue?: string;
}

export default function TimezoneSelect({
  defaultValue = "asia-kolkata",
}: TimezoneSelectProps) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Timezone" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="asia-kolkata">
          Asia/Kolkata (GMT+5:30)
        </SelectItem>

        <SelectItem value="asia-dubai">
          Asia/Dubai (GMT+4)
        </SelectItem>

        <SelectItem value="europe-london">
          Europe/London (GMT+0)
        </SelectItem>

        <SelectItem value="america-new-york">
          America/New York (GMT-5)
        </SelectItem>

        <SelectItem value="asia-singapore">
          Asia/Singapore (GMT+8)
        </SelectItem>

        <SelectItem value="australia-sydney">
          Australia/Sydney (GMT+10)
        </SelectItem>
      </SelectContent>
    </Select>
  );
}