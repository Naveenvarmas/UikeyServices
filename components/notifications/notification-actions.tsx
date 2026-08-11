import { Card } from "@/components/ui/card";
import {
  CheckCheck,
  History,
  BellOff,
} from "lucide-react";

export default function NotificationActions() {
  return (
    <Card className="p-5">
      <h3 className="font-semibold mb-4">
        Quick Actions
      </h3>

      <div className="space-y-4">
        <button className="flex items-center gap-2">
          <CheckCheck size={18} />
          Mark all as read
        </button>

        <button className="flex items-center gap-2">
          <History size={18} />
          View History
        </button>

        <button className="flex items-center gap-2">
          <BellOff size={18} />
          Mute Notifications
        </button>
      </div>
    </Card>
  );
}