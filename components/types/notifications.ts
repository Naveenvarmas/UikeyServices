import { LucideIcon } from "lucide-react";

export interface NotificationItemType {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
  icon: LucideIcon;
  color: string;
}

export interface NotificationGroup {
  date: string;
  notifications: NotificationItemType[];
}