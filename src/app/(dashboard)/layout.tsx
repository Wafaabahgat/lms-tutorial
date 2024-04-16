import Navbar from "./_components/Navbar";
import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="md:pl-56 w-full fixed h-[80px] inset-y-0 z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex flex-col h-full w-56 z-50 fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[85px] h-full">{children}</main>
    </div>
  );
};
export default DashboardLayout;
