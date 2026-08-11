import { Star } from "lucide-react";

type ProductInfoProps = {
  product: {
    id: string;
    name: string;
    price: number;
    oldPrice: number;
    rating: number;
    reviews: number;
    stock: boolean;
    discount: string;
    colors: string[];
    images: string[];
    highlights: string[];
  };
};

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        {product.name}
      </h1>

      <div className="mt-2 flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{product.rating}</span>
        </div>

        <span className="text-gray-500">
          ({product.reviews} Reviews)
        </span>

        <span
          className={`rounded-md px-3 py-1 text-sm ${
            product.stock
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {product.stock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <span className="text-4xl font-bold">
          ₹{product.price.toLocaleString("en-IN")}
        </span>

        <span className="text-lg text-gray-400 line-through">
          ₹{product.oldPrice.toLocaleString("en-IN")}
        </span>

        <span className="rounded-md bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          {product.discount}
        </span>
      </div>
    </div>
  );
}