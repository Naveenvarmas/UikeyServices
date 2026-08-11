import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DealerProductCardProps {
  name: string;
  price: number;
  rating: number;
  image: string;
}

export default function DealerProductCard({
  name,
  price,
  rating,
  image,
}: DealerProductCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-4 hover:shadow-md transition">
      <div className="h-40 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <h3 className="mt-3 text-sm font-medium line-clamp-2">
        {name}
      </h3>

      <p className="mt-2 text-lg font-bold">
        ₹{price.toLocaleString()}
      </p>

      <div className="mt-1 flex items-center gap-1">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm">{rating}</span>
      </div>

      <Button className="mt-4 w-full">
        Add To Cart
      </Button>
    </div>
  );
}