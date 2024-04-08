import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { FC } from "react";
import { UsePathname, useRouter } from "next/navigation";

interface SidebarItemsProps {
  icon: LucideIcon;
  href: string;
  label: string;
}

const SidebarItems: FC<SidebarItemsProps> = ({ icon: Icon, href, label }) => {
  const pathname = UsePathname();
  const router = useRouter();
  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button onClick={onClick}>
      <div className={cn(" flex items-center gap-x-2 ")} >
        <Icon size={22} className="flex items-center" />
        {label}
      </div>
    </button>
  );
};

export default SidebarItems;
