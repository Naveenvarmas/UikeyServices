"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  Image,
  QrCode,
  User,
  LogOut,
  MessageSquare,
  MessageCircle,
} from "lucide-react";

interface MenuItem {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
  path: string;
}

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/");
  };

  const menu: MenuItem[] = [
    { name: "Dashboard",    icon: LayoutDashboard, path: "/dashboard" },
    { name: "Subscription", icon: Building2,        path: "/dashboard/subscriptions" },
    { name: "Images",       icon: Image,            path: "/dashboard/upload-image" },
    { name: "Inquiries",    icon: MessageSquare,    path: "/dashboard/inquiries" },
    { name: "QR Details",   icon: QrCode,           path: "/dashboard/generate-batchs" },
    { name: "Profile",      icon: User,             path: "/dashboard/profiles" },
    { name: "Feedback",     icon: MessageCircle,    path: "/dashboard/feedback" },
  ];

  // Active check: exact match for /dashboard, startsWith for nested routes
//   const isActive = (path: string) => {
//     if (path === "/dashboard") {
//       return pathname === "/dashboard";
//     }
//     return pathname.startsWith(path);
//   };

  return (
    <>
      <div
        className="
          h-screen w-64
          p-4 flex flex-col
          shadow-sm border-r
          bg-[var(--card)]
          text-[var(--text)]
          border-[var(--border)]
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
          <img
            src="/images/apnidigi_new.png"
            alt="Apni Digi Logo"
            className="w-8 h-8 object-contain"
          />
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#5f1bb3] to-[#8e2de2] bg-clip-text text-transparent">
            Apni Digi
          </h1>
        </div>

        {/* Nav Menu */}
        <nav className="flex flex-col gap-1">
          {menu.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <button
                key={item.name}
                onClick={() => router.push(item.path)}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150
                  ${
                    active
                      ? "bg-gradient-to-r from-[#2b0a6b] via-[#5f1bb3] to-[#8e2de2] text-white shadow-md"
                      : "text-[var(--text)] hover:bg-[var(--border)] hover:text-[var(--text)]"
                  }
                `}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout Button */}
        <button
          onClick={() => setShowLogoutModal(true)}
          className="mt-auto flex items-center gap-2 text-sm text-[var(--text)] hover:text-red-500 transition-colors px-1 py-2"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div
            className="
              w-80 p-6 rounded-2xl shadow-2xl text-center
              bg-[var(--card)]
              text-[var(--text)]
              border border-[var(--border)]
            "
          >
            <div className="flex justify-center mb-3">
              <div className="p-3 rounded-full bg-red-500/10 text-red-500">
                <LogOut size={22} />
              </div>
            </div>

            <h2 className="text-lg font-semibold mb-1">Logout?</h2>

            <p className="text-sm text-gray-500 mb-5">
              You will be signed out of your account.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="
                  flex-1 py-2 rounded-lg text-sm
                  border border-[var(--border)]
                  hover:bg-[var(--border)] transition-colors
                "
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setShowLogoutModal(false);
                  handleLogout();
                }}
                className="
                  flex-1 py-2 rounded-lg text-sm text-white
                  bg-gradient-to-r from-red-500 to-red-600
                  hover:opacity-90 transition-opacity
                "
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