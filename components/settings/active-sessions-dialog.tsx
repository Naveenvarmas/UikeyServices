"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Laptop, Smartphone } from "lucide-react";

export default function ActiveSessionsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          View
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Active Sessions
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center justify-between border rounded-lg p-3">
            <div className="flex items-center gap-3">
              <Laptop size={18} />

              <div>
                <p className="font-medium">
                  Chrome - Windows
                </p>

                <p className="text-xs text-muted-foreground">
                  Current Device
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border rounded-lg p-3">
            <div className="flex items-center gap-3">
              <Smartphone size={18} />

              <div>
                <p className="font-medium">
                  Safari - iPhone
                </p>

                <p className="text-xs text-muted-foreground">
                  Last Active 2 Hours Ago
                </p>
              </div>
            </div>
          </div>

          <Button
            variant="destructive"
            className="w-full"
          >
            Logout All Devices
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}