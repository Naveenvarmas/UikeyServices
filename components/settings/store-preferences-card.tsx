"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import SettingToggle from "./setting-toggle";

export default function StorePreferencesCard() {
  return (
    <Card className="h-full">
      <CardContent className="p-5 h-full flex flex-col justify-center">
        <h3 className="font-semibold text-base mb-4">
          Store Preferences
        </h3>

        <div className="space-y-2">

          <SettingToggle
            title="Store Status"
            description="Enable or disable your store"
            defaultChecked
          />

          <SettingToggle
            title="Vacation Mode"
            description="Temporarily stop new orders"
          />

          <div className="pt-3">
            <Label className="text-sm mb-2 block">
              Time Zone
            </Label>

            <Select defaultValue="india">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="india">
                  Asia/Kolkata
                </SelectItem>

                <SelectItem value="dubai">
                  Asia/Dubai
                </SelectItem>

                <SelectItem value="london">
                  Europe/London
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-3">
            <Label className="text-sm mb-2 block">
              Currency
            </Label>

            <Select defaultValue="inr">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="inr">
                  INR (₹)
                </SelectItem>

                <SelectItem value="usd">
                  USD ($)
                </SelectItem>

                <SelectItem value="eur">
                  EUR (€)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}