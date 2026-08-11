import ProductCard from "@/components/store/product-card";
import StoreSidebar from "@/components/store/store-sidebar";
import StoreHeader from "@/components/store/store-header";
import QrButton from "@/components/store/qr-float-button";

export default function StorePage() {
  const products = [
    {
      id: 1,
      name: "iPhone 15 (128GB)",
      price: 72000,
      rating: 4.6,
      image:
        "https://i.guim.co.uk/img/media/18badfc0b64b09f917fd14bbe47d73fd92feeb27/189_335_5080_3048/master/5080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1562112c7a64da36ae0a5e75075a0d12",
    },
    {
      id: 2,
      name: "OnePlus 12R (256GB)",
      price: 39999,
      rating: 4.5,
      image:
        "https://i.guim.co.uk/img/media/18badfc0b64b09f917fd14bbe47d73fd92feeb27/189_335_5080_3048/master/5080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1562112c7a64da36ae0a5e75075a0d12",
    },
    {
      id: 3,
      name: "Samsung Galaxy S23",
      price: 49999,
      rating: 4.6,
      image: "/apnidigibg.png",
    },
    {
      id: 4,
      name: "Mi Smart TV 43 Inch",
      price: 19999,
      rating: 4.4,
      image: "/apnidigibg.png",
    },
    {
      id: 5,
      name: "Voltas 1.5 Ton AC",
      price: 32490,
      rating: 4.5,
      image: "/apnidigibg.png",
    },
    {
      id: 6,
      name: "Bajaj Mixer Grinder",
      price: 2999,
      rating: 4.3,
      image: "/apnidigibg.png",
    },
    {
      id: 7,
      name: "Philips Air Fryer",
      price: 6499,
      rating: 4.4,
      image: "/apnidigibg.png",
    },
    {
      id: 8,
      name: "boAt Airdopes 141",
      price: 1499,
      rating: 4.3,
      image: "/apnidigibg.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f8fb]">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <StoreSidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <StoreHeader />

          <div className="mt-6">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              All Products ({products.length})
            </h2>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      <QrButton />
    </div>
  );
}