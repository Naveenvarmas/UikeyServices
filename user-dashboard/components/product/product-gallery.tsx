"use client";

import { useState } from "react";

export default function ProductGallery() {
  const images = [
    "https://media.wired.com/photos/68cb83e86a7338e553645554/1:1/w_3867,h_3867,c_limit/iPhone%2017%20Sage%20SOURCE%20Julian%20Chokkattu.jpg",
    "https://media.wired.com/photos/68cb83e86a7338e553645554/1:1/w_3867,h_3867,c_limit/iPhone%2017%20Sage%20SOURCE%20Julian%20Chokkattu.jpg",
    "https://media.wired.com/photos/68cb83e86a7338e553645554/1:1/w_3867,h_3867,c_limit/iPhone%2017%20Sage%20SOURCE%20Julian%20Chokkattu.jpg",
    "https://media.wired.com/photos/68cb83e86a7338e553645554/1:1/w_3867,h_3867,c_limit/iPhone%2017%20Sage%20SOURCE%20Julian%20Chokkattu.jpg",
    "https://media.wired.com/photos/68cb83e86a7338e553645554/1:1/w_3867,h_3867,c_limit/iPhone%2017%20Sage%20SOURCE%20Julian%20Chokkattu.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <div className="flex items-center justify-center rounded-2xl border bg-white p-6">
        <img
          src={selectedImage}
          alt="product"
          className="h-[350px] object-contain"
        />
      </div>

      <div className="mt-4 flex gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`rounded-lg border p-1 ${
              selectedImage === image
                ? "border-violet-500"
                : ""
            }`}
          >
            <img
              src={image}
              alt=""
              className="h-16 w-16 object-cover rounded-md"
            />
          </button>
        ))}
      </div>
    </div>
  );
}