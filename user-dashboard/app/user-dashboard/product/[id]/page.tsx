import ProductBreadcrumb from "@/components/product/product-breadcrumb";
import ProductGallery from "@/components/product/product-gallery";
import ProductInfo from "@/components/product/product-info";
import ProductColors from "@/components/product/product-colors";
import ProductHighlights from "@/components/product/product-highlights";
import ProductActions from "@/components/product/product-actions";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = {
    id,
    name: "iPhone 15 (128GB)",
    price: 72000,
    oldPrice: 79900,
    rating: 4.6,
    reviews: 24,
    stock: true,
    discount: "10% OFF",
    colors: [
      "Pink",
      "Black",
      "Green",
      "Yellow",
      "Blue",
    ],
    images: [
      "https://media.wired.com/photos/68cb83e86a7338e553645554/1:1/w_3867,h_3867,c_limit/iPhone%2017%20Sage%20SOURCE%20Julian%20Chokkattu.jpg",
      "https://media.wired.com/photos/68cb83e86a7338e553645554/1:1/w_3867,h_3867,c_limit/iPhone%2017%20Sage%20SOURCE%20Julian%20Chokkattu.jpg",
      "https://media.wired.com/photos/68cb83e86a7338e553645554/1:1/w_3867,h_3867,c_limit/iPhone%2017%20Sage%20SOURCE%20Julian%20Chokkattu.jpg",
      "https://media.wired.com/photos/68cb83e86a7338e553645554/1:1/w_3867,h_3867,c_limit/iPhone%2017%20Sage%20SOURCE%20Julian%20Chokkattu.jpg",
      "https://media.wired.com/photos/68cb83e86a7338e553645554/1:1/w_3867,h_3867,c_limit/iPhone%2017%20Sage%20SOURCE%20Julian%20Chokkattu.jpg",
    ],
    highlights: [
      "6.1-inch Super Retina XDR display",
      "A16 Bionic chip, 6-core CPU",
      "128GB Storage",
      "48MP Main camera",
      "iOS 17",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <ProductBreadcrumb />

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <ProductGallery images={product.images} />

          <div>
            <ProductInfo product={product} />

            <ProductColors
              colors={product.colors}
            />

            <ProductHighlights
              highlights={product.highlights}
            />

            <ProductActions />
          </div>
        </div>
      </div>
    </div>
  );
}