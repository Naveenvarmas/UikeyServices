"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SettingToggle from "./setting-toggle";
import SettingRow from "./setting-row";

export default function AccountSecurityCard() {
  return (
    <Card className="h-full">
      <CardContent className="p-5 h-full flex flex-col justify-center">
        <h3 className="font-semibold text-base mb-4">
          Account Security
        </h3>

        <div className="space-y-1">

          <SettingRow
            title="Password"
            description="Last changed 15 days ago"
            action={
              <Button
                variant="outline"
                size="sm"
              >
                Change
              </Button>
            }
          />

          <SettingToggle
            title="Two-Factor Authentication"
            description="Add extra security to your account"
            defaultChecked
          />

          <SettingRow
            title="Active Sessions"
            description="Manage logged in devices"
            action={
              <Button
                variant="outline"
                size="sm"
              >
                View
              </Button>
            }
          />

        </div>
      </CardContent>
    </Card>
  );
}