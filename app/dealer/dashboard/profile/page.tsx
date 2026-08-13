"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Users,
  FileText,
  Pencil,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Temporary mock data.
// Later this will come from the GET API.
const dealerProfile = {
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

export default function DealerProfilePage() {
  const router = useRouter();

  return (
    <div className="space-y-6 p-4">

      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push("/dealer/dashboard")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div>
          <h1 className="text-3xl font-bold">
            Dealer Profile
          </h1>

          <p className="text-sm text-muted-foreground">
            View your dealer information.
          </p>
        </div>
      </div>

      {/* Profile Card */}
      <Card className="overflow-hidden">

        {/* Cover Image */}
        <div className="h-52 bg-muted">
          {dealerProfile.coverImage ? (
            <img
              src={dealerProfile.coverImage}
              alt="Dealer cover"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              Cover Image
            </div>
          )}
        </div>

        {/* Dealer Basic Information */}
        <div className="px-6 pb-6">

          <div className="-mt-12 flex flex-col gap-4 sm:flex-row sm:items-end">

            {/* Logo */}
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-white bg-muted shadow">
              {dealerProfile.logo ? (
                <img
                  src={dealerProfile.logo}
                  alt="Dealer logo"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-3xl font-bold">
                  D
                </div>
              )}
            </div>

            {/* Owner + Followers */}
            <div className="flex-1 pb-1">
              <h2 className="text-2xl font-bold">
                {dealerProfile.ownerName}
              </h2>

              <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                {dealerProfile.followers} Followers
              </div>
            </div>

            {/* Update Button */}
            <Button
              onClick={() =>
                router.push(
                  "/dealer/dashboard/profile/edit"
                )
              }
            >
              <Pencil className="mr-2 h-4 w-4" />
              Update Profile
            </Button>

          </div>
        </div>
      </Card>

      {/* Dealer Information */}
      <Card>
        <CardHeader>
          <CardTitle>
            Dealer Information
          </CardTitle>
        </CardHeader>

        <CardContent>

          <div className="grid gap-6 md:grid-cols-2">

            {/* Email */}
            <div className="flex gap-3">
              <Mail className="mt-1 h-5 w-5 text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Email
                </p>

                <p className="font-medium">
                  {dealerProfile.email}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Phone
                </p>

                <p className="font-medium">
                  {dealerProfile.phone}
                </p>
              </div>
            </div>

            {/* Owner */}
            <div>
              <p className="text-sm text-muted-foreground">
                Owner Name
              </p>

              <p className="font-medium">
                {dealerProfile.ownerName}
              </p>
            </div>

            {/* GST */}
            <div>
              <p className="text-sm text-muted-foreground">
                GST
              </p>

              <p className="font-medium">
                {dealerProfile.gst}
              </p>
            </div>

            {/* Address */}
            <div className="flex gap-3 md:col-span-2">
              <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Address
                </p>

                <p className="font-medium">
                  {dealerProfile.address}
                </p>
              </div>
            </div>

            {/* City */}
            <div>
              <p className="text-sm text-muted-foreground">
                City
              </p>

              <p className="font-medium">
                {dealerProfile.city}
              </p>
            </div>

            {/* State */}
            <div>
              <p className="text-sm text-muted-foreground">
                State
              </p>

              <p className="font-medium">
                {dealerProfile.state}
              </p>
            </div>

            {/* Country */}
            <div>
              <p className="text-sm text-muted-foreground">
                Country
              </p>

              <p className="font-medium">
                {dealerProfile.country}
              </p>
            </div>

            {/* Followers */}
            <div>
              <p className="text-sm text-muted-foreground">
                Followers
              </p>

              <p className="font-medium">
                {dealerProfile.followers}
              </p>
            </div>

          </div>

          {/* Description */}
          <div className="mt-6 border-t pt-6">

            <div className="flex gap-3">
              <FileText className="mt-1 h-5 w-5 text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Description
                </p>

                <p className="mt-1 leading-6">
                  {dealerProfile.description}
                </p>
              </div>
            </div>

          </div>

        </CardContent>
      </Card>

    </div>
  );
}