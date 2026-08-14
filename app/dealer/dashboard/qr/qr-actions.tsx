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
  businessName?: string;
}

export default function QRActions({
  qrImage,
  businessName = "Your Business",
}: QRActionsProps) {
  const handleDownload = () => {
    const canvas = document.createElement("canvas");

    
    canvas.width = 800;
    canvas.height = 1200;

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    /*
      --------------------------------
      1. Background
      --------------------------------
    */

    ctx.fillStyle = "#ffffff";

    ctx.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );


    /*
      --------------------------------
      2. Main blue QR card
      --------------------------------
    */

    const cardX = 40;
    const cardY = 40;
    const cardWidth = 720;
    const cardHeight = 1120;
    const radius = 45;

    ctx.fillStyle = "#2854e8";

    ctx.beginPath();

    ctx.roundRect(
      cardX,
      cardY,
      cardWidth,
      cardHeight,
      radius
    );

    ctx.fill();


    /*
      --------------------------------
      3. Apni Digi
      --------------------------------
    */

    ctx.textAlign = "center";

    ctx.fillStyle = "#ffffff";

    ctx.font = "bold 38px Arial";

    ctx.fillText(
      "Apni Digi",
      canvas.width / 2,
      125
    );


    /*
      --------------------------------
      4. Business Name
      --------------------------------
    */

    ctx.font = "bold 42px Arial";

    ctx.fillText(
      businessName,
      canvas.width / 2,
      255
    );


    /*
      --------------------------------
      5. QR Code white container
      --------------------------------
    */

    const qrContainerX = 110;
    const qrContainerY = 320;
    const qrContainerWidth = 580;
    const qrContainerHeight = 580;

    ctx.fillStyle = "#ffffff";

    ctx.beginPath();

    ctx.roundRect(
      qrContainerX,
      qrContainerY,
      qrContainerWidth,
      qrContainerHeight,
      40
    );

    ctx.fill();


    /*
      --------------------------------
      6. Load QR image
      --------------------------------
    */

    const qr = new Image();

    qr.crossOrigin = "anonymous";

    qr.onload = () => {
      /*
        QR size inside white container
      */

      const qrSize = 480;

      const qrX =
        (canvas.width - qrSize) / 2;

      const qrY =
        qrContainerY +
        (qrContainerHeight - qrSize) / 2;


      ctx.drawImage(
        qr,
        qrX,
        qrY,
        qrSize,
        qrSize
      );


      /*
        --------------------------------
        7. Scan to see
        --------------------------------
      */

      ctx.fillStyle = "#ffffff";

      ctx.font = "bold 32px Arial";

      ctx.fillText(
        "Scan to see",
        canvas.width / 2,
        1000
      );


      /*
        --------------------------------
        8. Business Profile
        --------------------------------
      */

      ctx.fillText(
        "Business Profile",
        canvas.width / 2,
        1045
      );


      /*
        --------------------------------
        9. Bottom white box
        --------------------------------
      */

      const bottomX = 110;
      const bottomY = 1080;
      const bottomWidth = 580;
      const bottomHeight = 90;

      ctx.fillStyle = "#ffffff";

      ctx.beginPath();

      ctx.roundRect(
        bottomX,
        bottomY,
        bottomWidth,
        bottomHeight,
        25
      );

      ctx.fill();


      /*
        --------------------------------
        10. Powered & Operated by
        --------------------------------
      */

      ctx.fillStyle = "#9ca3af";

      ctx.font = "20px Arial";

      ctx.fillText(
        "Powered & Operated by",
        canvas.width / 2,
        1115
      );


      /*
        --------------------------------
        11. Apni Digi bottom text
        --------------------------------
      */

      ctx.fillStyle = "#8b35ff";

      ctx.font = "bold 25px Arial";

      ctx.fillText(
        "Apni Digi",
        canvas.width / 2,
        1145
      );


      /*
        --------------------------------
        12. Convert canvas to image
        --------------------------------
      */

      const imageUrl =
        canvas.toDataURL("image/png");


      /*
        --------------------------------
        13. Download
        --------------------------------
      */

      const link =
        document.createElement("a");

      link.href = imageUrl;

      link.download =
        "apni-digi-business-qr.png";

      link.click();
    };


    /*
      Start loading QR image
    */

    qr.src = qrImage;
  };


  return (
    <div className="flex flex-wrap gap-2">

      {/* DOWNLOAD - FUNCTIONAL */}
      <Button
        onClick={handleDownload}
      >
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>


      {/* PNG - NO FUNCTIONALITY */}
      <Button variant="outline">
        <FileImage className="mr-2 h-4 w-4" />
        PNG
      </Button>


      {/* SVG - NO FUNCTIONALITY */}
      <Button variant="outline">
        <FileCode className="mr-2 h-4 w-4" />
        SVG
      </Button>


      {/* PRINT - NO FUNCTIONALITY */}
      <Button variant="outline">
        <Printer className="mr-2 h-4 w-4" />
        Print
      </Button>


      {/* SHARE - NO FUNCTIONALITY */}
      <Button variant="outline">
        <Share2 className="mr-2 h-4 w-4" />
        Share
      </Button>

    </div>
  );
}