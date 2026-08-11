"use client";

import { useRouter } from "next/navigation";
import { Heart, MapPin, Star } from "lucide-react";

export default function BusinessGrid() {
  const router = useRouter();

  const stores = [
    {
      id: 1,
      name: "Echo Ragam",
      initials: "ER",
      category: "Electronics",
      location: "Bhopal, Madhya Pradesh",
      rating: 4.8,
      ratingCount: 132,
      items: 122,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    },
    {
      id: 2,
      name: "Shree Traders",
      initials: "ST",
      category: "Fashion & Apparel",
      location: "Indore, Madhya Pradesh",
      rating: 4.6,
      ratingCount: 98,
      items: 98,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    },
    {
      id: 3,
      name: "Maa Sharde Store",
      initials: "MS",
      category: "Grocery & Daily Needs",
      location: "Jamshedpur, Jharkhand",
      rating: 4.7,
      ratingCount: 76,
      items: 76,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
    },
    {
      id: 4,
      name: "Gupta Enterprises",
      initials: "GE",
      category: "Home Appliances",
      location: "Dhanbad, Jharkhand",
      rating: 4.5,
      ratingCount: 110,
      items: 110,
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    },
  ];

  return (
    <section className="mt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Explore Businesses</h2>
        <button className="text-purple-600 font-medium text-sm hover:underline">
          View All →
        </button>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stores.map((store) => (
          <div
            key={store.id}
            onClick={() => router.push("/user-dashboard/store")}
            className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition cursor-pointer"
          >
            {/* Image with overlays */}
            <div className="relative h-44 w-full">
              <img
                src={store.image}
                alt={store.name}
                className="h-full w-full object-cover"
              />

              {/* Profile Avatar — bottom-left overlap */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  router.push("/user-dashboard/profile");
                }}
                className="absolute -bottom-5 left-4 z-10 w-11 h-11 rounded-full bg-purple-700 text-white text-sm font-bold flex items-center justify-center border-2 border-white cursor-pointer hover:bg-purple-800 transition"
              >
                {store.initials}
              </div>

              {/* Heart Icon — top-right */}
              <button
                onClick={(e) => e.stopPropagation()}
                className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow hover:scale-110 transition"
              >
                <Heart className="h-4 w-4 text-red-400" />
              </button>
            </div>

            {/* Card Body */}
            <div className="p-4 pt-8">
              <h3 className="font-bold text-base text-gray-900">{store.name}</h3>
              <p className="text-sm text-gray-500">{store.category}</p>

              {/* Rating + Items */}
              <div className="flex items-center gap-1 mt-1 text-xs text-gray-600">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{store.rating}</span>
                <span className="text-gray-400">({store.ratingCount})</span>
                <span className="text-gray-300 mx-1">•</span>
                <span>{store.items} Items</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1 mt-1.5 text-xs text-gray-400">
                <MapPin className="h-3.5 w-3.5" />
                <span>{store.location}</span>
              </div>

              {/* View Store Button */}
              <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm font-medium transition">
                View Store →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}