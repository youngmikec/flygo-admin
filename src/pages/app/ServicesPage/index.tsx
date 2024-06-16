import { FaPlus } from "react-icons/fa";

import { Stat } from "../../../models";
import AppButton from "../../../components/app/AppButton";
import DashboardLayout from "../../../components/Layout/DashboardLayout"
import BasicTable from "../../../components/Table/BasicTable";

//icons
import flightOverviewImg from '../../../assets/svg/flight.svg';
import bedGroupImg from '../../../assets/images/bed-circle.png';
import globeImg from '../../../assets/images/globe.png';
import StatisticsCard from "../../../components/app/StatisticsCard";


const ServicesPage = () => {
  const tabs = ['Flight', 'Hotel'];
  const dashboardStats: Stat[] = [
    {
      title: 'Total Flights',
      value: '$100k',
      imgUrl: flightOverviewImg
    },
    {
      title: 'Total Hotels',
      value: '100k',
      imgUrl: bedGroupImg
    },
    {
      title: 'Total Countries',
      value: '100k',
      imgUrl: globeImg
    },
  ];
  return (
    <>
      <DashboardLayout>
        <div className="w-full pb-8">
          <div className="flex justify-between mb-8">
            <div className="mb-4">
              <h1 className="text-textBlack text-2xl font-bold lato-bold mb-4">Manage your service</h1>
              <p className="text-textBlack">over 100 countries</p>
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

          {/* statistics section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 my-4">
            {
              dashboardStats.map((item: Stat, idx) => (
                <div key={idx}>
                  <StatisticsCard  
                    title={item.title} 
                    value={item.value} 
                    imgUrl={item.imgUrl} 
                  />
                </div>
              ))
            }
          </div>
          {/* statistics section */}

          <BasicTable tableTab={true} tableTabs={tabs}/>
        </div>
      </DashboardLayout>
    </>
  )
}

export default ServicesPage
