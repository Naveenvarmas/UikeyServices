"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  LayoutDashboard, Package, ShoppingCart, Users, BarChart2,
  Megaphone, Wallet, Settings, Building2, HelpCircle, LogOut,
  ChevronDown, ChevronRight, X,
} from "lucide-react";

interface SubRoute { name: string; path: string; }
interface MenuItem {
  name: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  path: string;
  children?: SubRoute[];
}
interface SidebarProps {
  isDark: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const menuConfig: MenuItem[] = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dealer/dashboard" },
  {
    name: "Products", icon: Package, path: "/dashboard/products",
    children: [
      { name: "All Products",     path: "/dealer/dashboard/products" },
      { name: "Add Product",      path: "/dealer/dashboard/products/add" },
      { name: "Categories",       path: "/dealer/dashboard/products/categories" },
      { name: "Product Overview", path: "/dealer/dashboard/products/overview" },
    ],
  },
  {
    name: "Orders", icon: ShoppingCart, path: "/dashboard/orders",
    children: [
      { name: "All Orders",       path: "/dealer/dashboard/orders" },
      { name: "Booked Orders",    path: "/dealer/dashboard/orders/booked" },
      { name: "Ongoing Orders",   path: "/dealer/dashboard/orders/ongoing" },
      { name: "Delivered Orders", path: "/dealer/dashboard/orders/delivered" },
      { name: "Cancelled Orders", path: "/dealer/dashboard/orders/cancelled" },
      { name: "Order Returns",    path: "/dealer/dashboard/orders/returns" },
    ],
  },
  {
    name: "Customers", icon: Users, path: "/dealer/dashboard/customers",
    children: [
      { name: "All Customers",   path: "/dealer/dashboard/customers" },
      { name: "Customer Orders", path: "/dealer/dashboard/customers/orders" },
    ],
  },
  // {
  //   name: "Analytics", icon: BarChart2, path: "/dealer/dashboard/analytics",
  //   children: [
  //     { name: "Sales Report", path: "/dealer/dashboard/analytics/sales" },
  //     { name: "Revenue",      path: "/dealer/dashboard/analytics/revenue" },
  //   ],
  // },
  // {
  //   name: "Marketing", icon: Megaphone, path: "/dealer/dashboard/marketing",
  //   children: [
  //     { name: "Inquiries",  path: "/dealer/dashboard/inquiries" },
  //     { name: "Feedback",   path: "/dealer/dashboard/feedback" },
  //     { name: "QR Details", path: "/dealer/dashboard/generate-batchs" },
  //   ],
  // },
  { name: "Payouts",      icon: Wallet,     path: "/dealer/dashboard/payouts" },
  { name: "Settings",     icon: Settings,   path: "/dealer/dashboard/settings" },
  { name: "Subscription", icon: Building2,  path: "/dealer/dashboard/subscriptions" },
  { name: "Support",      icon: HelpCircle, path: "/dealer/dashboard/support" },
];

