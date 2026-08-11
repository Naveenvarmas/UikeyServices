"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  LogOut, User, MessageCircle, Menu, Download,
  Bell, MoreVertical, QrCode, Sun, Moon, X,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────
type UserData = {
  full_name?: string;
};

type HeaderProps = {
  toggleSidebar: () => void;
  isDark: boolean;
  setIsDark: (val: boolean) => void;
};

// ── Theme helper ────────────────────────────────────────────────────────
function getTheme(isDark: boolean) {
  if (isDark) {
    return {
      bg:                 "linear-gradient(to right, #2b0a6b, #5f1bb3, #8e2de2)",
      text:               "#fff",
      avatarBg:           "#fff",
      avatarText:         "#5f1bb3",
      badgeBg:            "rgba(255,255,255,0.2)",
      badgeBorder:        "rgba(255,255,255,0.4)",
      badgeText:          "#fff",
      btnBg:              "rgba(255,255,255,0.15)",
      btnHoverBg:         "rgba(255,255,255,0.25)",
      qrBorder:           "rgba(255,255,255,0.6)",
      qrHover:            "rgba(255,255,255,0.15)",
      notifBorder:        "#5f1bb3",
      mobilePanelBg:      "#1a0a3b",
      mobilePanelBorder:  "#3b1a7a",
    };
  }
  return {
    bg:                 "linear-gradient(to right, #f0ebff, #e4d4ff, #f5f0ff)",
    text:               "#3b0f8c",
    avatarBg:           "#5f1bb3",
    avatarText:         "#fff",
    badgeBg:            "rgba(95,27,179,0.12)",
    badgeBorder:        "rgba(95,27,179,0.3)",
    badgeText:          "#5f1bb3",
    btnBg:              "rgba(95,27,179,0.08)",
    btnHoverBg:         "rgba(95,27,179,0.12)",
    qrBorder:           "rgba(95,27,179,0.5)",
    qrHover:            "rgba(95,27,179,0.1)",
    notifBorder:        "#e4d4ff",
    mobilePanelBg:      "#f5f0ff",
    mobilePanelBorder:  "#ddd6fe",
  };
}

