import Navbar from "@/components/marketplace/navbar";
import HeroSection from "@/components/marketplace/hero-section";
import BusinessGrid from "@/components/marketplace/business-grid";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      {/* Hero — 90% width */}
      <div className="w-[90%] mx-auto py-4">
        <HeroSection />
      </div>

      {/* Rest of content — 90% centered */}
      <div className="w-[90%] mx-auto pb-4">
        <div className="mt-10">
          <BusinessGrid />
        </div>
      </div>

    </div>
  );
}