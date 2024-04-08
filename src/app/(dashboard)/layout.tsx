import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex flex-col w-56 z-50 fixed inset-y-0">
        <Sidebar />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default DashboardLayout;
