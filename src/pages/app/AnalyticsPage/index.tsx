import { useState } from 'react';

import { IoArrowForwardSharp } from "react-icons/io5";

import DashboardLayout from "../../../components/Layout/DashboardLayout";
import AppButton from "../../../components/app/AppButton";
import LineChart from "../../../components/Charts/LineChart";
import ProgressBar from "../../../components/app/ProgreeBar";
import DonutChart from "../../../components/Charts/DonutChart";
import AppModalComp from "../../../components/app/AppModal";
import DeleteComp from "../../../components/app/DeleteModal";
import { useDispatch } from 'react-redux';
import { OpenAppModal } from '../../../store/modal';


const AnalyticsPage = () => {
  const dispatch = useDispatch();
  const [modalMode, setModalMode] = useState<string>('');
  const [deleting, setDeleting] = useState<boolean>(false);
  const handleDeleteRecord = () => console.log('Deleting');

  const openModal = () => {
    setModalMode('create');
    dispatch(OpenAppModal())
  };
  
  
  return (
    <>
      <DashboardLayout>
        <div className="w-full pb-8">
          <div className="flex justify-between mb-8">
            <div className="mb-4">
              <h1 className="text-textBlack text-2xl font-bold lato-bold mb-4">Analytic and Report</h1>
              <p className="text-textBlack">Insight of your performance so far</p>
            </div>

            <div className="flex justify-start gap-4">
              
              <AppButton 
                width="max"
                fill="fill"
                btnIcon={<IoArrowForwardSharp size={20} className="text-white" />}
                iconPosition="right"
                btnText="Add New"
                bgColor="blue"
                type="submit"
                onClick={openModal}
              />
            </div>
          </div>

          {/* filters */}
          <div className="my-4 flex justify-start gap-4">
            <div>
              <AppButton 
                width="max"
                fill="outline"
                btnText="Today"
                bgColor="gray"
                type="submit"
              />
            </div>
            <div>
              <AppButton 
                width="max"
                fill="outline"
                btnText="Last Week"
                bgColor="gray"
                type="submit"
              />
            </div>
            <div>
              <AppButton 
                width="max"
                fill="outline"
                btnText="1 Month"
                bgColor="gray"
                type="submit"
              />
            </div>
            <div>
              <AppButton 
                width="max"
                fill="outline"
                btnText="6 Months"
                bgColor="gray"
                type="submit"
              />
            </div>
            <div>
              <AppButton 
                width="max"
                fill="outline"
                btnText="1 Year"
                bgColor="gray"
                type="submit"
              />
            </div>
          </div>

          {/* chart */}
          <div className="my-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <div className="border-[1px] border-lighterGray rounded-xl px-6 py-4 mb-12">
                  {/* chart header */}
                  <div className="flex justify-between mb-4">
                    <div className="flex-grow">
                      <p className="text-textBlack">Total sales</p>
                      <h1 className="text-textBlack text-xl font-bold lato-bold">$250</h1>
                    </div>

                    <div>
                      <AppButton 
                        width="max"
                        fill="outline"
                        btnText="Export"
                        bgColor="gray"
                        type="submit"
                      />
                    </div>
                  </div>
                  {/* chart header */}

                  <div id="chart">
                    <LineChart />
                  </div>
                </div>
              </div>
              <div>
                <div className="border-[1px] border-lighterGray rounded-xl px-6 py-4 mb-12">
                  {/* chart header */}
                  <div className="flex justify-between mb-4">
                    <div className="flex-grow">
                      <p className="text-textBlack">Total Revenue</p>
                      <h1 className="text-textBlack text-xl font-bold lato-bold">$500</h1>
                    </div>

                    <div>
                      <AppButton 
                        width="max"
                        fill="outline"
                        btnText="Export"
                        bgColor="gray"
                        type="submit"
                      />
                    </div>
                  </div>
                  {/* chart header */}

                  <div id="chart">
                    <LineChart />
                  </div>
                </div>
              </div>
              <div>
                <div className="border-[1px] border-lighterGray rounded-xl px-6 py-4 mb-12">
                  {/* chart header */}
                  <div className="flex justify-between mb-4">
                    <div className="flex-grow">
                      <p className="text-textBlack">Average order value </p>
                      <h1 className="text-textBlack text-xl font-bold lato-bold">$110</h1>
                    </div>

                    <div>
                      <AppButton 
                        width="max"
                        fill="outline"
                        btnText="Export"
                        bgColor="gray"
                        type="submit"
                      />
                    </div>
                  </div>
                  {/* chart header */}

                  <div id="chart">
                    <LineChart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* progressbars */}
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <div className="border-[1px] border-lighterGray rounded-xl px-6 py-4 mb-12">
                    {/* chart header */}
                    <div className="flex justify-between mb-4">
                      <div className="flex-grow">
                        <h1 className="text-textBlack text-xl font-bold lato-bold">
                          Popular Destinations
                        </h1>
                        <p className="text-lightGray">Destination overtime</p>
                      </div>

                      <div>
                        <AppButton 
                          width="max"
                          fill="outline"
                          btnText="Export"
                          bgColor="gray"
                          type="submit"
                        />
                      </div>
                    </div>
                    {/* chart header */}

                    <div className="mt-12">
                      <div className="my-4">
                        <div className="flex justify-between mb-1">
                          <p className="text-textBlack font-semibold lato-regular">USA</p>
                          <p className="text-textBlack font-semibold lato-regular">90%</p>
                        </div>
                        <ProgressBar percentage={90} />
                      </div>
                      <div className="my-4">
                        <div className="flex justify-between mb-1">
                          <p className="text-textBlack font-semibold lato-regular">France</p>
                          <p className="text-textBlack font-semibold lato-regular">50%</p>
                        </div>
                        <ProgressBar percentage={50} />
                      </div>
                      <div className="my-4">
                        <div className="flex justify-between mb-1">
                          <p className="text-textBlack font-semibold lato-regular">Nigeria</p>
                          <p className="text-textBlack font-semibold lato-regular">30%</p>
                        </div>
                        <ProgressBar percentage={30} />
                      </div>
                      <div className="my-4">
                        <div className="flex justify-between mb-1">
                          <p className="text-textBlack font-semibold lato-regular">UK London</p>
                          <p className="text-textBlack font-semibold lato-regular">20%</p>
                        </div>
                        <ProgressBar percentage={20} />
                      </div>
                    </div>
                  </div>
              </div>
              <div>
                <div className="border-[1px] border-lighterGray rounded-xl px-6 py-4 mb-12">
                    {/* chart header */}
                    <div className="flex justify-between mb-4">
                      <div className="flex-grow">
                        <h1 className="text-textBlack text-xl font-bold lato-bold">
                          Popular Hotels
                        </h1>
                        <p className="text-lightGray">Hotel overtime</p>
                      </div>

                      <div>
                        <AppButton 
                          width="max"
                          fill="outline"
                          btnText="Export"
                          bgColor="gray"
                          type="submit"
                        />
                      </div>
                    </div>
                    {/* chart header */}

                    <div className="mt-12">
                      <div className="my-4">
                        <div className="flex justify-between mb-1">
                          <p className="text-textBlack font-semibold lato-regular">sonder kensigton garden</p>
                          <p className="text-textBlack font-semibold lato-regular">90%</p>
                        </div>
                        <ProgressBar percentage={90} />
                      </div>
                      <div className="my-4">
                        <div className="flex justify-between mb-1">
                          <p className="text-textBlack font-semibold lato-regular">hilton</p>
                          <p className="text-textBlack font-semibold lato-regular">50%</p>
                        </div>
                        <ProgressBar percentage={50} />
                      </div>
                      <div className="my-4">
                        <div className="flex justify-between mb-1">
                          <p className="text-textBlack font-semibold lato-regular">de la pas</p>
                          <p className="text-textBlack font-semibold lato-regular">30%</p>
                        </div>
                        <ProgressBar percentage={30} />
                      </div>
                      <div className="my-4">
                        <div className="flex justify-between mb-1">
                          <p className="text-textBlack font-semibold lato-regular">De villas</p>
                          <p className="text-textBlack font-semibold lato-regular">20%</p>
                        </div>
                        <ProgressBar percentage={20} />
                      </div>
                    </div>
                  </div>
              </div>

              <div>
                <div className="border-[1px] border-lighterGray rounded-xl px-6 py-4 mb-12">
                    {/* chart header */}
                    <div className="flex justify-between mb-4">
                      <div className="flex-grow">
                        <h1 className="text-textBlack text-xl font-bold lato-bold">
                          Booking trends
                        </h1>
                        <p className="text-lightGray">Countries</p>
                        {/* <p className="text-lightGray"><small>last week</small></p> */}
                      </div>

                      <div>
                        <AppButton  
                          width="max"
                          fill="outline"
                          btnText="Export"
                          bgColor="gray"
                          type="submit"
                        />
                      </div>
                    </div>
                    {/* chart header */}

                    <div className="mt-12">
                      <DonutChart />
                    </div>
                  </div>
              </div>
            </div>
          </div>
          
        </div>
      </DashboardLayout>

      <AppModalComp width="sm">
        {
          modalMode === 'delete' && <p>Create Analytic page</p>
        }
        {
          modalMode === 'create' && 
          <DeleteComp 
            id={'fhsljfhsl'} 
            action={handleDeleteRecord} 
            deleting={deleting} 
            entity={'User'}
          />
        }
      </AppModalComp>
    </>
  )
}

export default AnalyticsPage
