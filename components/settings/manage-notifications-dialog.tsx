"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export default function ManageNotificationsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Manage All
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Notification Preferences
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <div className="flex items-center justify-between">
            <span>New Orders</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <span>Payments</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <span>Promotions</span>
            <input type="checkbox" />
          </div>

          <div className="flex items-center justify-between">
            <span>Marketing Emails</span>
            <input type="checkbox" />
          </div>

          <div className="flex items-center justify-between">
            <span>Security Alerts</span>
            <input type="checkbox" defaultChecked />
          </div>

          <Button className="w-full">
            Save Preferences
          </Button>

        </div>
      </DialogContent>
    </Dialog>
  );
}