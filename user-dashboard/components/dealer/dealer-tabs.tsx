export default function DealerTabs() {
  const tabs = [
    "All",
    "Popular",
    "Low To High",
    "High To Low",
    "Newest",
  ];

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`rounded-lg px-4 py-2 text-sm transition
          ${
            index === 0
              ? "bg-violet-600 text-white"
              : "bg-white border text-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}