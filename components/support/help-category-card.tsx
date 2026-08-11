"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface HelpCategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function HelpCategoryCard({
  icon: Icon,
  title,
  description,
}: HelpCategoryCardProps) {
  return (
    <Card className="h-full cursor-pointer transition-all hover:shadow-md hover:border-violet-300">
      <CardContent className="flex h-[135px] flex-col items-center justify-center text-center px-3 py-4">
        
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-950">
          <Icon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
        </div>

        <h3 className="text-sm font-semibold leading-tight">
          {title}
        </h3>

        <p className="mt-1 text-[11px] leading-4 text-muted-foreground">
          {description}
        </p>

      </CardContent>
    </Card>
  );
}