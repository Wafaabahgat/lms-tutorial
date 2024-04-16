"use client";

import { FC } from "react";
import SidebarItems from "./sidebar-items";
import { Compass, Layout, List, BarChart } from "lucide-react";
import { usePathname } from "next/navigation";

interface SidebarRoutesProps {}

const guestRoutes = [
  {
    icon: Layout,
    href: "/",
    label: "Dashboard",
  },
  {
    icon: Compass,
    href: "/search",
    label: "Browser",
  },
];

const teacherRoutes = [
  {
    icon: List,
    href: "/teacher/courses",
    label: "Courses",
  },
  {
    icon: BarChart,
    href: "/teacher/analytics",
    label: "Analytics",
  },
];

const SidebarRoutes: FC<SidebarRoutesProps> = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="w-full flex flex-col">
      {routes.map((route) => (
        <SidebarItems
          key={route.href}
          icon={route.icon}
          href={route.href}
          label={route.label}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
