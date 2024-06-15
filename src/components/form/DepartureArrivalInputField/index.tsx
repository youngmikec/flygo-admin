import { FC } from 'react';
import SelectField, { SelectOption } from "../SelectField";


type Props = {
  value?: string | number | boolean | any;
  label?: string;
  name?: string;
  departureOptions: SelectOption[];
  arrivalOptions: SelectOption[];
  isError?: boolean;
  errMsg?: string;
  onChange?: (value: any) => void;
} 

const DepartureArrivalInputField: FC<Props> = ({
  value,
  departureOptions,
  arrivalOptions,

}) => {
  return (
    <>
      <div className='my-2 w-full'>
        <div className="w-full border-lighterGray border-[1px] rounded-[9px] relative">
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2 w-full">
            <SelectField
              border={"no-border"}
              labelPosition={'left'}
              textPosition={'left'}
              name="departure"
              label="Departure"
              isError={false}
              errMsg='This Field is required'
              selectOptions={departureOptions}
              value={value}
              onChange={() => {}}
            />
            {/* <div>
              <hr className="border-lighterGray border-[1px] w-full rotate-90 my-auto" />
            </div> */}
            <SelectField
              border={'no-border'}
              labelPosition={'right'}
              textPosition={'right'}
              name="arrival"
              label="Arrival"
              isError={false}
              errMsg='This Field is required'
              selectOptions={arrivalOptions}
              value={value}
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default DepartureArrivalInputField;