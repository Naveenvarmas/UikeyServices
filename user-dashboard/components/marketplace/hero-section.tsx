import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ShieldCheck,
  BadgeDollarSign,
  Grid2x2,
  Wallet,
  QrCode,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section>

      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-[24px]">

        <img
          src="/apnidigibg.png"
          alt="Hero Banner"
          className="w-full h-[400px] lg:h-[340px] object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center">

          <div className="pl-8 lg:pl-12 max-w-[500px] text-white">

            <h1 className="text-xl lg:text-xl font-bold leading-tight">
              Find nearby
              <br />
              Businesses &
              Products
            </h1>

            <p className="mt-3 text-base text-white/90">
              Search trusted dealers and shop the best products.
            </p>

            <div className="flex gap-3 mt-6 flex-wrap">

              <Input
                placeholder="Search Vendor Name..."
                className="w-[280px] h-10 bg-white text-black border-0"
              />

              <Button className="h-10 bg-white text-purple-700 hover:bg-purple-100">
                Search
              </Button>

              <Button
                variant="secondary"
                className="h-10 bg-white text-black"
              >
                <QrCode className="mr-2 h-4 w-4" />
                Scan QR
              </Button>

            </div>

          </div>

        </div>

      </div>

      {/* Feature Cards */}
      <div className="-mt-6 relative z-10 px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

          <div className="bg-white rounded-xl border shadow-md p-4">
            <ShieldCheck
              size={24}
              className="text-purple-600"
            />

            <h3 className="font-semibold mt-2">
              100% Trusted
            </h3>

            <p className="text-sm text-muted-foreground">
              Verified Businesses
            </p>
          </div>

          <div className="bg-white rounded-xl border shadow-md p-4">
            <BadgeDollarSign
              size={24}
              className="text-purple-600"
            />

            <h3 className="font-semibold mt-2">
              Best Prices
            </h3>

            <p className="text-sm text-muted-foreground">
              Compare & Save
            </p>
          </div>

          <div className="bg-white rounded-xl border shadow-md p-4">
            <Grid2x2
              size={24}
              className="text-purple-600"
            />

            <h3 className="font-semibold mt-2">
              Wide Range
            </h3>

            <p className="text-sm text-muted-foreground">
              All Categories
            </p>
          </div>

          <div className="bg-white rounded-xl border shadow-md p-4">
            <Wallet
              size={24}
              className="text-purple-600"
            />

            <h3 className="font-semibold mt-2">
              Secure Payments
            </h3>

            <p className="text-sm text-muted-foreground">
              Safe & Fast
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}