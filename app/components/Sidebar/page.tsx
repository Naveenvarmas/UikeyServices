"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart2,
  Megaphone,
  Wallet,
  Settings,
  Building2,
  HelpCircle,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface SubRoute {
  name: string;
  path: string;
}

interface MenuItem {
  name: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  path: string;
  children?: SubRoute[];
}

const menuConfig: MenuItem[] = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  {
    name: "Products",
    icon: Package,
    path: "/dashboard/products",
    children: [
      { name: "All Products", path: "/dashboard/products" },
      { name: "Add Product", path: "/dashboard/products/add" },
      { name: "Categories", path: "/dashboard/products/categories" },
      { name: "Product Overview", path: "/dashboard/products/overview" },
    ],
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    path: "/dashboard/orders",
    children: [
      { name: "All Orders", path: "/dashboard/orders" },
      { name: "Booked Orders", path: "/dashboard/orders/booked" },
      { name: "Ongoing Orders", path: "/dashboard/orders/ongoing" },
      { name: "Delivered Orders", path: "/dashboard/orders/delivered" },
      { name: "Cancelled Orders", path: "/dashboard/orders/cancelled" },
      { name: "Order Returns", path: "/dashboard/orders/returns" },
    ],
  },
  { name: "Customers", icon: Users, path: "/dashboard/customers" },
  {
    name: "Analytics",
    icon: BarChart2,
    path: "/dashboard/analytics",
    children: [
      { name: "Sales Report", path: "/dashboard/analytics/sales" },
      { name: "Revenue", path: "/dashboard/analytics/revenue" },
    ],
  },
  {
    name: "Marketing",
    icon: Megaphone,
    path: "/dashboard/marketing",
    children: [
      { name: "Inquiries", path: "/dashboard/inquiries" },
      { name: "Feedback", path: "/dashboard/feedback" },
      { name: "QR Details", path: "/dashboard/generate-batchs" },
    ],
  },
  { name: "Payouts", icon: Wallet, path: "/dashboard/payouts" },
  { name: "Settings", icon: Settings, path: "/dashboard/profiles" },
  { name: "Subscription", icon: Building2, path: "/dashboard/subscriptions" },
  { name: "Support", icon: HelpCircle, path: "/dashboard/support" },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {};
      menuConfig.forEach((item) => {
        if (item.children && pathname.startsWith(item.path)) {
          initial[item.path] = true;
        }
      });
      return initial;
    }
  );

  const toggleDropdown = (path: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/");
  };

  const isActive = (path: string) => {
    if (path === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(path);
  };

  return (
    <>
      <style>{`
        .sidebar-scroll::-webkit-scrollbar { display: none; }
        .sidebar-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .sidebar-child-btn:hover { background: rgba(95,27,179,0.08); color: #5f1bb3; }
        .sidebar-child-btn.active-child { background: rgba(95,27,179,0.1); color: #5f1bb3; font-weight: 500; }
      `}</style>

      <div
        style={{
          height: "100vh",
          width: "210px",
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          borderRight: "1px solid #ede8f7",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {/* Logo */}
        <div style={{ padding: "20px 20px 12px 20px", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <img
            src="/images/apnidigi_new.png"
            alt="Apni Digi"
            style={{ width: "36px", height: "36px", objectFit: "contain" }}
          />
          <span style={{ fontSize: "18px", fontWeight: "700", background: "linear-gradient(to right, #5f1bb3, #8e2de2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Apni Digi
          </span>
        </div>

        {/* Nav */}
        <nav
          className="sidebar-scroll"
          style={{ flex: 1, overflowY: "auto", padding: "4px 12px 12px 12px", display: "flex", flexDirection: "column", gap: "2px" }}
        >
          {menuConfig.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            const isOpen = openDropdowns[item.path] ?? false;

            if (item.children) {
              return (
                <div key={item.path}>
                  <button
                    onClick={() => toggleDropdown(item.path)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "9px 12px",
                      borderRadius: "10px",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: active ? "500" : "400",
                      background: active ? "linear-gradient(135deg, #2b0a6b, #8e2de2)" : "transparent",
                      color: active ? "#fff" : "#444",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLButtonElement).style.background = "rgba(95,27,179,0.07)"; }}
                    onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Icon size={17} strokeWidth={1.8} />
                      {item.name}
                    </div>
                    {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </button>

                  {isOpen && (
                    <div style={{ marginLeft: "16px", marginTop: "2px", display: "flex", flexDirection: "column", gap: "1px", borderLeft: "2px solid #ede8f7", paddingLeft: "12px" }}>
                      {item.children.map((child) => {
                        const childActive = pathname === child.path;
                        return (
                          <button
                            key={child.path}
                            onClick={() => router.push(child.path)}
                            className={`sidebar-child-btn ${childActive ? "active-child" : ""}`}
                            style={{
                              textAlign: "left",
                              padding: "7px 10px",
                              borderRadius: "8px",
                              border: "none",
                              cursor: "pointer",
                              fontSize: "13px",
                              background: childActive ? "rgba(95,27,179,0.1)" : "transparent",
                              color: childActive ? "#5f1bb3" : "#555",
                              fontWeight: childActive ? "500" : "400",
                              transition: "all 0.15s",
                            }}
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
              <button
                key={item.path}
                onClick={() => router.push(item.path)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "9px 12px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: active ? "500" : "400",
                  background: active ? "linear-gradient(135deg, #2b0a6b, #8e2de2)" : "transparent",
                  color: active ? "#fff" : "#444",
                  transition: "all 0.15s",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLButtonElement).style.background = "rgba(95,27,179,0.07)"; }}
                onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
              >
                <Icon size={17} strokeWidth={1.8} />
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Upgrade Banner */}
        <div style={{ margin: "0 12px 12px 12px", background: "linear-gradient(135deg, #f3eeff, #ede8f7)", borderRadius: "12px", padding: "14px 12px", flexShrink: 0 }}>
          <p style={{ fontSize: "13px", fontWeight: "600", color: "#3b0f8c", margin: "0 0 4px 0" }}>Upgrade Your Plan</p>
          <p style={{ fontSize: "11px", color: "#7c6aa0", margin: "0 0 10px 0", lineHeight: "1.4" }}>Upgrade your plan to get more features and benefits.</p>
          <button
            onClick={() => router.push("/dashboard/subscriptions")}
            style={{ width: "100%", padding: "7px", borderRadius: "8px", border: "1.5px solid #8e2de2", background: "transparent", color: "#6b1fd0", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}
          >
            Upgrade Now
          </button>
        </div>

        {/* Logout */}
        <div style={{ padding: "0 12px 16px 12px", flexShrink: 0 }}>
          <button
            onClick={() => setShowLogoutModal(true)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "9px 12px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              color: "#888",
              background: "transparent",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#e53e3e"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#888"; }}
          >
            <LogOut size={17} strokeWidth={1.8} />
            Logout
          </button>
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.4)" }}>
          <div style={{ width: "300px", borderRadius: "16px", background: "#fff", padding: "24px", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
            <h2 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px 0" }}>Logout?</h2>
            <p style={{ fontSize: "13px", color: "#888", margin: "0 0 20px 0" }}>You will be signed out of your account.</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => setShowLogoutModal(false)}
                style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "1px solid #ddd", background: "#fff", cursor: "pointer", fontSize: "14px" }}
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "none", background: "#e53e3e", color: "#fff", cursor: "pointer", fontSize: "14px", fontWeight: "500" }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}