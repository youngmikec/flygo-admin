import { FC, useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";


export type SelectOption = {label: string, value: string}

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
  showEmptyOption?: boolean;
} 

const SelectField: FC<Props> = ({
  value,
  label,
  // bgColor = 'white',
  labelPosition = 'left',
  textPosition = 'left',
  border = 'border',
  name,
  selectOptions,
  isError,
  errMsg,
  onChange,
  showEmptyOption = true
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
      console.log(selectedOption)
    }
  }, [value]);


  return (
    <>
      <div className={`w-full ${border === 'border' ? 'my-2' : 'my-0'}`}>
        <div className={`
          w-full ${border === 'border' ? 'border-lighterGray border-[1px]' : 'border-0'} rounded-[9px] relative px-4 py-3 bg-white
        `}>
          {
            label && 
            <div className={`w-full flex text-left ${labelPosition === 'left' ? 'md:text-left lg:text-left' : 'md:text-right lg:text-right'}`}>
              <label htmlFor={name} className="block w-full lato-regular text-darkGray font-semibold text-sm">
                {label}
              </label>
            </div>
          }
          <div className="flex justify-between gap-4 cursor-pointer" onClick={() => setShowOptions(prev => !prev)}>
            <div className="flex-grow">
              {
                showEmptyOption && <p className={`text-[16px] text-textBlack lato-bold font-semibold ${textPosition === 'right' ? 'md:text-right lg:text-right' : 'md:text-left lg:text-left'}`}>{selectOptions[0].label}</p>
              }
            </div>
            
            {
              (border === 'border') && (
                <div className="flex justify-center items-center">
                  <IoIosArrowDown size={16} className='text-textBlack' />
                </div>
              )
            }
            
          </div>
          {/* select options */}
          {
            showOptions && (
              <div className="absolute left-0 rght-0 top-16 ease-in-out delay-500 w-full rounded-[9px] bg-white px-3 py-2 min-h-[30px] max-h-max shadow-md z-50">
                {
                  selectOptions.length > 0 ? selectOptions.map((item: SelectOption, idx: number) => {
                    return <p 
                      key={idx} 
                      className='text-sm text-textBlack lato-bold font-semibold cursor-pointer my-1 py-1 hover:bg-lightGray'
                      onClick={() => handleSelect(item)}
                    >{item.label}</p>
                  }) :
                  <p className='text-sm text-textBlack lato-bold font-semibold'>No Options</p>
                }
              </div>
            )
          }
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

export default SelectField;