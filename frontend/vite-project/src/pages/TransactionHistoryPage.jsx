import React from "react";
import Navbar from "./Navbar";

function TransactionHistoryPage() {
  const transactions = [
    {
      id: 1,
      date: "2025-04-15",
      type: "Purchase",
      item: "Tomatoes",
      amount: "₹500",
      status: "Completed",
    },
    {
      id: 2,
      date: "2025-04-12",
      type: "Sale",
      item: "Rice",
      amount: "₹1200",
      status: "Completed",
    },
    {
      id: 3,
      date: "2025-04-10",
      type: "Barter",
      item: "Wheat → Potatoes",
      amount: "-",
      status: "Pending",
    },
  ];

  return (
    <div className="transaction-history-page bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
          📜 Transaction History
        </h1>

        <p className="text-lg text-gray-700 text-center mb-12">
          View your past transactions, including purchases, sales, and bartering.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Transaction Type</th>
                <th className="py-3 px-4 text-left">Item</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b">
                    <td className="py-3 px-4 text-gray-700">{transaction.date}</td>
                    <td className="py-3 px-4 text-gray-700">{transaction.type}</td>
                    <td className="py-3 px-4 text-gray-700">{transaction.item}</td>
                    <td className="py-3 px-4 text-gray-700">{transaction.amount}</td>
                    <td
                      className={`py-3 px-4 ${transaction.status === "Completed"
                          ? "text-green-600"
                          : "text-yellow-500"
                        } font-semibold`}
                    >
                      {transaction.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="py-6 text-center text-gray-500 font-medium"
                  >
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistoryPage;
