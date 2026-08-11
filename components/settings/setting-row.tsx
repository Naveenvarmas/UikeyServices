interface SettingRowProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export default function SettingRow({
  title,
  description,
  action,
}: SettingRowProps) {
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

      {action}
    </div>
  );
}