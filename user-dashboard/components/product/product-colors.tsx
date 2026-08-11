type ProductColorsProps = {
  colors: string[];
};

export default function ProductColors({
  colors,
}: ProductColorsProps) {
  return (
    <div className="mt-8">
      <h3 className="mb-3 font-semibold">
        Select Color
      </h3>

      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color}
            className="rounded-lg border px-4 py-2 text-sm hover:border-violet-500"
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}