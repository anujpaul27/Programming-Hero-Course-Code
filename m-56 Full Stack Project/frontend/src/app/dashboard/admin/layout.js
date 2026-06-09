// Make sure this exists with your Tailwind + DaisyUI setup

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-white min-h-screen">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />

          {/* Drawer Content (Main Page Area) */}
          <div className="drawer-content">{children}</div>

          {/* Sidebar */}
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <div className="w-60 min-h-full bg-zinc-900 border-r border-zinc-800 p-4">
              <ul className="menu text-zinc-300 space-y-1">
                <li>
                  <Link
                    href="/dashboard/admin"
                    className="hover:bg-zinc-800 active:bg-zinc-700 py-3"
                  >
                    <HomeIcon size={20} />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/admin/jobs-list"
                    className="hover:bg-zinc-800 active:bg-zinc-700 py-3"
                  >
                    <BriefcaseIcon size={20} />
                    <span>Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/admin/job-post"
                    className="hover:bg-zinc-800 active:bg-zinc-700 py-3"
                  >
                    <BriefcaseIcon size={20} />
                    <span>Post a Job</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:bg-zinc-800 active:bg-zinc-700 py-3"
                  >
                    <UsersIcon size={20} />
                    <span>Users</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:bg-zinc-800 active:bg-zinc-700 py-3"
                  >
                    <ChartBarIcon size={20} />
                    <span>Analytics</span>
                  </a>
                </li>
                <li className="mt-8">
                  <a
                    href="#"
                    className="hover:bg-zinc-800 active:bg-zinc-700 py-3"
                  >
                    <SettingsIcon size={20} />
                    <span>Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
