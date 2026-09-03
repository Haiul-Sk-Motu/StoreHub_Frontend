import { useState } from "react";
import { useSelector } from "react-redux";

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
  Users,
  UserPlus,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const user = useSelector((state) => state.auth.user);

  const [storeOpen, setStoreOpen] = useState(false);
  const [staffOpen, setStaffOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-800 bg-gray-950 text-white">
      <div className="flex h-full flex-col">

        <div className="flex h-20 items-center gap-3 border-b border-gray-800 px-6">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
            <Store size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold">
              StoreHub
            </h1>

            <p className="text-xs text-gray-500">
              POS System
            </p>
          </div>

        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-6">

          {/* Dashboard */}

          <NavItem
            icon={<LayoutDashboard size={19} />}
            label="Dashboard"
            active
          />

          {user?.role === "SUPER_ADMIN" && (
            <>

              <MenuItem
                icon={<Store size={19} />}
                label="Store Management"
                open={storeOpen}
                onClick={() => setStoreOpen(!storeOpen)}
              />

              {storeOpen && (
                <SubMenu>

                  <SubMenuItem
                    icon={<UserPlus size={16} />}
                    label="Create Store"
                    onClick={() => navigate("/store/CreateStore")} 
                  />

                  <SubMenuItem
                    icon={<Store size={16} />}
                    label="All Store"
                  />

                </SubMenu>
              )}

              <MenuItem
                icon={<Users size={19} />}
                label="Staff Management"
                open={staffOpen}
                onClick={() => setStaffOpen(!staffOpen)}
              />

              {staffOpen && (
                <SubMenu>

                  <SubMenuItem
                    icon={<UserPlus size={16} />}
                    label="Create Staff"
                  />

                  <SubMenuItem
                    icon={<Users size={16} />}
                    label="All Staff"
                  />

                </SubMenu>
              )}

            </>
          )}

        </nav>

        <div className="space-y-1 border-t border-gray-800 p-4">

          <NavItem
            icon={<Settings size={19} />}
            label="Settings"
          />

          <button
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-400 transition hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut size={19} />
            <span>
              Logout
            </span>
          </button>

        </div>

      </div>
    </aside>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
        active
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
          : "text-gray-400 hover:bg-gray-800 hover:text-white"
      }`}
    >
      {icon}

      <span>
        {label}
      </span>
    </button>
  );
}


/* ================================================= */
/* PARENT DROPDOWN MENU */
/* ================================================= */

function MenuItem({
  icon,
  label,
  open,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-400 transition hover:bg-gray-800 hover:text-white"
    >

      <div className="flex items-center gap-3">
        {icon}

        <span>
          {label}
        </span>
      </div>

      <ChevronDown
        size={17}
        className={`transition-transform duration-200 ${
          open ? "rotate-180" : ""
        }`}
      />

    </button>
  );
}


/* ================================================= */
/* SUB MENU CONTAINER */
/* ================================================= */

function SubMenu({ children }) {
  return (
    <div className="ml-5 space-y-1 border-l border-gray-700 pl-3">
      {children}
    </div>
  );
}


/* ================================================= */
/* SUB MENU ITEM */
/* ================================================= */

function SubMenuItem({
  icon,
  label,
  onClick
}) {
  return (
    <button onClick={onClick}
      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-gray-800 hover:text-white"
    >
      {icon}

      <span>
        {label}
      </span>
    </button>
  );
}


export default Sidebar;