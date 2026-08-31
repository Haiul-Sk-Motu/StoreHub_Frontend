import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Tags,
  Warehouse,
  ReceiptText,
  Settings,
  LogOut,
  Store,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-800 bg-gray-950 text-white">
      <div className="flex h-full flex-col">

        {/* Logo */}
        <div className="flex h-20 items-center gap-3 border-b border-gray-800 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
            <Store size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold">StoreHub</h1>
            <p className="text-xs text-gray-500">POS System</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-4 py-6">

          <NavItem
            icon={<LayoutDashboard size={19} />}
            label="Dashboard"
            active
          />

          <NavItem
            icon={<ShoppingCart size={19} />}
            label="Sales"
          />

          <NavItem
            icon={<Package size={19} />}
            label="Products"
          />

          <NavItem
            icon={<Tags size={19} />}
            label="Categories"
          />

          <NavItem
            icon={<Warehouse size={19} />}
            label="Inventory"
          />

          <NavItem
            icon={<ReceiptText size={19} />}
            label="Invoices"
          />

        </nav>

        {/* Bottom Menu */}
        <div className="border-t border-gray-800 p-4 space-y-1">

          <NavItem
            icon={<Settings size={19} />}
            label="Settings"
          />

          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-400 transition hover:bg-red-500/10 hover:text-red-400">
            <LogOut size={19} />
            <span>Logout</span>
          </button>

        </div>

      </div>
    </aside>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
        active
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
          : "text-gray-400 hover:bg-gray-800 hover:text-white"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default Sidebar;