import { FC, useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";

import { SelectOption } from '../SelectField';
import ValidatedCheckBox from '../ValidatedCheckBox';
import FliterFlightSvg from '../../../assets/svg/filter-flight.svg';

type Props = {
  value: string | number | boolean | any;
  label?: string;
  bgColor?: string;
  border?: 'border' | 'no-border';
  labelPosition?: 'right' | 'left'
  textPosition?: 'right' | 'left'
  name: string;
  selectOptions: SelectOption[];
  isError: boolean;
  errMsg: string | any;
  onChange: (value: any) => void;
}

const FilterSelectField: FC<Props> = ({
  value,
  label,
  // bgColor = 'white',
  labelPosition = 'left',
  // textPosition = 'left',
  border = 'border',
  name,
  selectOptions,
  isError,
  errMsg,
  onChange
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption>({label: '', value: ''});

  const handleSelect = (option: SelectOption) => {
    setSelectedOption(option);
    onChange && onChange(option.value);
    setShowOptions(false);
  }

  useEffect(() => {
    if(value){
      const option = selectOptions.find((option: SelectOption) => option.value === value) || {label: '', value: ''}
      setSelectedOption(option);

      console.log(showOptions, selectedOption)
    }
  }, [value]);


  return (
    <>
      <div className={`w-full ${border === 'border' ? 'my-2' : 'my-0'}`}>
        <div className={`
          w-full ${border === 'border' ? 'border-lighterGray border-[1px]' : 'border-0'} rounded-[9px] relative py-3 bg-white
        `}>
          {
            label && 
            <div className={`w-full flex text-left ${labelPosition === 'left' ? 'md:text-left lg:text-left' : 'md:text-right lg:text-right'}`}>
              <label htmlFor={name} className="w-full flex flex-row gap-4 lato-bold text-textBlack font-bold text-lg">
                <img src={FliterFlightSvg} width={"20px"} height={"20px"} alt="label icon"/>
                <span>{label}</span>
              </label>
            </div>
          }
          <div className="flex justify-between gap-4 cursor-pointer">
            {/* <div className="flex-grow">
              <p className={`text-[16px] text-textBlack lato-bold font-semibold ${textPosition === 'right' ? 'md:text-right lg:text-right' : 'md:text-left lg:text-left'}`}>{selectedOption.label || 'select option'}</p>
            </div> */}
            
            {
              (border === 'border') && (
                <div className="flex justify-center items-center mr-4">
                  <IoIosArrowDown size={16} className='text-textBlack' />
                </div>
              )
            }
            
          </div>
          {/* select options */}
          <div className="w-full bg-white px-3 py-2 min-h-[30px] max-h-max">
            {
              selectOptions.length > 0 ? selectOptions.map((item: SelectOption, idx: number) => {
                return <ValidatedCheckBox 
                  key={idx}
                  name={name}
                  value={item.value}
                  label={item.label}
                  labelPosition={'right'}
                  onChange={() => handleSelect(item)}
                />
              }) :
              <p className='text-sm text-textBlack lato-bold font-semibold'>No Options</p>
            }
          </div>
          
          {/* select options */}
        </div>
        
        {
          isError && 
          <p className="text-red my-2 text-xs font-semibold">{errMsg}</p>
        }
      </div>
    </>
  )
}

export default FilterSelectField;