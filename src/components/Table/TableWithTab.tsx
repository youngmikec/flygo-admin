import { FC, useState, useEffect } from 'react';
import BasicTable from './BasicTable';
import InputField from '../form/InputField';
import { CiSearch } from 'react-icons/ci';
import SelectField from '../form/SelectField';


type Props = {
  tableTabs: string[],
}


const TableWithTab: FC<Props> = ({ tableTabs }) => {
  const [tabs, setTabs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  useEffect(() => {
    if(tableTabs.length > 0) {
      setTabs(tableTabs);
    }
  }, [tableTabs])


  return (
    <>
      <div className="w-full border-[1px] border-lighterGray rounded-md h-max">
        {/* tabs section */}
        <div className='hidden sm:hidden md:flex lg:flex w-full py-4 justify-between gap-8'>
          <div className="w-1/6">
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
          </div>

          <div className='pt-3 w-3/6 '>
              <InputField 
                type="text"
                name="search"
                isError={false}
                rightIcon={<CiSearch size={20} className="text-textBlack" />}
                errMsg=""
                value={''}
                onChange={() => {}}
              />
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
        
        
        {/* bookings sections */}
        <BasicTable />
        {/* bookings sections */}
      </div>
    </>
  )
}

export default TableWithTab;