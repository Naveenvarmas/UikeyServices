"use client";

import { Card } from "@/components/ui/card";
import NotificationItem from "./notification-item";

type Notification = {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
  icon: string;
  color: string;
};

interface NotificationSectionProps {
  group: {
    date: string;
    notifications: Notification[];
  };
}

export default function NotificationSection({
  group,
}: NotificationSectionProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-muted-foreground">
        {group.date}
      </h3>

      <Card className="overflow-hidden">
        {group.notifications.map((item) => (
          <NotificationItem
            key={item.id}
            notification={item}
          />
        ))}
      </Card>
    </div>
  );
}