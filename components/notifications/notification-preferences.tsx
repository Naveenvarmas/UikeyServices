"use client";

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const settings = [
  "Order Updates",
  "Payments",
  "Customers",
  "System Alerts",
];

export default function NotificationPreferences() {
  return (
    <Card className="p-5">
      <h3 className="font-semibold mb-4">
        Notification Preferences
      </h3>

      <div className="space-y-4">
        {settings.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between"
          >
            <span>{item}</span>
            <Switch defaultChecked />
          </div>
        ))}
      </div>
    </Card>
  );
}