export default function DealerCategories() {
  const categories = [
    "All Products",
    "Television",
    "Refrigerator",
    "Washing Machine",
    "Air Conditioner",
    "Mobile Phones",
    "Accessories",
    "Audio",
  ];

  return (
    <div className="w-[180px] rounded-2xl border bg-white p-4">
      <h3 className="mb-4 font-semibold">Categories</h3>

      <div className="space-y-2">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`w-full rounded-lg px-3 py-2 text-left text-sm
            ${
              index === 0
                ? "bg-violet-50 text-violet-600"
                : "hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}