export default function Sidebar({ isDark, isOpen, onClose }: SidebarProps) {
  const router   = useRouter();
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    if (isMobile) onClose();
  }, [pathname]);

  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    menuConfig.forEach((item) => {
      if (item.children && pathname.startsWith(item.path)) initial[item.path] = true;
    });
    return initial;
  });

  const toggleDropdown = (path: string) =>
    setOpenDropdowns((prev) => ({ ...prev, [path]: !prev[path] }));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/");
  };

  const isActive = (path: string) => {
    if (path === "/dealer/dashboard") return pathname === "/dealer/dashboard";
    return pathname.startsWith(path);
  };

  const t = {
    bg:            isDark ? "#0a0a0a"                       : "#ffffff",
    border:        isDark ? "#1f1f1f"                       : "#e9e0ff",
    text:          isDark ? "#999"                          : "#5b21b6",
    textMuted:     isDark ? "#666"                          : "#9370cc",
    childText:     isDark ? "#666"                          : "#7c3aed",
    childActive:   isDark ? "#a78bfa"                       : "#7c3aed",
    childHoverBg:  isDark ? "rgba(139,92,246,0.12)"         : "rgba(124,58,237,0.08)",
    childActiveBg: isDark ? "rgba(139,92,246,0.15)"         : "rgba(124,58,237,0.12)",
    childBorder:   isDark ? "#2a2a2a"                       : "#ddd6fe",
    hoverBg:       isDark ? "rgba(139,92,246,0.10)"         : "rgba(124,58,237,0.06)",
    logoutHover:   "#f87171",
    modalBg:       isDark ? "#111"                          : "#fff",
    modalBorder:   isDark ? "#222"                          : "#ede9fe",
    modalTitle:    isDark ? "#f1f1f1"                       : "#1a0533",
    modalSub:      isDark ? "#666"                          : "#888",
    cancelBorder:  isDark ? "#2a2a2a"                       : "#ddd",
    cancelBg:      isDark ? "transparent"                   : "#fff",
    cancelText:    isDark ? "#ccc"                          : "#555",
    overlayBg:     isDark ? "rgba(0,0,0,0.7)"              : "rgba(0,0,0,0.35)",
  };

  const sidebarContent = (
    <div style={{
      height: "100%", width: "210px", display: "flex", flexDirection: "column",
      background: t.bg, borderRight: `1px solid ${t.border}`,
      overflow: "hidden", flexShrink: 0,
      transition: "background 0.3s ease, border-color 0.3s ease",
    }}>
      {/* Logo + close button (mobile) */}
      <div style={{ padding: "16px 16px 12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/apnidigilogo.png" alt="Apni Digi" style={{ width: "34px", height: "34px", objectFit: "contain" }} />
          <span style={{ fontSize: "17px", fontWeight: "700", background: "linear-gradient(to right, #8b5cf6, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Apni Digi
          </span>
        </div>
        {isMobile && (
          <button onClick={onClose} style={{ background: "transparent", border: "none", color: t.textMuted, cursor: "pointer", padding: "4px", display: "flex" }}>
            <X size={18} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="sidebar-scroll" style={{ flex: 1, overflowY: "auto", padding: "4px 12px 12px 12px", display: "flex", flexDirection: "column", gap: "2px" }}>
        {menuConfig.map((item) => {
          const Icon   = item.icon;
          const active = isActive(item.path);
          const isOpenDD = openDropdowns[item.path] ?? false;

          if (item.children) {
            return (
              <div key={item.path}>
                <button
                  onClick={() => toggleDropdown(item.path)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "9px 12px", borderRadius: "10px", border: "none", cursor: "pointer",
                    fontSize: "14px", fontWeight: active ? "500" : "400",
                    background: active ? "linear-gradient(135deg, #2b0a6b, #8e2de2)" : "transparent",
                    color: active ? "#fff" : t.text, transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLButtonElement).style.background = t.hoverBg; }}
                  onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Icon size={17} strokeWidth={1.8} />
                    {item.name}
                  </div>
                  {isOpenDD ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </button>

                {isOpenDD && (
                  <div style={{ marginLeft: "16px", marginTop: "2px", display: "flex", flexDirection: "column", gap: "1px", borderLeft: `2px solid ${t.childBorder}`, paddingLeft: "12px" }}>
                    {item.children.map((child) => {
                      const childActive = pathname === child.path;
                      return (
                        <button key={child.path}
                          onClick={() => { router.push(child.path); if (isMobile) onClose(); }}
                          style={{
                            textAlign: "left", padding: "7px 10px", borderRadius: "8px", border: "none",
                            cursor: "pointer", fontSize: "13px", width: "100%", transition: "all 0.15s",
                            background: childActive ? t.childActiveBg : "transparent",
                            color: childActive ? t.childActive : t.childText,
                            fontWeight: childActive ? "500" : "400",
                          }}
                          onMouseEnter={(e) => { if (!childActive) { (e.currentTarget as HTMLButtonElement).style.background = t.childHoverBg; (e.currentTarget as HTMLButtonElement).style.color = t.childActive; } }}
                          onMouseLeave={(e) => { if (!childActive) { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = t.childText; } }}
                        >
                          {child.name}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <button key={item.path}
              onClick={() => { router.push(item.path); if (isMobile) onClose(); }}
              style={{
                width: "100%", display: "flex", alignItems: "center", gap: "10px",
                padding: "9px 12px", borderRadius: "10px", border: "none", cursor: "pointer",
                fontSize: "14px", fontWeight: active ? "500" : "400", textAlign: "left",
                background: active ? "linear-gradient(135deg, #2b0a6b, #8e2de2)" : "transparent",
                color: active ? "#fff" : t.text, transition: "all 0.15s",
              }}
              onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLButtonElement).style.background = t.hoverBg; }}
              onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
            >
              <Icon size={17} strokeWidth={1.8} />
              {item.name}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div style={{ padding: "0 12px 16px 12px", flexShrink: 0 }}>
        <button
          onClick={() => setShowLogoutModal(true)}
          style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", borderRadius: "10px", border: "none", cursor: "pointer", fontSize: "14px", color: t.textMuted, background: "transparent", transition: "all 0.15s" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = t.logoutHover; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = t.textMuted; }}
        >
          <LogOut size={17} strokeWidth={1.8} />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        .sidebar-scroll::-webkit-scrollbar { display: none; }
        .sidebar-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Desktop — normal flow */}
      {!isMobile && isOpen && sidebarContent}

      {/* Mobile — overlay drawer */}
      {isMobile && (
        <>
          {/* Backdrop */}
          {isOpen && (
            <div
              onClick={onClose}
              style={{ position: "fixed", inset: 0, zIndex: 200, background: t.overlayBg, transition: "opacity 0.3s" }}
            />
          )}
          {/* Drawer */}
          <div style={{
            position: "fixed", top: 0, left: 0, height: "100vh", zIndex: 201,
            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s ease",
          }}>
            {sidebarContent}
          </div>
        </>
      )}

      {/* Logout Modal */}
      {showLogoutModal && (
        <div style={{ position: "fixed", inset: 0, zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", background: t.overlayBg }}>
          <div style={{ width: "300px", borderRadius: "16px", background: t.modalBg, border: `1px solid ${t.modalBorder}`, padding: "24px", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
            <h2 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px 0", color: t.modalTitle }}>Logout?</h2>
            <p style={{ fontSize: "13px", color: t.modalSub, margin: "0 0 20px 0" }}>You will be signed out of your account.</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => setShowLogoutModal(false)}
                style={{ flex: 1, padding: "10px", borderRadius: "10px", border: `1px solid ${t.cancelBorder}`, background: t.cancelBg, color: t.cancelText, cursor: "pointer", fontSize: "14px" }}>
                Cancel
              </button>
              <button onClick={handleLogout}
                style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "none", background: "#dc2626", color: "#fff", cursor: "pointer", fontSize: "14px", fontWeight: "500" }}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}