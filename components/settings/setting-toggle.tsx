"use client";

import { Switch } from "@/components/ui/switch";

interface SettingToggleProps {
  title: string;
  description?: string;
  defaultChecked?: boolean;
}

export default function SettingToggle({
  title,
  description,
  defaultChecked = false,
}: SettingToggleProps) {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <h4 className="text-sm font-medium">
          {title}
        </h4>

        {description && (
          <p className="text-xs text-muted-foreground mt-1">
            {description}
          </p>
        )}
      </div>

      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}