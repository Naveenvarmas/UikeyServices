"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsTabs() {
  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
        <TabsTrigger value="general">
          General
        </TabsTrigger>

        <TabsTrigger value="security">
          Security
        </TabsTrigger>

        <TabsTrigger value="notifications">
          Notifications
        </TabsTrigger>

        <TabsTrigger value="payments">
          Payments
        </TabsTrigger>

        <TabsTrigger value="shipping">
          Shipping
        </TabsTrigger>

        <TabsTrigger value="tax">
          Tax
        </TabsTrigger>

        <TabsTrigger value="store">
          Store
        </TabsTrigger>

        <TabsTrigger value="advanced">
          Advanced
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}