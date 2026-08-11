"use client";

import {
  Search,
  QrCode,
  ShoppingCart,
  Bell,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2 min-w-fit">
          <img
            src="/apnidigilogo.png"
            alt="Apni Digi"
            className="h-8 w-8"
          />

          <h1 className="font-bold text-xl text-purple-700">
            Apni Digi
          </h1>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-xl relative">

          <Input
            placeholder="Search dealer, shop or product..."
            className="pr-12"
          />

          <Button
            size="icon"
            className="absolute right-0 buttom-5 h-8 w-8"
          >
            <Search size={16} />
          </Button>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          <Button
            variant="outline"
            className="hidden md:flex"
          >
            <QrCode className="mr-2 h-4 w-4" />
            Scan QR
          </Button>

          <Button
            size="icon"
            variant="ghost"
          >
            <ShoppingCart size={18} />
          </Button>

          <Button
            size="icon"
            variant="ghost"
          >
            <Bell size={18} />
          </Button>

          <Button variant="outline">
            <User className="mr-2 h-4 w-4" />
            Login / Signup
          </Button>

        </div>

      </div>
    </header>
  );
}