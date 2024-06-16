import { FaPlus } from "react-icons/fa6";



import DashboardLayout from "../../../components/Layout/DashboardLayout"
import BasicTable from "../../../components/Table/BasicTable";
import TableWithTab from "../../../components/Table/TableWithTab"
import AppButton from "../../../components/app/AppButton";


const BookingsPage = () => {
  const tabs = ['Flight', 'Hotel'];
  return (
    <>
      <DashboardLayout>
        <div className="w-full pb-8">
          <div className="flex justify-between mb-8">
            <div className="mb-4">
              <h1 className="text-textBlack text-2xl font-bold lato-bold mb-4">All Bookings</h1>
              <p className="text-textBlack">over 100 order(s)</p>
            </div>

            <div className="flex justify-start gap-4">
              <AppButton 
                width="max"
                fill="outline"
                btnText="Export"
                bgColor="gray"
                type="submit"
              />
              <AppButton 
                width="max"
                fill="fill"
                btnIcon={<FaPlus size={20} className="text-white" />}
                iconPosition="left"
                btnText="Add New"
                bgColor="blue"
                type="submit"
              />
            </div>
          </div>

          <BasicTable tableTab={true} tableTabs={tabs}/>
        </div>
      </DashboardLayout>
    </>
  )
}

export default BookingsPage
