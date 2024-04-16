"use client";

import { UserButton } from "@clerk/nextjs";
import { FC } from "react";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

interface NavbarRoutesProps {}

const NavbarRoutes: FC<NavbarRoutesProps> = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("chapter");
  return (
    <div className="flex gap-x-2 ml-auto rounded-full">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button size="sm" variant="ghost" >
            <LogOut className="w-4 h-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button>Teacher link</Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavbarRoutes;
