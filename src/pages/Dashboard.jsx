import {
  IndianRupee,
  TrendingUp,
  Package,
  AlertTriangle,
  ArrowUpRight,
  MoreHorizontal,
} from "lucide-react";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import StatCard from "@/components/dashboard/StatCard";
import { useSelector } from "react-redux";

function Dashboard() {

    const user = useSelector((state)=>state.auth.user)
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="ml-64">

        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="p-8">


          {/* Statistics */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <StatCard
              title="Today's Sales"
              value="₹12,450"
              change="12.5%"
              positive={true}
              description="from yesterday"
              icon={<IndianRupee size={21} />}
            />

            <StatCard
              title="Total Sales"
              value="₹2,45,800"
              change="8.2%"
              positive={true}
              description="this month"
              icon={<TrendingUp size={21} />}
            />

            <StatCard
              title="Products"
              value="1,248"
              change="5.4%"
              positive={true}
              description="active products"
              icon={<Package size={21} />}
            />

            <StatCard
              title="Low Stock"
              value="18"
              change="2.1%"
              positive={false}
              description="need attention"
              icon={<AlertTriangle size={21} />}
            />

          </div>


          {/* Middle Section */}
          <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

            {/* Sales Overview */}
            <div className="xl:col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Sales Overview
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Your sales performance
                  </p>
                </div>

                <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 outline-none focus:border-indigo-500">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>This Year</option>
                </select>

              </div>


              {/* Chart Placeholder */}
              <div className="mt-8 flex h-64 items-end gap-3">

                {[45, 60, 42, 75, 55, 82, 68, 90, 65, 78, 88, 70].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="group flex h-full flex-1 items-end"
                    >
                      <div
                        className="w-full rounded-t-md bg-indigo-500 transition-all group-hover:bg-indigo-600"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  )
                )}

              </div>

              {/* Months */}
              <div className="mt-3 flex justify-between text-xs text-gray-400">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>

            </div>


            {/* Low Stock */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Low Stock
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Products need attention
                  </p>
                </div>

                <button className="text-gray-400 hover:text-gray-700">
                  <MoreHorizontal size={20} />
                </button>

              </div>


              <div className="mt-6 space-y-5">

                <StockItem
                  name="Wireless Mouse"
                  stock="3 left"
                />

                <StockItem
                  name="Keyboard"
                  stock="5 left"
                />

                <StockItem
                  name="USB Cable"
                  stock="7 left"
                />

                <StockItem
                  name="Headphones"
                  stock="8 left"
                />

              </div>


              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-50 py-2.5 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50">
                View Inventory
                <ArrowUpRight size={16} />
              </button>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}


/* Low Stock Item */
function StockItem({ name, stock }) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
          <AlertTriangle size={17} />
        </div>

        <div>
          <p className="text-sm font-medium text-gray-900">
            {name}
          </p>

          <p className="text-xs text-gray-500">
            Inventory
          </p>
        </div>

      </div>

      <span className="text-sm font-semibold text-orange-500">
        {stock}
      </span>

    </div>
  );
}


/* Recent Sale Row */
function SaleRow({
  invoice,
  date,
  items,
  payment,
  amount,
}) {
  return (
    <tr className="transition hover:bg-gray-50">

      <td className="px-6 py-4 font-medium text-indigo-600">
        {invoice}
      </td>

      <td className="px-6 py-4 text-gray-500">
        {date}
      </td>

      <td className="px-6 py-4 text-gray-700">
        {items}
      </td>

      <td className="px-6 py-4">
        <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
          {payment}
        </span>
      </td>

      <td className="px-6 py-4 text-right font-semibold text-gray-900">
        {amount}
      </td>

    </tr>
  );
}

export default Dashboard;