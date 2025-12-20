import React, { useState } from 'react';
import { MoreVertical, ChevronDown } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const WalletDashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItems, setSelectedItems] = useState([]);

  // Wallet statistics
  const walletStats = {
    balance: 564,
    totalDeposit: 5644,
    totalInvest: 800
  };

  // Spending data for chart
  const spendingAmount = 564.4;
  
  // Chart data
  const chartData = [
    { month: 'Jan', amount: 200 },
    { month: 'Feb', amount: 180 },
    { month: 'Mar', amount: 250 },
    { month: 'Apr', amount: 220 },
    { month: 'May', amount: 280 },
    { month: 'Jun', amount: 240 },
    { month: 'Jul', amount: 300 },
    { month: 'Aug', amount: 260 },
    { month: 'Sep', amount: 290 },
    { month: 'Oct', amount: 230 },
    { month: 'Nov', amount: 270 },
    { month: 'Dec', amount: 250 }
  ];

  // Transaction history
  const transactions = [
    { id: 1, description: 'Home Rent', date: '26/4/2025', amount: 1000 },
    { id: 2, description: 'Home Rent', date: '26/4/2025', amount: 1000 },
    { id: 3, description: 'Home Rent', date: '26/4/2025', amount: 1000 },
    { id: 4, description: 'Home Rent', date: '26/4/2025', amount: 1000 },
    { id: 5, description: 'Home Rent', date: '26/4/2025', amount: 1000 }
  ];

  const handleSelectItem = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-yellow-400 px-3 py-1.5 rounded shadow-lg">
          <p className="text-sm font-semibold text-gray-900">
            ${payload[0].value}k
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 sm:p-4">
      <div className=" space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h1 className="text-md font-bold text-gray-900">My wallet</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Your Balance */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Your Balance</h3>
            <p className="text-3xl font-bold text-gray-900">${walletStats.balance}</p>
          </div>

          {/* Total Deposit */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Deposit</h3>
            <p className="text-3xl font-bold text-gray-900">${walletStats.totalDeposit}</p>
          </div>

          {/* Total Invest */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Invest</h3>
            <p className="text-3xl font-bold text-gray-900">${walletStats.totalInvest}</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Spent This Day Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h3 className="text-lg font-bold text-gray-900">Spent This Day</h3>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setActiveFilter('deposit')}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === 'deposit'
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Deposit
                </button>
                <button
                  onClick={() => setActiveFilter('invest')}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === 'invest'
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Invest
                </button>
                <button
                  onClick={() => setActiveFilter('all')}
                  className="flex items-center gap-1 px-4 py-1.5 rounded-lg text-sm font-medium bg-white text-green-500 border border-green-500 hover:bg-green-50 transition-colors"
                >
                  All
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-3xl font-bold text-gray-900">${spendingAmount}</p>
            </div>

            {/* Chart using Recharts */}
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fef08a" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#fef08a" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                  />
                  <YAxis hide />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="#facc15" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorAmount)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* History Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900">History</h3>
              <button className="text-sm font-medium text-green-500 hover:text-green-600 transition-colors">
                Sell All
              </button>
            </div>

            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(transaction.id)}
                    onChange={() => handleSelectItem(transaction.id)}
                    className="w-4 h-4 rounded border-gray-300 text-green-500 focus:ring-green-500 cursor-pointer"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-sm text-gray-600 hidden sm:inline">{transaction.date}</span>
                    <span className="font-semibold text-gray-900 w-16 text-right">
                      {transaction.amount}$
                    </span>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {selectedItems.length > 0 && (
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700 font-medium">
                  {selectedItems.length} item{selectedItems.length > 1 ? 's' : ''} selected
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;