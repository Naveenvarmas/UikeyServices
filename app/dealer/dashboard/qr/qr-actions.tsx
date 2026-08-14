"use client";

import {
  Download,
  FileImage,
  FileCode,
  Printer,
  Share2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface QRActionsProps {
  qrImage: string;
  businessUrl?: string;
}

export default function QRActions({
  qrImage,
  businessUrl = "https://apnidigi.com/business/your-business",
}: QRActionsProps) {

  // Download QR as PNG
  const downloadPNG = () => {
    const link = document.createElement("a");

    link.href = qrImage;
    link.download = "apni-digi-qr.png";

    link.click();
  };


  // Download QR as SVG
  const downloadSVG = () => {
    const svg = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="400"
        viewBox="0 0 400 400"
      >
        <rect
          width="400"
          height="400"
          fill="white"
        />

        <image
          href="${qrImage}"
          width="400"
          height="400"
        />
      </svg>
    `;

    const blob = new Blob([svg], {
      type: "image/svg+xml",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "apni-digi-qr.svg";

    link.click();

    URL.revokeObjectURL(url);
  };


  // Print QR
  const printQR = () => {
    const printWindow = window.open("", "_blank");

    if (!printWindow) {
      alert("Please allow pop-ups to print the QR code.");
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>

      <html>
        <head>
          <title>Apni Digi QR Code</title>

          <style>
            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              min-height: 100vh;

              display: flex;
              justify-content: center;
              align-items: center;

              font-family: Arial, sans-serif;
              background: white;
            }

            .container {
              text-align: center;
            }

            img {
              width: 400px;
              height: 400px;
              object-fit: contain;
            }

            .powered {
              margin-top: 40px;
              color: #9ca3af;
              font-size: 18px;
            }

            .brand {
              margin-top: 8px;
              color: #4f46e5;
              font-size: 28px;
              font-weight: bold;
            }

            @media print {
              body {
                min-height: auto;
              }
            }
          </style>
        </head>

        <body>

          <div class="container">

            <img
              src="${qrImage}"
              alt="Apni Digi QR Code"
            />

            <div class="powered">
              Powered & Operated by
            </div>

            <div class="brand">
              Apni Digi
            </div>

          </div>

        </body>
      </html>
    `);

    printWindow.document.close();

    printWindow.focus();

    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 300);
  };


  // Share QR / Business URL
  const shareQR = async () => {
    try {

      // Mobile/browser Web Share API
      if (navigator.share) {

        await navigator.share({
          title: "Apni Digi",
          text: "Scan this QR code to view our business profile.",
          url: businessUrl,
        });

        return;
      }


      // Fallback: copy URL
      await navigator.clipboard.writeText(
        businessUrl
      );

      alert("Business link copied!");

    } catch (error) {

      console.error(
        "Share failed:",
        error
      );

    }
  };


  // Download designed QR poster
  const handleDownload = () => {

    const canvas =
      document.createElement("canvas");

    canvas.width = 800;
    canvas.height = 1200;

    const ctx =
      canvas.getContext("2d");

    if (!ctx) return;


    // White background
    ctx.fillStyle = "#ffffff";

    ctx.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );


    const qrImageElement =
      new Image();

    qrImageElement.crossOrigin =
      "anonymous";


    qrImageElement.onload = () => {

      const qrSize = 400;

      const x =
        (canvas.width - qrSize) / 2;

      const y = 300;


      // Draw QR
      ctx.drawImage(
        qrImageElement,
        x,
        y,
        qrSize,
        qrSize
      );


      // Powered text
      ctx.textAlign = "center";

      ctx.fillStyle = "#9ca3af";

      ctx.font =
        "28px Arial";

      ctx.fillText(
        "Powered & Operated by",
        canvas.width / 2,
        850
      );


      // Brand name
      ctx.fillStyle =
        "#4f46e5";

      ctx.font =
        "bold 36px Arial";

      ctx.fillText(
        "Apni Digi",
        canvas.width / 2,
        900
      );


      // Download
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


    qrImageElement.src =
      qrImage;
  };


  return (
    <div className="flex flex-wrap gap-2">

      {/* Download designed QR poster */}
      <Button
        onClick={handleDownload}
      >
        <Download className="mr-2 h-4 w-4" />

        Download
      </Button>


      {/* PNG */}
      <Button
        variant="outline"
        onClick={downloadPNG}
      >
        <FileImage className="mr-2 h-4 w-4" />

        PNG
      </Button>


      {/* SVG */}
      <Button
        variant="outline"
        onClick={downloadSVG}
      >
        <FileCode className="mr-2 h-4 w-4" />

        SVG
      </Button>


      {/* Print */}
      <Button
        variant="outline"
        onClick={printQR}
      >
        <Printer className="mr-2 h-4 w-4" />

        Print
      </Button>


      {/* Share */}
      <Button
        variant="outline"
        onClick={shareQR}
      >
        <Share2 className="mr-2 h-4 w-4" />

        Share
      </Button>

    </div>
  );
}