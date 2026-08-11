import { QrCode } from "lucide-react";

export default function QrButton() {
  return (
    <button className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-violet-600 text-white shadow-lg flex items-center justify-center hover:scale-105 transition">
      <QrCode size={24} />
    </button>
  );
}