"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  LogOut,
  User,
  MessageCircle,
  Menu,
  Download,
  Bell,
  MoreVertical,
  QrCode,
} from "lucide-react";

interface UserData {
  full_name?: string;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [notifCount] = useState(5);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) setUser(JSON.parse(userString));

    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fullName = user?.full_name || "User";
  const firstLetter = fullName.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(to right, #2b0a6b, #5f1bb3, #8e2de2)",
          padding: "10px 20px",
          color: "#fff",
          flexShrink: 0,
        }}
      >
        {/* LEFT — hamburger + avatar + name + badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }} ref={dropdownRef}>
          {/* Hamburger */}
          <button
            style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer", padding: "4px", display: "flex" }}
          >
            <Menu size={22} />
          </button>

          {/* Avatar + dropdown */}
          <div style={{ position: "relative" }}>
            <div
              onClick={() => setOpen(!open)}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "#fff",
                color: "#5f1bb3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "700",
                fontSize: "15px",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              {firstLetter}
            </div>

            {open && (
              <div
                style={{
                  position: "absolute",
                  top: "46px",
                  left: 0,
                  width: "176px",
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                  border: "1px solid #ede8f7",
                  zIndex: 100,
                  overflow: "hidden",
                }}
              >
                {[
                  { label: "Profile", icon: User, action: () => { router.push("/dashboard/profiles"); setOpen(false); } },
                  { label: "Feedback", icon: MessageCircle, action: () => { router.push("/dashboard/feedback"); setOpen(false); } },
                ].map(({ label, icon: Icon, action }) => (
                  <button
                    key={label}
                    onClick={action}
                    style={{ width: "100%", display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", border: "none", background: "transparent", cursor: "pointer", fontSize: "13px", color: "#333" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f5f5")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <Icon size={15} /> {label}
                  </button>
                ))}
                <button
                  onClick={() => { setOpen(false); setShowLogoutModal(true); }}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", border: "none", background: "transparent", cursor: "pointer", fontSize: "13px", color: "#e53e3e" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#fff5f5")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <LogOut size={15} /> Logout
                </button>
              </div>
            )}
          </div>

          {/* Name + badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontWeight: "600", fontSize: "15px" }}>Welcome, {fullName}</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "600",
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "6px",
                padding: "2px 8px",
                color: "#fff",
                letterSpacing: "0.3px",
              }}
            >
              Dealer
            </span>
          </div>
        </div>

        {/* RIGHT — Generate QR + icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Generate QR button */}
          <button
            onClick={() => router.push("/dashboard/generate-batchs")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              padding: "8px 16px",
              borderRadius: "10px",
              border: "1.5px solid rgba(255,255,255,0.6)",
              background: "transparent",
              color: "#fff",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <QrCode size={16} />
            Generate QR
          </button>

          {/* Download */}
          <button
            style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "8px", padding: "8px", color: "#fff", cursor: "pointer", display: "flex" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
          >
            <Download size={18} />
          </button>

          {/* Bell with badge */}
          <button
            style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "8px", padding: "8px", color: "#fff", cursor: "pointer", display: "flex", position: "relative" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
          >
            <Bell size={18} />
            {notifCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "4px",
                  right: "4px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "#e53e3e",
                  color: "#fff",
                  fontSize: "9px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1.5px solid #5f1bb3",
                }}
              >
                {notifCount}
              </span>
            )}
          </button>

          {/* Profile icon */}
          <button
            onClick={() => router.push("/dashboard/profiles")}
            style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "8px", padding: "8px", color: "#fff", cursor: "pointer", display: "flex" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
          >
            <User size={18} />
          </button>

          {/* More dots */}
          <button
            style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "8px", padding: "8px", color: "#fff", cursor: "pointer", display: "flex" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
          >
            <MoreVertical size={18} />
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