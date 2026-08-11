import { Star, MessageSquare, Package } from "lucide-react";

export default function DealerStats() {
  return (
    <div className="mt-4 flex flex-wrap gap-6">
      <div className="flex items-center gap-2">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-medium">4.8 Rating</span>
      </div>

      <div className="flex items-center gap-2">
        <MessageSquare className="h-4 w-4 text-gray-500" />
        <span className="text-sm">132 Reviews</span>
      </div>

      <div className="flex items-center gap-2">
        <Package className="h-4 w-4 text-gray-500" />
        <span className="text-sm">132 Products</span>
      </div>
    </div>
  );
}