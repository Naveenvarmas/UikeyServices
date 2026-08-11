import { ShoppingCart } from "lucide-react";

export default function ProductCard() {
  return (
    <div className="min-w-[220px] bg-white border rounded-xl p-4 shadow-sm">

      <img
        src="https://images.unsplash.com/photo-1593784991095-a205069470b6"
        alt="Product"
        className="w-full h-40 object-contain"
      />

      <h3 className="mt-3 text-sm font-medium">
        Samsung 55" 4K UHD TV
      </h3>

      <p className="mt-2 text-2xl font-bold">
        ₹45,000
      </p>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          ⭐ 4.7 (45)
        </span>

        <ShoppingCart
          size={18}
          className="text-purple-600"
        />
      </div>

    </div>
  );
}