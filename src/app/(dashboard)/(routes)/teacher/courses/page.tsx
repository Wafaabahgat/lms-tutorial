import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

interface CoursesPageProps {}

const CoursesPage: FC<CoursesPageProps> = () => {
  return (
    <div className="p-6">
      <Link href="/teacher/create">
        <Button>New Courses</Button>
      </Link>
    </div>
  );
};

export default CoursesPage;
