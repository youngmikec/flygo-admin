import { useState } from 'react';


//images
import AlexImg from '../../../assets/images/alex.png';
import EzehImg from '../../../assets/images/ezeh.png';
import FavourImg from '../../../assets/images/favour.png';
import usersGroupImg from '../../../assets/images/users-group.png';
import flightGroupImg from '../../../assets/images/flight-circle.png';
import bedGroupImg from '../../../assets/images/bed-circle.png';

//svgs
import flightOverviewImg from '../../../assets/svg/flight.svg';

//components
import SelectField from "../../../components/form/SelectField";
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import LineChart from '../../../components/Charts/LineChart';
import BasicTable from '../../../components/Table/BasicTable';
import StatisticsCard from '../../../components/app/StatisticsCard';
import ProgressBar from '../../../components/app/ProgreeBar';
import CustomerDisplayCard from '../../../components/app/Customer/CustomerDisplayCard';


type Stat = {
  title: string;
  value: string;
  imgUrl: string;
}


const DashboardOverview = () => {
  const tabs: string[] = ['Flight Booking', 'Hotel Booking'];
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const dashboardStats: Stat[] = [
    {
      title: 'Total Earning',
      value: '$100k',
      imgUrl: flightOverviewImg
    },
    {
      title: 'Total Bookings',
      value: '200k',
      imgUrl: flightOverviewImg
    },
    {
      title: 'New Customers',
      value: '100k',
      imgUrl: usersGroupImg
    },
    {
      title: 'Total Customers',
      value: '100k',
      imgUrl: usersGroupImg
    },
  ];

  const customers = [
    {
      profileImg: AlexImg,
      name: 'Frank Lampard',
    },
    {
      profileImg: EzehImg,
      name: 'Mike Lampard',
    },
    {
      profileImg: FavourImg,
      name: 'Leon Lampard',
    },
  ]


  return (
    <>
      <DashboardLayout>
        {/* statistics section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
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


        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mb-4">
          <div className="">
            <div className="border-[1px] border-lighterGray rounded-xl px-6 py-4 mb-12">
              {/* chart header */}
              <div className="flex justify-between mb-4">
                <div className="flex-grow">
                  <h1 className="text-textBlack text-xl font-bold lato-bold">Earning stats on all booking</h1>
                  <p className="text-textBlack">Over 100 countries</p>
                </div>

                <div className="flex-shrink w-36">
                  <SelectField 
                    name="year"
                    isError={false}
                    errMsg={''}
                    value={'2022'}
                    label=""
                    showEmptyOption={false}
                    onChange={() => {}}
                    selectOptions={[
                      {value: '2022', label: '2022'},
                      {value: '2021', label: '2021'},
                      {value: '2020', label: '2020'},
                    ]}
                  />
                </div>
              </div>
              {/* chart header */}

              <div id="chart">
                <LineChart />
              </div>
            </div>
          </div>

          <div className="">
            <div className="border-[1px] border-lighterGray rounded-xl px-6 py-4 mb-12 min-h-[372px]">
              {/* header */}
              <div className="flex justify-between mb-4">
                <div className="flex-grow">
                  <h1 className="text-textBlack text-xl font-bold lato-bold">Monthly increased amount</h1>
                  <p className="text-textBlack">Calculated by 100 bookings per month   </p>
                </div>

                <div className="flex-shrink w-36">
                  <SelectField 
                    name="year"
                    isError={false}
                    errMsg={''}
                    value={'2022'}
                    label=""
                    showEmptyOption={false}
                    onChange={() => {}}
                    selectOptions={[
                      {value: 'April', label: 'April'},
                      {value: 'May', label: 'May'},
                      {value: 'June', label: 'June'},
                      {value: 'July', label: 'July'},
                    ]}
                  />
                </div>
              </div>
              {/* header */}

              <div className="mt-14">
                <h1 className="text-textBlack text-4xl font-semibold lato-bold mb-12">70%</h1>

                <ProgressBar percentage={70} />
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mb-4">
          <div className="">
            {/* table container */}
            <div className="w-full">
              <div className="w-full border-[1px] border-lighterGray rounded-md h-max">
                <h1 className="text-textBlack text-xl font-bold lato-bold mb-4 px-4 mb-4">Recent Bookings</h1>
                <div className="w-full flex justify-start gap-4 border-b-[1px] border-lighterGray px-4 pt-6">
                  {
                    tabs.map((item: string, idx: number) => {
                      return (
                        <div key={idx}>
                          <p 
                            onClick={() => setActiveTab(item)}
                            className={`cursor-pointer text-sm text-textBlack border-textBlue pb-2 hover:text-textBlue hover:border-b-[1px] 
                            ${activeTab === item && 'text-textBlue border-b-[1px]'} active:border-b-[1px] font-semibold`}
                          >{item}</p>
                        </div>
                      )
                    })
                  }
                  
                </div>
                
                {/* bookings sections */}
                <BasicTable />
                {/* bookings sections */}
              </div>
            </div>
            {/* table container */}
          </div>

          <div className="">
            <div className="border-[1px] border-lighterGray rounded-xl px-6 py-4 mb-12">
              <div className="flex justify-between mb-4">
                <div className="flex-grow">
                  <h1 className="text-textBlack text-xl font-bold lato-bold">Number of flights/ hotel</h1>
                  <p className="text-textBlack">Calculated by partnership  </p>
                </div>

                <div className="flex-shrink w-36">
                  <SelectField 
                    name="year"
                    isError={false}
                    errMsg={''}
                    value={'2022'}
                    label=""
                    showEmptyOption={false}
                    onChange={() => {}}
                    selectOptions={[
                      {value: '2022', label: '2022'},
                      {value: '2021', label: '2021'},
                      {value: '2020', label: '2020'},
                    ]}
                  />
                </div>
              </div>

              <div className="flex justify-between mt-12">
                <div className="flex justify-start gap-2">
                  <div>
                    <img src={flightGroupImg} alt="flight" />
                  </div>
                  <div>
                    <h1 className="text-textBlack text-xl font-bold lato-bold">50</h1>
                    <p className="text-textBlue">Acitve flights</p>
                  </div>
                </div>

                
                <div className="flex justify-end gap-2">
                  <div>
                    <img src={bedGroupImg} alt="flight" />
                  </div>
                  <div>
                    <h1 className="text-textBlack text-xl font-bold lato-bold">100</h1>
                    <p className="text-textBlue">Acitve Hotels</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-[1px] border-lighterGray rounded-xl px-6 py-4 mb-12">
              {/* headers */}
              <div className="flex-grow mb-4">
                <h1 className="text-textBlack text-xl font-bold lato-bold">Top Valued Customers</h1>
              </div>

              {/* customers */}
              <div className="flex justify-between mb-4">
                {
                  customers.map((item: any, idx: number) => (
                    <div key={idx}>
                      <CustomerDisplayCard data={item} />
                    </div>
                  ) )
                }
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default DashboardOverview;