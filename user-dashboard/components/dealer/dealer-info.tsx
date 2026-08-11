import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function DealerInfo() {
  return (
    <div className="relative bg-white px-10 pb-6">
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-end gap-5">
          {/* Logo */}
          <div className="-mt-12 h-24 w-24 rounded-full border-4 border-white bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            ER
          </div>

          {/* Info */}
          <div className="pb-2">
            <h1 className="text-2xl font-bold text-gray-900">
              Echo Ragam
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Electronics • Bhopal, Madhya Pradesh
            </p>

            <div className="mt-3 flex items-center gap-5 text-sm text-gray-700">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.8</span>
              </div>

              <span>132 Reviews</span>
              <span>132 Items</span>
            </div>
          </div>
        </div>

        {/* Follow Button */}
        <Button
          variant="outline"
          className="border-violet-500 text-violet-600 hover:bg-violet-50 px-8"
        >
          Follow
        </Button>
      </div>
    </div>
  );
}