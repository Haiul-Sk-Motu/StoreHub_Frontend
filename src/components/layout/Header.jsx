import { Bell, ChevronDown, Search } from "lucide-react";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.auth.user);
  console.log("Dashboard user",user.name)

  return (
    <header className="sticky top-0 z-30 h-20 border-b border-gray-200 bg-white/95 backdrop-blur">

      <div className="flex h-full items-center justify-between px-8">

        {/* Search */}
        <div className="relative w-80">
            <h1 className="text-2xl font-bold text-gray-900">
              Good Morning, {user?.name} 👋
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Here's what's happening with your store today.
            </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Notification */}
          <button className="relative rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900">
            <Bell size={21} />

            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Divider */}
          <div className="h-8 w-px bg-gray-200"></div>

          {/* User */}
          <button className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition hover:bg-gray-100">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
              {user?.name?.charAt(0)?.toUpperCase() || "A"}
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-gray-900">
                {user?.name || "Admin"}
              </p>

              <p className="text-xs text-gray-500">
                {user?.role || "Administrator"}
              </p>
            </div>

            <ChevronDown size={16} className="text-gray-400" />

          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;