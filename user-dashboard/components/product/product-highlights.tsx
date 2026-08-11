type ProductHighlightsProps = {
  highlights: string[];
};

export default function ProductHighlights({
  highlights,
}: ProductHighlightsProps) {
  return (
    <div className="mt-8">
      <h3 className="mb-3 font-semibold">
        Highlights
      </h3>

      <ul className="space-y-2 text-gray-600">
        {highlights.map((item) => (
          <li key={item}>
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}