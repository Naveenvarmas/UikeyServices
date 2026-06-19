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
  Package,
  ChevronDown,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import path from "path";


interface MenuItem {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
  path: string;
}

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [productsOpen, setProductsOpen] = useState(
    pathname.startsWith("/dashboard/products")
  );
  const [ordersOpen, setOrdersOpen] = useState(
  pathname.startsWith("/dashboard/orders")
);
  const [customers, setCustomers] = useState(
  pathname.startsWith("/dashboard/customers")
);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/");
  };

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return pathname === "/dashboard";
    }

    return pathname.startsWith(path);
  };

  const menu: MenuItem[] = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Subscription",
      icon: Building2,
      path: "/dashboard/subscriptions",
    },
    {
      name: "Images",
      icon: Image,
      path: "/dashboard/upload-image",
    },
    {
      name: "Inquiries",
      icon: MessageSquare,
      path: "/dashboard/inquiries",
    },
    {
      name: "QR Details",
      icon: QrCode,
      path: "/dashboard/generate-batchs",
    },
    {
      name: "Profile",
      icon: User,
      path: "/dashboard/profiles",
    },
    {
      name: "Feedback",
      icon: MessageCircle,
      path: "/dashboard/feedback",
    },
  ];

  const productRoutes = [
    {
      name: "All Products",
      path: "/dashboard/products",
    },
    {
      name: "Add Product",
      path: "/dashboard/products/add",
    },
    {
      name: "Categories",
      path: "/dashboard/products/categories",
    },
    // {
    //   name: "Brands",
    //   path: "/dashboard/products/brands",
    // },
    {
      name: "Product Overview",
      path: "/dashboard/products/overview",
    },
    // {
    //   name: "Home Page Products",
    //   path: "/dashboard/products/home-products",
    // },
    // {
    //   name: "Saved For Home Page",
    //   path: "/dashboard/products/saved",
    // },
  ];
  const orderRoutes = [
  {
    name: "All Orders",
    path: "/dashboard/orders",
  },
  {
    name: "Booked Orders",
    path: "/dashboard/orders/booked",
  },
  {
    name: "Ongoing Orders",
    path: "/dashboard/orders/ongoing",
  },
  {
    name: "Delivered Orders",
    path: "/dashboard/orders/delivered",
  },
  {
    name: "Cancelled Orders",
    path: "/dashboard/orders/cancelled",
  },
  {
    name: "Order Returns",
    path: "/dashboard/orders/returns",
  },
];
const customersRoutes = [
   {
    name: "All Customers",
    path: "/dashboard/customers",
  },
  {
    name: "Customers Oders",
    path: "/dashboard/customers/oders",
  },
]
  return (
    <>
      <div
        className="
          h-screen
          w-64
          p-4
          flex
          flex-col
          border-r
          shadow-sm
          bg-[var(--card)]
          text-[var(--text)]
          border-[var(--border)]
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
          <img
            src="/images/apnidigi_new.png"
            alt="Apni Digi"
            className="w-8 h-8 object-contain"
          />

          <h1 className="text-xl font-bold bg-gradient-to-r from-[#5f1bb3] to-[#8e2de2] bg-clip-text text-transparent">
            Apni Digi
          </h1>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-1 overflow-y-auto">
          {menu.slice(0, 1).map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => router.push(item.path)}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all
                  ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-[#2b0a6b] via-[#5f1bb3] to-[#8e2de2] text-white"
                      : "hover:bg-[var(--border)]"
                  }
                `}
              >
                <Icon size={18} />
                {item.name}
              </button>
            );
          })}

          {/* Products Dropdown */}
          <button
            onClick={() => setProductsOpen(!productsOpen)}
            className={`
              flex items-center justify-between
              px-3 py-2 rounded-lg text-sm font-medium transition-all
              ${
                pathname.startsWith("/dashboard/products")
                  ? "bg-gradient-to-r from-[#2b0a6b] via-[#5f1bb3] to-[#8e2de2] text-white"
                  : "hover:bg-[var(--border)]"
              }
            `}
          >
            <div className="flex items-center gap-3">
              <Package size={18} />
              Products
            </div>

            {productsOpen ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>

          {productsOpen && (
            <div className="ml-6 flex flex-col gap-1">
              {productRoutes.map((route) => (
                <button
                  key={route.path}
                  onClick={() => router.push(route.path)}
                  className={`
                    text-left px-3 py-2 rounded-md text-sm transition-all
                    ${
                      pathname === route.path
                        ? "bg-purple-100 text-purple-700 font-medium"
                        : "hover:bg-[var(--border)]"
                    }
                  `}
                >
                  {route.name}
                </button>
              ))}
            </div>
          )}
          {/* Orders Dropdown */}
<button
  onClick={() => setOrdersOpen(!ordersOpen)}
  className={`
    flex items-center justify-between
    px-3 py-2 rounded-lg text-sm font-medium transition-all
    ${
      pathname.startsWith("/dashboard/orders")
        ? "bg-gradient-to-r from-[#2b0a6b] via-[#5f1bb3] to-[#8e2de2] text-white"
        : "hover:bg-[var(--border)]"
    }
  `}
>
  <div className="flex items-center gap-3">
    <ShoppingCart size={18} />
    Orders
  </div>

  {ordersOpen ? (
    <ChevronDown size={16} />
  ) : (
    <ChevronRight size={16} />
  )}
</button>

{ordersOpen && (
  <div className="ml-6 flex flex-col gap-1">
    {orderRoutes.map((route) => (
      <button
        key={route.path}
        onClick={() => router.push(route.path)}
        className={`
          text-left px-3 py-2 rounded-md text-sm transition-all
          ${
            pathname === route.path
              ? "bg-purple-100 text-purple-700 font-medium"
              : "hover:bg-[var(--border)]"
          }
        `}
      >
        {route.name}
      </button>
    ))}
  </div>
)}
  
  {/* {customers oders} */}
  <button
  onClick={() => setCustomers(!customers)}
  className={`
    flex items-center justify-between
    px-3 py-2 rounded-lg text-sm font-medium transition-all
    ${
      pathname.startsWith("/dashboard/customers")
        ? "bg-gradient-to-r from-[#2b0a6b] via-[#5f1bb3] to-[#8e2de2] text-white"
        : "hover:bg-[var(--border)]"
    }
  `}
>
  <div className="flex items-center gap-3">
    <ShoppingCart size={18} />
    Customers
  </div>

  {customers ? (
    <ChevronDown size={16} />
  ) : (
    <ChevronRight size={16} />
  )}
</button>

{customers && (
  <div className="ml-6 flex flex-col gap-1">
    {customersRoutes.map((route) => (
      <button
        key={route.path}
        onClick={() => router.push(route.path)}
        className={`
          text-left px-3 py-2 rounded-md text-sm transition-all
          ${
            pathname === route.path
              ? "bg-purple-100 text-purple-700 font-medium"
              : "hover:bg-[var(--border)]"
          }
        `}
      >
        {route.name}
      </button>
    ))}
  </div>
)}
          {menu.slice(1).map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => router.push(item.path)}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all
                  ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-[#2b0a6b] via-[#5f1bb3] to-[#8e2de2] text-white"
                      : "hover:bg-[var(--border)]"
                  }
                `}
              >
                <Icon size={18} />
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <button
          onClick={() => setShowLogoutModal(true)}
          className="mt-auto flex items-center gap-2 px-2 py-2 text-sm hover:text-red-500"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-80 rounded-2xl bg-white p-6 text-center shadow-xl">
            <h2 className="text-lg font-semibold mb-2">
              Logout?
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              You will be signed out of your account.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 border rounded-lg py-2"
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                className="flex-1 rounded-lg py-2 bg-red-500 text-white"
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