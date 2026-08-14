"use client";

import { useState } from "react";
import {
  Plus,
  Lightbulb,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import QRActions from "@/app/dealer/dashboard/qr/qr-actions";

export default function QRCodePage() {
  const [qrData] = useState({
    businessName: "Your Business",

    qrId:
      "51f8f5ba-3562-455d-81db-3c0e3e73029f",

    createdAt:
      "12 Aug 2026, 03:39 pm",

    status: "Active",

    businessUrl:
      "https://apnidigi.com/business/your-business",

    qrImage:
      "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://apnidigi.com/business/your-business",
  });

  return (
    <div className="space-y-6 p-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            QR Code
          </h1>

          <p className="text-sm text-muted-foreground">
            Generate, download and manage your business QR code.
          </p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Generate New QR
        </Button>
      </div>


      {/* Main Section */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* QR Information */}
        <Card className="lg:col-span-2">

          <CardHeader>
            <CardTitle>
              Your Business QR Code
            </CardTitle>
          </CardHeader>

          <CardContent>

            <div className="grid gap-6 md:grid-cols-[260px_1fr]">

              {/* QR Card */}
              <div className="flex justify-center">

                <div className="w-[230px] rounded-2xl bg-blue-700 p-5 text-center text-white">

                  <p className="font-semibold">
                    Apni Digi
                  </p>

                  <p className="mt-5 text-lg font-semibold">
                    {qrData.businessName}
                  </p>

                  <div className="my-4 rounded-xl bg-white p-4">

                    <img
                      src={qrData.qrImage}
                      alt="Business QR Code"
                      className="h-full w-full"
                    />

                  </div>

                  <p className="text-sm font-medium">
                    Scan to see
                  </p>

                  <p className="text-sm font-medium">
                    Business Profile
                  </p>

                  <div className="mt-5 rounded-xl bg-white px-3 py-3">

                    <p className="text-xs text-gray-400">
                      Powered & Operated by
                    </p>

                    <p className="font-semibold text-violet-600">
                      Apni Digi
                    </p>

                  </div>

                </div>

              </div>


              {/* QR Information */}
              <div className="space-y-5">

                {/* Business Name + Status */}
                <div>
                  <div className="flex items-center gap-3">

                    <h2 className="text-2xl font-semibold">
                      {qrData.businessName}
                    </h2>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      {qrData.status}
                    </span>

                  </div>
                </div>


                {/* QR ID */}
                <div>
                  <p className="text-sm text-muted-foreground">
                    QR ID
                  </p>

                  <p className="break-all font-medium">
                    {qrData.qrId}
                  </p>
                </div>


                {/* Created */}
                <div>
                  <p className="text-sm text-muted-foreground">
                    Created
                  </p>

                  <p className="font-medium">
                    {qrData.createdAt}
                  </p>
                </div>


                {/* Link */}
                <div>
                  <p className="text-sm text-muted-foreground">
                    Link
                  </p>

                  <p className="break-all font-medium">
                    {qrData.businessUrl}
                  </p>
                </div>


                {/* Actions */}
                <div className="pt-2">

                  <QRActions
                    qrImage={qrData.qrImage}
                    businessUrl={qrData.businessUrl}
                  />

                </div>

              </div>

            </div>

          </CardContent>

        </Card>


        {/* QR Preview */}
        <Card>

          <CardHeader>

            <CardTitle>
              QR Code Preview
            </CardTitle>

            <p className="text-sm text-muted-foreground">
              See how your QR code looks.
            </p>

          </CardHeader>


          <CardContent>

            <div className="rounded-2xl bg-blue-700 p-6">

              <div className="rounded-xl bg-white p-5">

                <img
                  src={qrData.qrImage}
                  alt="QR Code Preview"
                  className="mx-auto w-full max-w-[220px]"
                />

              </div>

              <div className="mt-5 text-center text-white">

                <p className="font-semibold">
                  Scan Me
                </p>

                <p className="text-sm">
                  Scan to visit our business
                </p>

              </div>

            </div>

          </CardContent>

        </Card>

      </div>


      {/* Instructions */}
      <Card>

        <CardContent className="flex gap-4 p-6">

          <Lightbulb className="mt-1 h-6 w-6 text-yellow-500" />

          <div>

            <h3 className="font-semibold">
              How to use your QR Code?
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              Print this QR code on your shop board, visiting
              cards, product packaging, invoices and marketing
              materials.
            </p>

          </div>

        </CardContent>

      </Card>

    </div>
  );
}