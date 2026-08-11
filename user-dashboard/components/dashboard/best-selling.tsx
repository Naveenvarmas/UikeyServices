import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const products = [
  {
    name: "Samsung TV",
    sales: 120,
  },
  {
    name: "LG Washer",
    sales: 95,
  },
  {
    name: "Voltas AC",
    sales: 82,
  },
  {
    name: "Whirlpool",
    sales: 74,
  },
];

export default function BestSelling() {
  return (
    <Card className="h-[260px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">
          Best Selling
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-2">
          {products.map((item, index) => (
            <div
              key={item.name}
              className="flex items-center justify-between border-b pb-2 text-xs"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-purple-500">
                  #{index + 1}
                </span>

                <span className="truncate">
                  {item.name}
                </span>
              </div>

              <span className="text-[10px] text-gray-500">
                {item.sales} sold
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}