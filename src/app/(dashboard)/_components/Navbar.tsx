import { FC } from "react";
import MobileSidebar from "./MobileSidebar";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="p-4 flex items-center border-b h-full bg-white shadow-sm">
      <MobileSidebar />
    </div>
  );
};

export default Navbar;
