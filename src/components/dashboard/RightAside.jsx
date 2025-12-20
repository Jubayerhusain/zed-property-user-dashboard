
import { Copy, ArrowUp, FileText } from "lucide-react";

export default function RightAside() {
  const balanceData = {
    paymentId: "45AI56454",
    amount: "$564,444.000",
    growth: "+15.5%",
  };

  const messages = [
    {
      id: 1,
      name: "Jenny Rio.",
      date: "Sep 24, 2025",
      title: "Work inquiry from google.",
      message:
        "Hello, This is Jenny from google. We’re the largest online platform offer...",
      hasDocument: true,
    },
    {
      id: 2,
      name: "Jenny Rio.",
      date: "Sep 24, 2025",
      title: "Work inquiry from google.",
      message:
        "Hello, This is Jenny from google. We’re the largest online platform offer...",
      hasDocument: false,
    },
    {
      id: 3,
      name: "Jenny Rio.",
      date: "Sep 24, 2025",
      title: "Work inquiry from google.",
      message:
        "Hello, This is Jenny from google. We’re the largest online platform offer...",
      hasDocument: false,
    },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">
          Your Balance
        </h3>

        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>Payment ID : {balanceData.paymentId}</span>
            <Copy size={16} className="cursor-pointer" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {balanceData.amount}
          </h2>

          <div className="flex items-center gap-2 text-sm">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-white">
              <ArrowUp size={14} />
            </span>
            <span className="text-green-500 font-medium">
              {balanceData.growth}
            </span>
            <span className="text-gray-500">than last week</span>
          </div>
        </div>

        <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-lime-400 to-green-500 py-3 text-sm font-semibold text-white hover:opacity-90 transition">
          Top up Balance
        </button>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">
          Recent Message
        </h3>

        <div className="space-y-4">
          {messages.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-xl p-4"
            >
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="font-medium text-gray-900">
                  {item.name}
                </span>
                <span className="text-gray-400">{item.date}</span>
              </div>

              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                {item.title}
              </h4>

              <p className="text-sm text-gray-500 mb-3">
                {item.message}
              </p>

              {item.hasDocument && (
                <span className="inline-flex items-center gap-2 rounded-lg bg-white border px-3 py-1 text-xs text-gray-600">
                  <FileText size={14} />
                  Document
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
