"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SettingToggle from "./setting-toggle";

export default function NotificationPreferencesCard() {
  return (
    <Card className="h-full">
      <CardContent className="p-5 h-full flex flex-col justify-center">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-base">
            Notification Preferences
          </h3>

          <Button
            variant="outline"
            size="sm"
          >
            Manage All
          </Button>
        </div>

        <div className="space-y-1">

          <SettingToggle
            title="New Order Alerts"
            description="Get notified when new orders arrive"
            defaultChecked
          />

          <SettingToggle
            title="Payment Notifications"
            description="Receive payout and billing updates"
            defaultChecked
          />

          <SettingToggle
            title="Promotions & Updates"
            description="Product news and special offers"
          />

        </div>
      </CardContent>
    </Card>
  );
}