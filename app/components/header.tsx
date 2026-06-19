"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut, User, MessageCircle } from "lucide-react";

interface UserData {
  full_name?: string;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const userString = localStorage.getItem("user");

    if (userString) {
      setUser(JSON.parse(userString));
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
      <div className="flex justify-between items-center bg-gradient-to-r from-[#2b0a6b] via-[#5f1bb3] to-[#8e2de2] text-white px-6 py-3 rounded-xl shadow-md">
        <div
          className="flex items-center gap-3 relative"
          ref={dropdownRef}
        >
          <div
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold cursor-pointer"
          >
            {firstLetter}
          </div>

          <h2 className="font-semibold">
            Welcome, {fullName}
          </h2>

          {open && (
            <div className="absolute top-12 left-0 w-44 bg-white text-black rounded-lg shadow-lg border z-50">
              <button
                onClick={() => {
                  router.push("/profile");
                  setOpen(false);
                }}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <User size={16} />
                Profile
              </button>

              <button
                onClick={() => {
                  router.push("/Feedback");
                  setOpen(false);
                }}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <MessageCircle size={16} />
                Feedback
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  setShowLogoutModal(true);
                }}
                className="w-full flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>

        {/* ThemeToggle hata diya hai abhi */}
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-xl w-80 text-center">
            <h2 className="text-lg font-semibold mb-2">
              Logout?
            </h2>

            <p className="text-gray-500 mb-4">
              You will be signed out.
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 border rounded-lg py-2"
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                className="flex-1 bg-red-500 text-white rounded-lg py-2"
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