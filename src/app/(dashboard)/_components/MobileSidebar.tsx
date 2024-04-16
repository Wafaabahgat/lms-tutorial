import { Sheet, SheetTrigger,SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { FC } from "react";
import Sidebar from "./sidebar";

interface MobileSidebarProps {}

const MobileSidebar: FC<MobileSidebarProps> = () => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4 md:hidden hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white">
        <Sidebar/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
