import DealerCover from "@/components/dealer/dealer-cover";
import DealerInfo from "@/components/dealer/dealer-info";
import DealerSearch from "@/components/dealer/dealer-search";
import DealerTabs from "@/components/dealer/dealer-tabs";
import DealerCategories from "@/components/dealer/dealer-categories";
import DealerProductsGrid from "@/components/dealer/dealer-products-grid";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="px-3 py-3 md:px-6 md:py-6">
        {/* Header */}
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <DealerCover />
          <DealerInfo />
        </div>

        {/* Search */}
        <div className="mt-4">
          <DealerSearch />
        </div>

        {/* Tabs */}
        <div className="mt-3">
          <DealerTabs />
        </div>

        {/* Content */}
        <div className="mt-4 flex flex-col gap-4 lg:flex-row">
          {/* Categories */}
          <aside className="w-full lg:w-[190px] shrink-0">
            <DealerCategories />
          </aside>

          {/* Products */}
          <main className="min-w-0 flex-1">
            <DealerProductsGrid />
          </main>
        </div>
      </div>
    </div>
  );
}