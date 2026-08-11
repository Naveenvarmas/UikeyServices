import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  "Home",
  "All Products",
  "Categories",
  "Offers",
  "About Us",
  "Contact Us",
];

export default function StoreSidebar() {
  return (
    <aside className="w-[260px] min-h-screen border-r bg-white px-5 py-6">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
          ER
        </div>

        <h2 className="mt-4 text-xl font-bold text-gray-900">
          Echo Ragam
        </h2>

        <p className="text-sm text-gray-500">
          Electronics
        </p>

        <p className="text-sm text-gray-500 mt-1">
          Bhopal, MP
        </p>

        <div className="flex items-center gap-1 mt-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">4.4</span>
          <span className="text-xs text-gray-400">(129)</span>
        </div>

        <Button
  className="mt-4 bg-violet-600 hover:bg-violet-700 px-10 py-5 text-sm rounded-lg"
>
  Follow
</Button>
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-semibold text-gray-800 mb-4">
          Store Menu
        </h3>

        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={item}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors
                ${
                  index === 1
                    ? "bg-violet-50 text-violet-600 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}