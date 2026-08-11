"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ChangePasswordDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Change
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Change Password
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            type="password"
            placeholder="Current Password"
          />

          <Input
            type="password"
            placeholder="New Password"
          />

          <Input
            type="password"
            placeholder="Confirm Password"
          />

          <Button className="w-full">
            Update Password
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}