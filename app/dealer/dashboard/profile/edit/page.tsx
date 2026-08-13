"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Camera } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormErrors = {
  email?: string;
  phone?: string;
  ownerName?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  gst?: string;
  description?: string;
};

const initialProfile = {
  logo: "",
  coverImage: "",
  email: "dealer@example.com",
  phone: "9876543210",
  ownerName: "Rahul Kumar",
  address: "MG Road",
  city: "Hyderabad",
  state: "Telangana",
  country: "India",
  followers: 1250,
  gst: "36ABCDE1234F1Z5",
  description:
    "Dealer of electronics and home appliances.",
};

export default function EditDealerProfilePage() {
  const router = useRouter();

  const [profile, setProfile] = useState(initialProfile);

  const [errors, setErrors] = useState<FormErrors>({});

  const [logoPreview, setLogoPreview] = useState(
    initialProfile.logo
  );

  const [coverPreview, setCoverPreview] = useState(
    initialProfile.coverImage
  );

  // Handle input changes
  const handleChange = (
    field: keyof typeof initialProfile,
    value: string
  ) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field in errors) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  // Handle image selection
  const handleImageSelect = (
    e: ChangeEvent<HTMLInputElement>,
    type: "logo" | "coverImage"
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Optional image validation
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    if (type === "logo") {
      setLogoPreview(imageUrl);
    } else {
      setCoverPreview(imageUrl);
    }

    setProfile((prev) => ({
      ...prev,
      [type]: imageUrl,
    }));
  };

  // Validation
  const validateForm = () => {
    const newErrors: FormErrors = {};

    const email = profile.email.trim();
    const phone = profile.phone.trim();
    const ownerName = profile.ownerName.trim();
    const address = profile.address.trim();
    const city = profile.city.trim();
    const state = profile.state.trim();
    const country = profile.country.trim();
    const gst = profile.gst.trim().toUpperCase();
    const description = profile.description.trim();

    // Email
    if (!email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    // Phone
    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone =
        "Enter a valid 10-digit phone number";
    }

    // Owner name
    if (!ownerName) {
      newErrors.ownerName = "Owner name is required";
    } else if (ownerName.length < 3) {
      newErrors.ownerName =
        "Owner name must be at least 3 characters";
    } else if (!/^[A-Za-z\s]+$/.test(ownerName)) {
      newErrors.ownerName =
        "Owner name can contain only letters and spaces";
    }

    // Address
    if (!address) {
      newErrors.address = "Address is required";
    }

    // City
    if (!city) {
      newErrors.city = "City is required";
    }

    // State
    if (!state) {
      newErrors.state = "State is required";
    }

    // Country
    if (!country) {
      newErrors.country = "Country is required";
    }

    // GST
    if (!gst) {
      newErrors.gst = "GST number is required";
    } else if (
      !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/.test(
        gst
      )
    ) {
      newErrors.gst = "Enter a valid GST number";
    }

    // Description
    if (!description) {
      newErrors.description =
        "Description is required";
    } else if (description.length < 10) {
      newErrors.description =
        "Description must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    const updatedProfile = {
      ...profile,
      email: profile.email.trim(),
      phone: profile.phone.trim(),
      ownerName: profile.ownerName.trim(),
      address: profile.address.trim(),
      city: profile.city.trim(),
      state: profile.state.trim(),
      country: profile.country.trim(),
      gst: profile.gst.trim().toUpperCase(),
      description: profile.description.trim(),
    };

    console.log("Updated dealer profile:", updatedProfile);

    // API will be added here later.
    // Example:
    // await axios.put("/dealer/profile", updatedProfile);

    alert("Dealer profile updated successfully");

    router.push("/dealer/dashboard/profile");
  };

  return (
    <div className="space-y-6 p-4">

      {/* Header */}
      <div className="flex items-center gap-4">

        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            router.push("/dealer/dashboard/profile")
          }
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div>
          <h1 className="text-3xl font-bold">
            Update Dealer Profile
          </h1>

          <p className="text-sm text-muted-foreground">
            Update your dealer information.
          </p>
        </div>

      </div>

      {/* Images */}
      <Card className="overflow-hidden">

        <CardHeader>
          <CardTitle>
            Dealer Images
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">

          {/* Cover */}
          <div>
            <label className="text-sm font-medium">
              Cover Image
            </label>

            <div className="relative mt-2 h-52 overflow-hidden rounded-xl border bg-muted">

              {coverPreview ? (
                <img
                  src={coverPreview}
                  alt="Dealer cover"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  No Cover Image
                </div>
              )}

              <label
                htmlFor="cover-image"
                className="absolute bottom-4 right-4 cursor-pointer"
              >
                <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm shadow">
                  <Camera className="h-4 w-4" />
                  Change Cover
                </div>
              </label>

              <input
                id="cover-image"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  handleImageSelect(e, "coverImage")
                }
              />

            </div>
          </div>

          {/* Logo */}
          <div>
            <label className="text-sm font-medium">
              Logo
            </label>

            <div className="mt-2 flex items-center gap-5">

              <div className="h-24 w-24 overflow-hidden rounded-full border bg-muted">

                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="Dealer logo"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-2xl font-bold">
                    D
                  </div>
                )}

              </div>

              <div>
                <label htmlFor="logo-image">
                  <Button
                    type="button"
                    variant="outline"
                    asChild
                  >
                    <span>
                      <Camera className="mr-2 h-4 w-4" />
                      Change Logo
                    </span>
                  </Button>
                </label>

                <input
                  id="logo-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    handleImageSelect(e, "logo")
                  }
                />

                <p className="mt-2 text-xs text-muted-foreground">
                  JPG, PNG or WEBP. Maximum 5MB.
                </p>
              </div>

            </div>
          </div>

        </CardContent>
      </Card>

      {/* Dealer Information */}
      <Card>

        <CardHeader>
          <CardTitle>
            Dealer Information
          </CardTitle>
        </CardHeader>

        <CardContent>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6"
          >

            {/* Email + Phone */}
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium"
                >
                  Email
                </label>

                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    handleChange(
                      "email",
                      e.target.value
                    )
                  }
                  className={`mt-1 ${
                    errors.email
                      ? "border-red-500"
                      : ""
                  }`}
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium"
                >
                  Phone
                </label>

                <Input
                  id="phone"
                  type="tel"
                  maxLength={10}
                  value={profile.phone}
                  onChange={(e) =>
                    handleChange(
                      "phone",
                      e.target.value
                    )
                  }
                  className={`mt-1 ${
                    errors.phone
                      ? "border-red-500"
                      : ""
                  }`}
                />

                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

            </div>

            {/* Owner + GST */}
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label
                  htmlFor="ownerName"
                  className="text-sm font-medium"
                >
                  Owner Name
                </label>

                <Input
                  id="ownerName"
                  value={profile.ownerName}
                  onChange={(e) =>
                    handleChange(
                      "ownerName",
                      e.target.value
                    )
                  }
                  className={`mt-1 ${
                    errors.ownerName
                      ? "border-red-500"
                      : ""
                  }`}
                />

                {errors.ownerName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.ownerName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="gst"
                  className="text-sm font-medium"
                >
                  GST
                </label>

                <Input
                  id="gst"
                  maxLength={15}
                  value={profile.gst}
                  onChange={(e) =>
                    handleChange(
                      "gst",
                      e.target.value.toUpperCase()
                    )
                  }
                  className={`mt-1 ${
                    errors.gst
                      ? "border-red-500"
                      : ""
                  }`}
                />

                {errors.gst && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.gst}
                  </p>
                )}
              </div>

            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="text-sm font-medium"
              >
                Address
              </label>

              <Input
                id="address"
                value={profile.address}
                onChange={(e) =>
                  handleChange(
                    "address",
                    e.target.value
                  )
                }
                className={`mt-1 ${
                  errors.address
                    ? "border-red-500"
                    : ""
                }`}
              />

              {errors.address && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.address}
                </p>
              )}
            </div>

            {/* City + State */}
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label
                  htmlFor="city"
                  className="text-sm font-medium"
                >
                  City
                </label>

                <Input
                  id="city"
                  value={profile.city}
                  onChange={(e) =>
                    handleChange(
                      "city",
                      e.target.value
                    )
                  }
                  className={`mt-1 ${
                    errors.city
                      ? "border-red-500"
                      : ""
                  }`}
                />

                {errors.city && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.city}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="text-sm font-medium"
                >
                  State
                </label>

                <Input
                  id="state"
                  value={profile.state}
                  onChange={(e) =>
                    handleChange(
                      "state",
                      e.target.value
                    )
                  }
                  className={`mt-1 ${
                    errors.state
                      ? "border-red-500"
                      : ""
                  }`}
                />

                {errors.state && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.state}
                  </p>
                )}
              </div>

            </div>

            {/* Country + Followers */}
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label
                  htmlFor="country"
                  className="text-sm font-medium"
                >
                  Country
                </label>

                <Input
                  id="country"
                  value={profile.country}
                  onChange={(e) =>
                    handleChange(
                      "country",
                      e.target.value
                    )
                  }
                  className={`mt-1 ${
                    errors.country
                      ? "border-red-500"
                      : ""
                  }`}
                />

                {errors.country && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.country}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="followers"
                  className="text-sm font-medium"
                >
                  Followers
                </label>

                <Input
                  id="followers"
                  type="number"
                  value={profile.followers}
                  disabled
                  className="mt-1"
                />
              </div>

            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="text-sm font-medium"
              >
                Description
              </label>

              <Textarea
                id="description"
                value={profile.description}
                onChange={(e) =>
                  handleChange(
                    "description",
                    e.target.value
                  )
                }
                className={`mt-1 min-h-[140px] ${
                  errors.description
                    ? "border-red-500"
                    : ""
                }`}
              />

              {errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4">

              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  router.push("/dealer/dashboard/profile")
                }
              >
                Cancel
              </Button>

              <Button type="submit">
                Update Profile
              </Button>

            </div>

          </form>

        </CardContent>
      </Card>

    </div>
  );
}