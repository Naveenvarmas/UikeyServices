"use client";

import {
  ShoppingCart,
  CreditCard,
  Users,
  Bell,
} from "lucide-react";

type Notification = {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
  icon: string;
  color: string;
};

interface NotificationItemProps {
  notification: Notification;
}

const icons: Record<string, React.ElementType> = {
  "shopping-cart": ShoppingCart,
  "credit-card": CreditCard,
  users: Users,
  bell: Bell,
};

export default function NotificationItem({
  notification,
}: NotificationItemProps) {
  const Icon = icons[notification.icon];

  return (
    <div className="flex items-center justify-between p-5 border-b last:border-b-0 hover:bg-muted/40 transition">
      <div className="flex gap-4">
        <div
          className={`h-12 w-12 rounded-xl flex items-center justify-center ${notification.color}`}
        >
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <h4 className="font-semibold">
            {notification.title}
          </h4>

          <p className="text-sm text-muted-foreground">
            {notification.description}
          </p>
        </div>
      </div>

      <span className="text-sm text-muted-foreground">
        {notification.time}
      </span>
    </div>
  );
}