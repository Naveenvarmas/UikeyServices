"use client";

import {
  Download,
  FileImage,
  FileCode,
  Printer,
  Share2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import QRCode from "qrcode";

interface QRActionsProps {
  qrImage?: string;
  businessUrl?: string;
  businessName?: string;
}

export default function QRActions({
  qrImage,
  businessUrl = "https://apnidigi.com/business/your-business",
  businessName = "Your Business",
}: QRActionsProps) {

  // ============================================
  // DOWNLOAD QR
  // ============================================

  const handleDownload = async () => {
    try {
     

      const qrDataUrl = await QRCode.toDataURL(
        businessUrl,
        {
          width: 600,
          margin: 2,

          errorCorrectionLevel: "H",

          color: {
            dark: "#000000",
            light: "#ffffff",
          },
        }
      );


      // ============================================
      // CREATE CANVAS
      // ============================================

      const canvas =
        document.createElement("canvas");

      canvas.width = 800;
      canvas.height = 1200;


      const ctx =
        canvas.getContext("2d");

      if (!ctx) {
        throw new Error(
          "Could not create canvas context"
        );
      }


      // ============================================
      // WHITE PAGE BACKGROUND
      // ============================================

      ctx.fillStyle = "#ffffff";

      ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
      );


      // ============================================
      // BLUE QR CARD
      // ============================================

      ctx.fillStyle = "#2f55e7";

      ctx.beginPath();

      ctx.roundRect(
        40,
        40,
        720,
        1120,
        45,
      );

      ctx.fill();


      // ============================================
      // APNI DIGI
      // ============================================

      ctx.textAlign = "center";

      ctx.fillStyle = "#ffffff";

      ctx.font =
        "bold 38px Arial";

      ctx.fillText(
        "Apni Digi",
        400,
        125
      );


      // ============================================
      // BUSINESS NAME
      // ============================================

      ctx.font =
        "bold 42px Arial";

      ctx.fillText(
        businessName,
        400,
        225
      );


      // ============================================
      // WHITE QR CONTAINER
      // ============================================

      ctx.fillStyle = "#ffffff";

      ctx.beginPath();

      ctx.roundRect(
        110,
        320,
        580,
        580,
        35,
        
      );

      ctx.fill();


      // ============================================
      // LOAD GENERATED QR
      // ============================================

      const qrImageElement =
        new Image();

      qrImageElement.onload = () => {

        const qrSize = 500;

        const qrX =
          (canvas.width - qrSize) / 2;

        const qrY = 360;


        ctx.drawImage(
          qrImageElement,
          qrX,
          qrY,
          qrSize,
          qrSize
        );


        // ========================================
        // SCAN TEXT
        // ========================================

        ctx.textAlign = "center";

        ctx.fillStyle = "#ffffff";

        ctx.font =
          "bold 30px Arial";

        ctx.fillText(
          "Scan to see",
          400,
          980
        );

        ctx.fillText(
          "Business Profile",
          400,
          1020
        );


        // ========================================
        // BOTTOM WHITE CONTAINER
        // ========================================

        ctx.fillStyle = "#ffffff";

        ctx.beginPath();

        ctx.roundRect(
          110,
          1060,
          580,
          100,
          20,
        
        );

        ctx.fill();


        // ========================================
        // POWERED TEXT
        // ========================================

        ctx.fillStyle = "#9ca3af";

        ctx.font =
          "18px Arial";

        ctx.fillText(
          "Powered & Operated by",
          400,
          1090
        );


        // ========================================
        // APNI DIGI BRAND
        // ========================================

        ctx.fillStyle = "#7c3aed";

        ctx.font =
          "bold 25px Arial";

        ctx.fillText(
          "Apni Digi",
          400,
          1125
        );


        // ========================================
        // DOWNLOAD IMAGE
        // ========================================

        const link =
          document.createElement("a");

        link.download =
          "apni-digi-qr.png";

        link.href =
          canvas.toDataURL(
            "image/png"
          );

        link.click();
      };


      qrImageElement.onerror = () => {
        throw new Error(
          "Failed to generate QR image"
        );
      };


      // Set generated QR
      qrImageElement.src =
        qrDataUrl;

    } catch (error) {

      console.error(
        "QR download failed:",
        error
      );

      alert(
        "Unable to download QR code. Please try again."
      );
    }
  };

  // UI

  return (
    <div className="flex flex-wrap gap-2">

      <Button
        onClick={handleDownload}
      >
        <Download className="mr-2 h-4 w-4" />

        Download
      </Button>


      <Button
        variant="outline"
      >
        <FileImage className="mr-2 h-4 w-4" />

        PNG
      </Button>


      <Button
        variant="outline"
      >
        <FileCode className="mr-2 h-4 w-4" />

        SVG
      </Button>

      <Button
        variant="outline"
      >
        <Printer className="mr-2 h-4 w-4" />

        Print
      </Button>

      <Button
        variant="outline"
      >
        <Share2 className="mr-2 h-4 w-4" />

        Share
      </Button>

    </div>
  );
}