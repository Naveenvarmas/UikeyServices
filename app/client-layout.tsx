"use client";

import { useState, useEffect } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDark, setIsDark] = useState(false); // ✅ default white

  // ✅ Page load pe dark class hatao
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  const handleSetDark = (val: boolean) => {
    setIsDark(val);
    if (val) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar
        isDark={isDark}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <Header
          toggleSidebar={() => setSidebarOpen((prev) => !prev)}
          isDark={isDark}
          setIsDark={handleSetDark}
        />
        <main style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
          {children}
        </main>
      </div>
    </div>
  );
}