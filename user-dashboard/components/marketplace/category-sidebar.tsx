export default function CategorySidebar() {
  return (
    <div className="space-y-6">

      <h3 className="font-semibold text-gray-700">
        Categories
      </h3>

      <div className="space-y-3 text-sm">

        <div className="bg-purple-50 text-purple-600 font-medium px-3 py-2 rounded-lg">
          All Products
        </div>

        <p className="cursor-pointer hover:text-purple-600">
          Television
        </p>

        <p className="cursor-pointer hover:text-purple-600">
          Refrigerator
        </p>

        <p className="cursor-pointer hover:text-purple-600">
          Washing Machine
        </p>

        <p className="cursor-pointer hover:text-purple-600">
          Air Conditioner
        </p>

        <p className="cursor-pointer hover:text-purple-600">
          Mobile Phones
        </p>

        <p className="cursor-pointer hover:text-purple-600">
          Accessories
        </p>

        <p className="cursor-pointer hover:text-purple-600">
          Audio
        </p>

        <p className="cursor-pointer hover:text-purple-600">
          More
        </p>

      </div>

    </div>
  );
}