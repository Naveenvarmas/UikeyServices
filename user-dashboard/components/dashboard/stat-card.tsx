import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  growth?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  growth,
}: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6 flex justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
          

          {growth && (
            <p className="text-green-600 text-sm mt-2">
              {growth}
            </p>
          )}
        </div>

        <div>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}