// ── Main Component ──────────────────────────────────────────────────────
export default function Header({ toggleSidebar, isDark, setIsDark }: HeaderProps) {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [dropdownOpen, setDropdownOpen]       = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu]   = useState(false);
  const [user, setUser]                       = useState<UserData | null>(null);
  const [notifCount]                          = useState(5);

  const theme     = getTheme(isDark);
  const fullName  = user?.full_name || "User";
  const firstLetter = fullName.charAt(0).toUpperCase();

  // ── Effects ────────────────────────────────────────────────────────────
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));

    function handleClickOutside(e: MouseEvent) {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ── Handlers ───────────────────────────────────────────────────────────
  function handleThemeToggle() {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("headerDarkMode", String(next));
  }

  function handleLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/");
  }

  // ── Small reusable icon button ──────────────────────────────────────────
  function IconBtn({ onClick, children }: { onClick?: () => void; children: React.ReactNode }) {
    return (
      <button
        onClick={onClick}
        onMouseEnter={(e) => (e.currentTarget.style.background = theme.btnHoverBg)}
        onMouseLeave={(e) => (e.currentTarget.style.background = theme.btnBg)}
        style={{
          background: theme.btnBg, border: "none", borderRadius: "8px",
          padding: "8px", color: theme.text, cursor: "pointer",
          display: "flex", position: "relative", transition: "all 0.3s",
        }}
      >
        {children}
      </button>
    );
  }

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only  { display: flex  !important; }
        }
        @media (min-width: 769px) {
          .mobile-only  { display: none  !important; }
          .desktop-only { display: flex  !important; }
        }
      `}</style>

      {/* ── Header Bar ── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: theme.bg, padding: "10px 16px", color: theme.text,
        flexShrink: 0, transition: "background 0.3s ease",
      }}>

        {/* ── Left Side ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }} ref={dropdownRef}>

          <button onClick={toggleSidebar} style={{ background: "transparent", border: "none", color: theme.text, cursor: "pointer", padding: "4px", display: "flex" }}>
            <Menu size={22} />
          </button>

          {/* Avatar + Dropdown */}
          <div style={{ position: "relative" }}>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: theme.avatarBg, color: theme.avatarText,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: "700", fontSize: "15px", cursor: "pointer",
              }}
            >
              {firstLetter}
            </div>

            {dropdownOpen && (
              <div style={{
                position: "absolute", top: "44px", left: 0, width: "176px",
                background: "#fff", borderRadius: "10px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                border: "1px solid #ede8f7", zIndex: 200, overflow: "hidden",
              }}>
                {[
                  { label: "Profile",  icon: User,          path: "/dashboard/profiles" },
                  { label: "Feedback", icon: MessageCircle, path: "/dashboard/feedback" },
                ].map(({ label, icon: Icon, path }) => (
                  <button
                    key={label}
                    onClick={() => { router.push(path); setDropdownOpen(false); }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f5f5")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    style={{ width: "100%", display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", border: "none", background: "transparent", cursor: "pointer", fontSize: "13px", color: "#333" }}
                  >
                    <Icon size={15} /> {label}
                  </button>
                ))}

                <button
                  onClick={() => { setDropdownOpen(false); setShowLogoutModal(true); }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#fff5f5")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", border: "none", background: "transparent", cursor: "pointer", fontSize: "13px", color: "#e53e3e" }}
                >
                  <LogOut size={15} /> Logout
                </button>
              </div>
            )}
          </div>

          {/* Welcome text — hidden on mobile */}
          <div className="desktop-only" style={{ alignItems: "center", gap: "10px" }}>
            <span style={{ fontWeight: "600", fontSize: "15px", color: theme.text }}>
              Welcome, {fullName}
            </span>
            <span style={{
              fontSize: "11px", fontWeight: "600", background: theme.badgeBg,
              border: `1px solid ${theme.badgeBorder}`, borderRadius: "6px",
              padding: "2px 8px", color: theme.badgeText,
            }}>
              Dealer
            </span>
          </div>
        </div>

        {/* ── Right Side — Desktop ── */}
        <div className="desktop-only" style={{ alignItems: "center", gap: "8px" }}>

          <button
            onClick={() => router.push("/dashboard/generate-batchs")}
            onMouseEnter={(e) => (e.currentTarget.style.background = theme.qrHover)}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            style={{
              display: "flex", alignItems: "center", gap: "7px",
              padding: "7px 14px", borderRadius: "10px",
              border: `1.5px solid ${theme.qrBorder}`, background: "transparent",
              color: theme.text, fontSize: "13px", fontWeight: "600", cursor: "pointer",
            }}
          >
            <QrCode size={15} /> Generate QR
          </button>

          <IconBtn><Download size={17} /></IconBtn>

          {/* Bell with badge */}
          <button
            onClick={() => router.push("/dealer/dashboard/notifications")}
            onMouseEnter={(e) => (e.currentTarget.style.background = theme.btnHoverBg)}
            onMouseLeave={(e) => (e.currentTarget.style.background = theme.btnBg)}
            style={{
              background: theme.btnBg, border: "none", borderRadius: "8px",
              padding: "8px", color: theme.text, cursor: "pointer",
              display: "flex", position: "relative",
            }}
          >
            <Bell size={17} />
            {notifCount > 0 && (
              <span style={{
                position: "absolute", top: "4px", right: "4px",
                width: "15px", height: "15px", borderRadius: "50%",
                background: "#e53e3e", color: "#fff", fontSize: "8px",
                fontWeight: "700", display: "flex", alignItems: "center",
                justifyContent: "center", border: `1.5px solid ${theme.notifBorder}`,
              }}>
                {notifCount}
              </span>
            )}
          </button>

          <IconBtn onClick={() => router.push("/dashboard/profiles")}>
            <User size={17} />
          </IconBtn>

          {/* Theme toggle */}
          <button
            onClick={handleThemeToggle}
            onMouseEnter={(e) => { e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.22)" : "rgba(95,27,179,0.16)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.12)" : "rgba(95,27,179,0.08)"; }}
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "5px 10px", borderRadius: "20px",
              border: `1.5px solid ${isDark ? "rgba(255,255,255,0.4)" : "rgba(95,27,179,0.35)"}`,
              background: isDark ? "rgba(255,255,255,0.12)" : "rgba(95,27,179,0.08)",
              color: theme.text, fontSize: "12px", fontWeight: "600",
              cursor: "pointer", whiteSpace: "nowrap",
            }}
          >
            <div style={{ width: "30px", height: "17px", borderRadius: "10px", background: isDark ? "#3b0f8c" : "#c4a8ff", position: "relative" }}>
              <div style={{
                position: "absolute", top: "2px", left: isDark ? "15px" : "2px",
                width: "13px", height: "13px", borderRadius: "50%",
                background: "#fff", transition: "left 0.25s ease",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {isDark ? <Moon size={7} color="#3b0f8c" /> : <Sun size={7} color="#f59e0b" />}
              </div>
            </div>
            {isDark ? "Dark" : "Light"}
          </button>
        </div>

        {/* ── Right Side — Mobile ── */}
        <div className="mobile-only" style={{ alignItems: "center", gap: "6px" }}>

          <button
            onClick={() => router.push("/dealer/dashboard/notification")}
            style={{ background: theme.btnBg, border: "none", borderRadius: "8px", padding: "7px", color: theme.text, cursor: "pointer", display: "flex", position: "relative" }}
          >
            <Bell size={17} />
            {notifCount > 0 && (
              <span style={{ position: "absolute", top: "3px", right: "3px", width: "14px", height: "14px", borderRadius: "50%", background: "#e53e3e", color: "#fff", fontSize: "8px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {notifCount}
              </span>
            )}
          </button>

          <button onClick={handleThemeToggle} style={{ background: theme.btnBg, border: "none", borderRadius: "8px", padding: "7px", color: theme.text, cursor: "pointer", display: "flex" }}>
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button onClick={() => setShowMobileMenu(!showMobileMenu)} style={{ background: theme.btnBg, border: "none", borderRadius: "8px", padding: "7px", color: theme.text, cursor: "pointer", display: "flex" }}>
            {showMobileMenu ? <X size={17} /> : <MoreVertical size={17} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Panel ── */}
      {showMobileMenu && (
        <div style={{
          background: theme.mobilePanelBg,
          borderBottom: `1px solid ${theme.mobilePanelBorder}`,
          padding: "12px 16px", display: "flex", flexDirection: "column", gap: "8px", zIndex: 150,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingBottom: "8px", borderBottom: `1px solid ${theme.mobilePanelBorder}` }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: theme.avatarBg, color: theme.avatarText, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px" }}>
              {firstLetter}
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: "600", fontSize: "13px", color: theme.text }}>{fullName}</p>
              <p style={{ margin: 0, fontSize: "10px", color: theme.text, opacity: 0.6 }}>Dealer</p>
            </div>
          </div>

          {[
            { label: "Generate QR", icon: QrCode,    path: "/dashboard/generate-batchs" },
            { label: "Profile",     icon: User,       path: "/dashboard/profiles" },
            { label: "Download",    icon: Download,   path: "" },
          ].map(({ label, icon: Icon, path }) => (
            <button
              key={label}
              onClick={() => { if (path) router.push(path); setShowMobileMenu(false); }}
              style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", borderRadius: "8px", border: "none", background: "transparent", color: theme.text, fontSize: "13px", cursor: "pointer" }}
            >
              <Icon size={16} /> {label}
            </button>
          ))}

          <button
            onClick={() => { setShowMobileMenu(false); setShowLogoutModal(true); }}
            style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", borderRadius: "8px", border: "none", background: "transparent", color: "#e53e3e", fontSize: "13px", cursor: "pointer" }}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      )}

      {/* ── Logout Modal ── */}
      {showLogoutModal && (
        <div style={{ position: "fixed", inset: 0, zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.4)" }}>
          <div style={{ width: "290px", borderRadius: "16px", background: "#fff", padding: "24px", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
            <h2 style={{ fontSize: "17px", fontWeight: "600", margin: "0 0 8px 0" }}>Logout?</h2>
            <p style={{ fontSize: "13px", color: "#888", margin: "0 0 20px 0" }}>You will be signed out of your account.</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => setShowLogoutModal(false)} style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "1px solid #ddd", background: "#fff", cursor: "pointer", fontSize: "14px" }}>
                Cancel
              </button>
              <button onClick={handleLogout} style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "none", background: "#e53e3e", color: "#fff", cursor: "pointer", fontSize: "14px", fontWeight: "500" }}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}