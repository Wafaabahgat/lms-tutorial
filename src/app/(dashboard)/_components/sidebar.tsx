import { FC } from "react";
import Logo from "./Logo";
import SidebarRoutes from "./Sidebar-Routes";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <div className="flex flex-col h-full border-r-0 bg-white overflow-y-auto shadow-sm">
      <div className="p-4">
        <Logo />
      </div>
      <div className="w-full flex flex-col">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
