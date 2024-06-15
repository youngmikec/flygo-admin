import { FC, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

type Props = {
  value: string | number | boolean | any;
  label?: string;
  labelPosition?: 'out' | 'in';
  name: string;
  bgColor?: string;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  placeholder?: string;
  isError: boolean;
  errMsg?: string;
  type: 'text' | 'email' | 'phone' | 'date' | 'number' | 'password' | 'checkbox' | 'radio' | 'hidden' | 'file' | 'url' | 'search' | 'color' | 'datetime-local' | 'time' | 'month' | 'week' | 'range' | 'image' | 'submit' | 'reset' | 'button'
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<Props> = ({
  value,
  labelPosition = 'out',
  label,
  name,
  // bgColor = 'white',
  placeholder,
  rightIcon,
  leftIcon,
  isError,
  errMsg = '',
  type = 'text',
  onChange
}) => {
  const [inputType, setInputType] = useState<string>(type)
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(prev => {
      const newState = !prev;
      setInputType(newState ? 'text' : 'password');
      return newState
    });
    
  }

  return (
    <>
      <div className={`my-2 w-full`}>
        {
          (label && labelPosition === 'out') && 
          <div className="w-full">
            <label htmlFor={name} className="block w-full lato-regular text-darkGray font-semibold text-sm">
              {label}
            </label>
          </div>
        }
        <div className="border-lighterGray border-[1px] rounded-[9px] bg-white">
          {
            (label && labelPosition === 'in') && 
            <div className="w-full px-4 pt-2">
              <label htmlFor={name} className="block w-full lato-regular text-darkGray font-semibold text-sm">
                {label}
              </label>
            </div>
          }
          <div className="flex justify-between gap-4">
            {
              leftIcon && 
              <div className="flex justify-center items-center ml-4">
                {leftIcon}
              </div>
            }
            <div className="flex-grow">
              <input 
                type={inputType} 
                name={name} 
                value={value} 
                placeholder={placeholder}
                onChange={onChange} 
                className={`w-full border-0 bg-transparent focus:outline-none focus:ring-0 focus:border-0 px-4 ${labelPosition === 'out' ? 'py-3' : 'pt-1 pb-2'} lato-regular flex-1`}
              />
            </div>
            
            {
              rightIcon && 
              <div className="flex justify-center items-center mr-4">
                {rightIcon}
              </div>
            }
            {
              type === 'password' && 
              <div className="cursor-pointer flex justify-center items-center mr-4" onClick={toggleShowPassword}>
                {
                  showPassword ? <BsFillEyeSlashFill size={16} /> : <BsFillEyeFill size={16} />
                }
              </div>
            }
          </div>
        </div>

        {
          isError && 
          <p className="text-[#DD584F] my-2 text-xs font-semibold">{errMsg}</p>
        }
      </div>
    </>
  )
}

export default InputField;