import { FC, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import InputField from '../form/InputField';
import SelectField from '../form/SelectField';



const BasicTable: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchFilter, setSearchFilter] = useState<string>('');
  return (
    <>
      <div className="w-full">
        {/* search section */}
        <header className="flex justify-between gap-8 px-4 pt-6">
          <div className='flex-grow max-w-[70%]'>
            <InputField 
              type="text"
              name='search'
              value={searchQuery}
              isError={false}
              errMsg={''}
              leftIcon={<CiSearch size={20} className="text-lightGray" />}
              placeholder='search for trip'
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="max-w-max">
            <SelectField
              textPosition={'right'}
              name="searchFilter"
              label=''
              isError={false}
              errMsg={''}
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              selectOptions={[
                {label: 'By Date', value: 'date'},
                {label: 'A/Z', value: 'a/z'},
                {label: 'Z/A', value: 'z/a'},
              ]}
            />
          </div>
        </header>
        {/* search section */}
        <table className="table-auto w-full mt-8">
          <thead>
            <tr className="border-[1px] border-lighterGray rounded-xl p-4">
              <th className="p-4 text-left text-textBlack font-bold lato-bold">Airline</th>
              <th className="p-4 text-left text-textBlack font-bold lato-bold">Date</th>
              <th className="p-4 text-left text-textBlack font-bold lato-bold">Amount paid</th>
              <th className="p-4 text-left text-textBlack font-bold lato-bold">Ticket</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-[1px] border-lighterGray rounded-xl">
              <td className="p-4">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className="p-4">Malcolm Lockyer</td>
              <td className="p-4">1961</td>
              <td className="p-4">1961</td>
            </tr>
            <tr className="border-[1px] border-lighterGray rounded-xl p-4">
              <td className="p-4">Witchy Woman</td>
              <td className="p-4">The Eagles</td>
              <td className="p-4">1972</td>
              <td className="p-4">1972</td>
            </tr>
            <tr className="border-[1px] border-lighterGray rounded-xl p-4">
              <td className="p-4">Shining Star</td>
              <td className="p-4">Earth, Wind, and Fire</td>
              <td className="p-4">1975</td>
              <td className="p-4">1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default BasicTable;