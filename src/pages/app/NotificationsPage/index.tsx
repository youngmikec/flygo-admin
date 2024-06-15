import DashboardLayout from "../../../components/Layout/DashboardLayout";
import NotificationsTab from "../../../components/app/NotificationsTab";




const NotificationsPage = () => {
  return (
    <>
      <DashboardLayout>
        <div className="w-full">
          <div className="mb-4">
            <h1 className="text-textBlack text-2xl font-bold lato-bold mb-4">Notifications</h1>
            <p className="text-textBlack">Over 100 notification(s)</p>
          </div>

          <NotificationsTab />
        </div>
      </DashboardLayout>
    </>
  )
}

export default NotificationsPage;

