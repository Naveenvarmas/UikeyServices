import DealerProductCard from "./dealer-product-card";

export default function DealerProductsGrid() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 72000,
      rating: 4.8,
      image: "/apnidigibg.png",
    },
    {
      id: 2,
      name: "Samsung S23",
      price: 49999,
      rating: 4.7,
      image: "/apnidigibg.png",
    },
    {
      id: 3,
      name: "OnePlus 12R",
      price: 39999,
      rating: 4.6,
      image: "/apnidigibg.png",
    },
    {
      id: 4,
      name: "Mi TV",
      price: 19999,
      rating: 4.5,
      image: "/apnidigibg.png",
    },
  ];

  return (
    <div className="flex-1">
      <h2 className="mb-5 text-xl font-semibold">
        All Products (132)
      </h2>

     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <DealerProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}