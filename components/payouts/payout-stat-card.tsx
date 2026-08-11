"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PayoutStatCardProps {
  title: string;
  amount: string;
  subtitle: string;
  icon: LucideIcon;
  iconBg?: string;
  iconColor?: string;
}

export default function PayoutStatCard({
  title,
  amount,
  subtitle,
  icon: Icon,
  iconBg = "bg-violet-100",
  iconColor = "text-violet-600",
}: PayoutStatCardProps) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center gap-4">
          <div
            className={`h-14 w-14 rounded-full flex items-center justify-center ${iconBg}`}
          >
            <Icon className={`h-7 w-7 ${iconColor}`} />
          </div>

          <div className="flex-1">
            <p className="text-sm text-muted-foreground">
              {title}
            </p>

            <h3 className="text-2xl font-bold mt-1">
              {amount}
            </h3>

            <p className="text-xs text-muted-foreground mt-1">
              {subtitle}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}