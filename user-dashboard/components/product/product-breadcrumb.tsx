import { ChevronRight } from "lucide-react";

export default function ProductBreadcrumb() {
  const items = [
    "Home",
    "Echo Ragam",
    "Mobile Phones",
    "iPhone 15",
  ];

  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">
      {items.map((item, index) => (
        <div key={item} className="flex items-center gap-2">
          <span>{item}</span>

          {index !== items.length - 1 && (
            <ChevronRight className="h-4 w-4" />
          )}
        </div>
      ))}
    </div>
  );
}