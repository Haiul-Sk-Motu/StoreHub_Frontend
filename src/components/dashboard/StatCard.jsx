function StatCard({
  title,
  value,
  change,
  icon,
  positive = true,
  description,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

      {/* Top */}
      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
            {value}
          </h3>
        </div>

        {/* Icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          {icon}
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-4 flex items-center gap-2">

        {change && (
          <span
            className={`text-xs font-semibold ${
              positive ? "text-emerald-600" : "text-red-500"
            }`}
          >
            {positive ? "↑" : "↓"} {change}
          </span>
        )}

        <span className="text-xs text-gray-400">
          {description || "from last month"}
        </span>

      </div>

    </div>
  );
}

export default StatCard;