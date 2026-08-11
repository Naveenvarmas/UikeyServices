"use client"
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

export default function ProductCard({
  id,
  name,
  price,
  rating,
  image,
}: ProductCardProps) {
  return (
    <Link href={`/user-dashboard/product/${id}`}>
      <div className="bg-white border border-gray-200 rounded-xl p-3 hover:shadow-md transition-all cursor-pointer">
        <div className="h-40 flex items-center justify-center overflow-hidden rounded-lg bg-white">
          <img
            src={image}
            alt={name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <h3 className="mt-3 text-[13px] font-medium text-gray-900 line-clamp-2 min-h-[36px]">
          {name}
        </h3>

        <p className="mt-2 text-base font-bold text-gray-900">
          ₹{price.toLocaleString()}
        </p>

        <div className="flex items-center gap-1 mt-1">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          <span className="text-xs text-gray-500">
            {rating} (4)
          </span>
        </div>

        <Button
  variant="outline"
  className="w-full mt-3 border-purple-500 text-purple-600 hover:bg-purple-50"
>
  Add to Cart
</Button>
      </div>
    </Link>
  );
}