export default function StoreProfile() {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-5">

        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-700 text-white flex items-center justify-center text-4xl font-bold border-4 border-white shadow-lg">
          ER
        </div>

        <div>

          <h1 className="text-3xl font-bold">
            Echo Ragam
          </h1>

          <p className="text-gray-500 mt-1">
            Electronics • Bhopal, Madhya Pradesh
          </p>

          <p className="text-sm mt-2">
            ⭐ 4.8 (132 Reviews) • 132 Items
          </p>

        </div>

      </div>

      <button className="border border-purple-500 text-purple-600 px-6 py-2 rounded-xl hover:bg-purple-50">
        Follow
      </button>

    </div>
  );
}