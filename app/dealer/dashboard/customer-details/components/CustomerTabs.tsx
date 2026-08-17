"use client";

import { useState } from "react";

const tabs = [
  "Overview",
  "Order History",
  "Addresses",
  "Notes",
];

export default function CustomerTabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex items-center gap-1 rounded-xl border bg-background p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActiveTab(tab)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            activeTab === tab
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}