import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const orders = [
  { id: "#1234", customer: "Rahul Kumar",  product: "Samsung TV",          amount: "₹2,450", status: "Delivered", date: "19 May" },
  { id: "#1233", customer: "Amit Singh",   product: "Whirlpool Fridge",    amount: "₹1,650", status: "Ongoing",   date: "19 May" },
  { id: "#1232", customer: "Neha Verma",   product: "Voltas AC",           amount: "₹3,200", status: "Pending",   date: "17 May" },
  { id: "#1231", customer: "Pooja Patel",  product: "LG Washing Machine",  amount: "₹2,800", status: "Delivered", date: "16 May" },
];

export default function RecentOrders() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 overflow-x-auto">
        <table className="w-full text-[11px] min-w-[460px]">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-1">ID</th>
              <th className="text-left py-2 px-1">Customer</th>
              <th className="text-left py-2 px-1 hidden sm:table-cell">Product</th>
              <th className="text-left py-2 px-1">Amount</th>
              <th className="text-left py-2 px-1">Status</th>
              <th className="text-left py-2 px-1 hidden sm:table-cell">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2 px-1">{order.id}</td>
                <td className="py-2 px-1 truncate max-w-[80px]">{order.customer}</td>
                <td className="py-2 px-1 truncate max-w-[80px] hidden sm:table-cell">{order.product}</td>
                <td className="py-2 px-1">{order.amount}</td>
                <td className="py-2 px-1">
                  <span className={`px-1.5 py-0.5 rounded text-[9px] ${
                    order.status === "Delivered" ? "bg-green-500/20 text-green-400" :
                    order.status === "Ongoing"   ? "bg-blue-500/20 text-blue-400"  :
                                                   "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-2 px-1 hidden sm:table-cell">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}