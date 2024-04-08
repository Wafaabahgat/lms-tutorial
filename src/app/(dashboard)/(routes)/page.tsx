import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/"/>
      <div>hello</div>
    </div>
  );
}
