import { useState } from 'react';
import SelectField from "../../../components/form/SelectField";

import flightOverviewImg from '../../../assets/svg/flight.svg';
import expiredCardImg from '../../../assets/svg/Card-expired.svg';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import LineChart from '../../../components/Charts/LineChart';
import BasicTable from '../../../components/Table/BasicTable';


const OverViewCard = ({ title, value, duration, type, imgUrl }: any) => {
  return (
    <div className="w-full">
      <div className={`
        ${type === 1 ? 'bg-textBlue' : type === 2 ? 'bg-primary' : 'bg-black'} 
        rounded-2xl px-4 py-4 mb-8 min-h-[150px]`
      }>
        <div className="flex justify-between">
          <div className="w-full">
            <h1 className="text-white text-[18px] font-semibold lato-bold mb-2">{ title }</h1>
            <h1 className="text-white text-3xl font-bold lato-bold">{ value }</h1>
            <h1 className="text-white text-[18px] font-semibold lato-bold mb-2">{ duration }</h1>
          </div>
          <div className="w-full flex justify-end items-end">
            <img src={imgUrl} className="w-16 h-16" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}


const DashboardOverview = () => {
  const tabs: string[] = ['Upcoming trips', 'Completed trips', 'Cancled trips'];
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  return (
    <>
      <DashboardLayout>
        <div className="flex flex-row gap-6">
          <div className="flex-grow">
            <div className="border-[1px] border-lighterGray rounded-lg px-6 py-4 mb-12">
              {/* chart header */}
              <div className="flex justify-between mb-4">
                <div className="flex-grow">
                  <h1 className="text-textBlack text-xl">Most visited countries</h1>
                  <p className="text-textBlack">Visited 10 countries out of 100 in a year</p>
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

            {/* table container */}
            <div className="w-full">
              <div className="w-full border-[1px] border-lighterGray rounded-md h-max">
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
                <BasicTable />
              </div>
            </div>
            {/* table container */}
          </div>

          <div className="px-4 min-w-[400px]">
            <OverViewCard 
              title="Total visitors" 
              value="100" 
              duration="Last 5 days" 
              type={1}
              imgUrl={flightOverviewImg}
            />
            <OverViewCard 
              title="Total visitors" 
              value="50" 
              duration="Last 5 days" 
              type={2}
              imgUrl={expiredCardImg}
            />
            <OverViewCard 
              title="Total visitors" 
              value="02" 
              duration="Last 5 days" 
              type={3}
              imgUrl={flightOverviewImg}
            />
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default DashboardOverview;