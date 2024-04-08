import { FC } from "react";
import SidebarItems from "./sidebar-items";
import { Compass, Layout } from "lucide-react";

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

const SidebarRoutes: FC<SidebarRoutesProps> = () => {
  const routes = guestRoutes;
  return (
    <div>
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
