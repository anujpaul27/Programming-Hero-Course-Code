import {
  BriefcaseIcon,
  ChartBarIcon,
  HomeIcon,
  SettingsIcon,
  Sidebar,
  User2Icon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  // Mock user
  const user = {
    name: "Alex Chen",
    email: "alex@linkup.com",
    avatar: "https://i.pravatar.cc/150?u=alex",
    role: "activeRole",
  };
  return (
    <div className="drawer lg:drawer-open mt-5 ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <Sidebar />
          </label>
          <p className="ml-2 text-xl font-bold">LinkUp Dashboard</p>
        </nav>
        {/* Page content here */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-10/12 mx-auto ">
          {[
            {
              label: "Total Users",
              value: "12,458",
              icon: UsersIcon,
              change: "+12%",
            },
            {
              label: "Active Jobs",
              value: "843",
              icon: BriefcaseIcon,
              change: "+5%",
            },
            {
              label: "Applications",
              value: "3,291",
              icon: ChartBarIcon,
              change: "-2%",
            },
            {
              label: "Companies",
              value: "427",
              icon: User2Icon,
              change: "+18%",
            },
          ].map((stat, i) => (
            <div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-800 rounded-3xl p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="flex justify-between items-start">
                <stat.icon className="w-5 h-5 text-rose-400" />
                <span className="text-emerald-400 text-sm font-medium">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-40">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* Home  */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                <HomeIcon />
                <span className="is-drawer-close:hidden">Homepage</span>
              </button>
            </li>
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Jobs"
              >
                <BriefcaseIcon />
                <span className="is-drawer-close:hidden">Jobs</span>
              </button>
            </li>
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="post a jobs"
              >
                <BriefcaseIcon />
                <span className="is-drawer-close:hidden">Post a job</span>
              </button>
            </li>

            {/* Settings  */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <SettingsIcon />
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
