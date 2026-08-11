"use client";

import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
};

export default function ProductGallery({
  images,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      {/* Main Image */}
      <div className="flex items-center justify-center rounded-2xl border bg-white p-6">
        <img
          src={selectedImage}
          alt="product"
          className="h-[350px] object-contain"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="mt-4 flex gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`rounded-lg border p-1 ${
              selectedImage === image
                ? "border-violet-500"
                : ""
            }`}
          >
            <img
              src={image}
              alt={`Product image ${index + 1}`}
              className="h-16 w-16 rounded-md object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}