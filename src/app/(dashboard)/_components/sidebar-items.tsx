"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { FC } from "react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemsProps {
  icon: LucideIcon;
  href: string;
  label: string;
}

const SidebarItems: FC<SidebarItemsProps> = ({ icon: Icon, href, label }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = "";

  (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
    // console.log("dfghjikolp;");
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-700 hover:bg-slate-300/20",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700/20"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon size={22} className="flex items-center" />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-50 border-2 border-sky-700 transition-all h-full",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};

export default SidebarItems;
