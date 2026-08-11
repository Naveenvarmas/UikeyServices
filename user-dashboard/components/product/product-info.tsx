import { Star } from "lucide-react";

export default function ProductInfo() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        iPhone 15 (128GB)
      </h1>

      <div className="mt-2 flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>4.6</span>
        </div>

        <span className="text-gray-500">
          (24 Reviews)
        </span>

        <span className="rounded-md bg-green-100 px-3 py-1 text-sm text-green-700">
          In Stock
        </span>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <span className="text-4xl font-bold">
          ₹72,000
        </span>

        <span className="text-lg text-gray-400 line-through">
          ₹79,900
        </span>

        <span className="rounded-md bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          10% OFF
        </span>
      </div>
    </div>
  );
}