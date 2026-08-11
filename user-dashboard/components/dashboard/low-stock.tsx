import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const products = [
  {
    name: "Samsung TV",
    stock: 3,
    status: "Low",
  },
  {
    name: "Whirlpool Fridge",
    stock: 2,
    status: "Low",
  },
  {
    name: "Voltas AC",
    stock: 1,
    status: "Low",
  },
  {
    name: "LG Washer",
    stock: 3,
    status: "Low",
  },
];

export default function LowStock() {
  return (
    <Card className="h-[300px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">
          Low Stock Alerts
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-2">
          {products.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center border-b pb-2 text-xs"
            >
              <div>
                <p className="font-medium">
                  {item.name}
                </p>

                <p className="text-[10px] text-gray-500">
                  Stock: {item.stock}
                </p>
              </div>

              <span className="text-orange-500 text-[10px] font-medium">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}