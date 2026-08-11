import { Button } from "@/components/ui/button";

export default function ProductActions() {
  return (
    <div className="mt-10 flex gap-4">
      <Button
        variant="outline"
        className="flex-1 border-violet-500 text-violet-600"
      >
        Add To Cart
      </Button>

      <Button className="flex-1 bg-violet-600 hover:bg-violet-700">
        Buy Now
      </Button>
    </div>
  );
}