"use client";

import { useState } from "react";
import NotificationTabs from "@/components/notifications/notification-tabs";
import NotificationSection from "@/components/notifications/notification-section";
import NotificationPreferences from "@/components/notifications/notification-preferences";
import NotificationActions from "@/components/notifications/notification-actions";
import { notificationGroups } from "@/data/notifications";
import { Button } from "@/components/ui/button";

export default function NotificationsPage() {
  const [visibleCount, setVisibleCount] = useState(2);

  const visibleNotifications =
    notificationGroups.slice(0, visibleCount);

  const hasMore =
    visibleCount < notificationGroups.length;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Notifications
        </h1>

        <p className="text-muted-foreground">
          Stay updated with all activities.
        </p>
      </div>

      <NotificationTabs />

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3 space-y-6">
          {visibleNotifications.map((group) => (
            <NotificationSection
              key={group.date}
              group={group}
            />
          ))}

          {hasMore && (
            <div className="flex justify-center pt-4">
              <Button
                variant="outline"
                onClick={() =>
                  setVisibleCount((prev) => prev + 1)
                }
              >
                Load More Notifications
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <NotificationPreferences />
          <NotificationActions />
        </div>
      </div>
    </div>
  );
}