import { Input } from "@/components/ui/input";

export default function StoreHeader() {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      <Input
        placeholder="Search products..."
        className="max-w-lg"
      />

      <select className="border rounded-md px-3 py-2 text-sm">
        <option>Popular</option>
        <option>Latest</option>
        <option>Price Low to High</option>
        <option>Price High to Low</option>
      </select>
    </div>
  );
}