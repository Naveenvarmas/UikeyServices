import { Search } from "lucide-react";

export default function DealerSearch() {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search in Echo Ragam..."
        className="h-12 w-full rounded-xl border bg-white pl-11 pr-4 outline-none"
      />
    </div>
  );
}