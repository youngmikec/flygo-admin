import Navbar from "../../app/Navbar";
import SidebarMenu from "../../app/SideBarMenu";

const DashboardLayout = ({ children }: any) => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="flex flex-row">
          <div className="hidden md:block md:w-2/6 lg:block lg:w-2/12">
            <SidebarMenu/>
          </div>
          <div className="flex-grow px-12 py-6">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout;