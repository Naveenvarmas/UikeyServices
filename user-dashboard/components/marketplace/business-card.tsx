import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BusinessCardProps {
  name: string;
  category: string;
  location: string;
  image: string;
  rating: number;
}

export default function BusinessCard({
  name,
  category,
  location,
  image,
  rating,
}: BusinessCardProps) {
  return (
    <div className="bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition">

      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-3">

        <div>
          <h3 className="font-semibold text-lg">
            {name}
          </h3>

          <p className="text-sm text-muted-foreground">
            {category}
          </p>
        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-1 text-sm">
            <MapPin size={14} />
            {location}
          </div>

          <div className="flex items-center gap-1 text-sm">
            <Star
              size={14}
              className="fill-yellow-400 text-yellow-400"
            />
            {rating}
          </div>

        </div>

        <Button className="w-full">
          View Store
        </Button>

      </div>
    </div>
  );
}