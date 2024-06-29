import { useSelector } from "react-redux";
import Navbar from "../../app/Navbar";
import SidebarMenu from "../../app/SideBarMenu";
import { RootState } from "../../../store";
import AppModalComp from "../../app/AppModal";
import LogoutModalComp from "../../app/LogoutModal";

const DashboardLayout = ({ children }: any) => {
  const showLogoutModal = useSelector((state: RootState) => state.logoutModal.displayModal)
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

      {
        showLogoutModal && (
          <AppModalComp title="Logout Modal" width="sm">
            <LogoutModalComp />
          </AppModalComp>
        )
      }
    </>
  )
}

export default DashboardLayout;