import {
  ShoppingCart,
  Bell,
  CreditCard,
  Users,
} from "lucide-react";

export const notificationGroups = [
  {
    date: "Today",
    notifications: [
      {
        id: 1,
        title: "New Order Received",
        description: "Order #12345 has been placed.",
        time: "2 min ago",
        read: false,
        icon: "shopping-cart",
        color: "bg-blue-100 text-blue-600",
      },
      {
        id: 2,
        title: "Payment Received",
        description: "₹2,500 payment credited.",
        time: "10 min ago",
        read: false,
        icon: "credit-card",
        color: "bg-green-100 text-green-600",
      },
    ],
  },

  {
    date: "Yesterday",
    notifications: [
      {
        id: 3,
        title: "New Customer",
        description: "Rahul joined your store.",
        time: "1 day ago",
        read: true,
        icon: "users",
        color: "bg-purple-100 text-purple-600",
      },
      {
        id: 4,
        title: "System Update",
        description: "New dashboard features added.",
        time: "1 day ago",
        read: true,
        icon: "bell",
        color: "bg-orange-100 text-orange-600",
      },
    ],
  },

  {
    date: "This Week",
    notifications: [
      {
        id: 5,
        title: "Inventory Alert",
        description: "Product stock is running low.",
        time: "3 days ago",
        read: true,
        icon: "bell",
        color: "bg-red-100 text-red-600",
      },
      {
        id: 6,
        title: "Weekly Report Ready",
        description: "Your sales report is available.",
        time: "5 days ago",
        read: true,
        icon: "credit-card",
        color: "bg-indigo-100 text-indigo-600",
      },
    ],
  },
];