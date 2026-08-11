"use client";

import { useState } from "react";
import { Upload, X, Pencil, Save } from "lucide-react";

type DealerImage = {
  id: number;
  url: string;
  name: string;
};

const initialImages: DealerImage[] = [
  {
    id: 1,
    url: "/globe.svg",
    name: "Dealer Image 1",
  },
  {
    id: 2,
    url: "/globe.svg",
    name: "Dealer Image 2",
  },
  {
    id: 3,
    url: "/globe.svg",
    name: "Dealer Image 3",
  },
];

export default function DealerImagesPage() {
  // Existing images
  const [existingImages, setExistingImages] =
    useState<DealerImage[]>(initialImages);

  // Newly selected images
  const [selectedImages, setSelectedImages] =
    useState<File[]>([]);

  // Edit mode
  const [editMode, setEditMode] = useState(false);

  // Select new images
  const handleImageSelect = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return;

    const newImages = Array.from(e.target.files);

    setSelectedImages((prev) => [
      ...prev,
      ...newImages,
    ]);

    // Allow selecting the same file again later
    e.target.value = "";
  };

  // Remove newly selected image
  const removeSelectedImage = (index: number) => {
    setSelectedImages((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  // Remove existing image
  const removeExistingImage = (id: number) => {
    setExistingImages((prev) =>
      prev.filter((image) => image.id !== id)
    );
  };

  // Save changes
  const handleSave = () => {
    console.log("Existing images:", existingImages);
    console.log("New images:", selectedImages);

    alert("Images updated successfully!");

    setSelectedImages([]);
    setEditMode(false);
  };

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Dealer Images
          </h1>

          <p className="text-sm text-muted-foreground">
            Add, view and manage your dealer images.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setEditMode(!editMode)}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          <Pencil className="h-4 w-4" />

          {editMode ? "Cancel Edit" : "Edit Images"}
        </button>
      </div>

      {/* ================= EXISTING IMAGES ================= */}
      <div className="rounded-xl border bg-background p-6">

        <div className="mb-5">
          <h2 className="text-lg font-semibold">
            Existing Dealer Images
          </h2>

          <p className="text-sm text-muted-foreground">
            View and manage your current dealer images.
          </p>
        </div>

        {existingImages.length === 0 ? (
          <div className="rounded-lg border border-dashed py-12 text-center">
            <p className="text-sm text-muted-foreground">
              No dealer images available.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {existingImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg border bg-muted/20"
              >
                <img
                  src={image.url}
                  alt={image.name}
                  className="h-40 w-full object-cover"
                />

                {/* Delete existing image */}
                {editMode && (
                  <button
                    type="button"
                    onClick={() =>
                      removeExistingImage(image.id)
                    }
                    className="absolute right-2 top-2 rounded-full bg-black/70 p-1.5 text-white transition hover:bg-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}

                <div className="truncate px-3 py-2 text-sm">
                  {image.name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= ADD IMAGES ================= */}
      {editMode && (
        <div className="rounded-xl border bg-background p-6">

          <div className="mb-5">
            <h2 className="text-lg font-semibold">
              Add Dealer Images
            </h2>

            <p className="text-sm text-muted-foreground">
              Select one or multiple images from your device.
            </p>
          </div>

          {/* Upload Area */}
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-10">

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
              <Upload className="h-7 w-7 text-purple-600" />
            </div>

            <h3 className="font-semibold">
              Upload Images
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              You can select one or multiple images
            </p>

            <label
              htmlFor="dealer-images"
              className="mt-5 cursor-pointer rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Choose Images
            </label>

            <input
              id="dealer-images"
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleImageSelect}
            />
          </div>

          {/* ================= SELECTED IMAGES ================= */}
          {selectedImages.length > 0 && (
            <div className="mt-6">

              <div className="mb-4">
                <h3 className="font-semibold">
                  New Images
                </h3>

                <p className="text-sm text-muted-foreground">
                  {selectedImages.length} image
                  {selectedImages.length > 1
                    ? "s"
                    : ""}{" "}
                  selected
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {selectedImages.map(
                  (image, index) => (
                    <div
                      key={`${image.name}-${index}`}
                      className="relative overflow-hidden rounded-lg border"
                    >

                      <img
                        src={URL.createObjectURL(image)}
                        alt={image.name}
                        className="h-40 w-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          removeSelectedImage(index)
                        }
                        className="absolute right-2 top-2 rounded-full bg-black/70 p-1.5 text-white transition hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>

                      <p className="truncate px-3 py-2 text-xs">
                        {image.name}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* ================= SAVE ================= */}
          <div className="mt-6 flex justify-end gap-3">

            <button
              type="button"
              onClick={() => {
                setSelectedImages([]);
                setEditMode(false);
              }}
              className="rounded-md border px-5 py-2 text-sm font-medium hover:bg-muted"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>

          </div>
        </div>
      )}
    </div>
  );
}