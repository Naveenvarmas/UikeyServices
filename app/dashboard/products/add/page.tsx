import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function AddProductPage() {
  return (
    <div className="space-y-4 p-4">
      <div>
        <h1 className="text-3xl font-bold">
          Add New Product
        </h1>

        <p className="text-muted-foreground text-sm">
          Create and manage your products.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Left */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>
                Product Information
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">
                    Product Name
                  </label>

                  <Input placeholder="Enter product name" />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Brand
                  </label>

                  <Input placeholder="Enter brand" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">
                    Category
                  </label>

                  <Input placeholder="Category" />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Offer Price
                  </label>

                  <Input placeholder="Offer price" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">
                    Price
                  </label>

                  <Input placeholder="Price" />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Stock Quantity
                  </label>

                  <Input placeholder="Stock quantity" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">
                  SKU
                </label>

                <Input placeholder="Enter SKU" />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Short Description
                </label>

                <Textarea />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Full Description
                </label>

                <Textarea className="min-h-[150px]" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                Product Images
              </CardTitle>
            </CardHeader>

           <CardContent>
  <div className="border-2 border-dashed rounded-lg p-6 text-center">

    <input
      type="file"
      multiple
      className="hidden"
      id="product-images"
    />

    <div className="flex justify-center mb-4">
      <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
        <Upload className="h-7 w-7 text-purple-600" />
      </div>
    </div>

    <p className="text-sm text-muted-foreground mb-4">
      Drag & drop images here or
    </p>

    <label htmlFor="product-images">
      <Button
        size="sm"
        type="button"
        asChild
      >
        <span>Upload Images</span>
      </Button>
    </label>

  </div>
</CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                Category & Tags
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <Input placeholder="Tags" />

              <div>
                <label className="text-sm font-medium">
                  Product Status
                </label>

                <div className="flex gap-4 mt-2">
                  <label>
                    <input
                      type="radio"
                      name="status"
                      defaultChecked
                    />
                    <span className="ml-2">Active</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="status"
                    />
                    <span className="ml-2">Inactive</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>

                <Button className="flex-1">
                  Save Product
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}