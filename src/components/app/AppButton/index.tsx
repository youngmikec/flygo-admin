import { FC } from "react";

type Props = {
  width?: 'full' | 'max' ;
  btnText: string,
  btnIcon?: JSX.Element,
  bgColor: 'primary' | 'gray';
  textColor?: string;
  disabled?: boolean;
  fill?: 'fill' | 'outline'
  iconPosition?: 'left' | 'right',
  onClick?: () => void,
  loading?: boolean;
  type?: "submit" | "button" | "reset";
}

const AppButton: FC<Props> = ({ 
  width = 'max',
  loading = false,
  btnText, 
  btnIcon, 
  bgColor = 'primary', 
  fill = 'fill', 
  iconPosition, 
  type = 'submit',
  disabled = false,
  onClick 
}) => {

  return (
    <button
      type={ type }
      disabled={disabled}
      className={
        `
          ${width === 'full' ? 'w-full' : 'min-w-[100px] max-w-fit'} min-h-[50px] max-h-[60px] text-sm lato-regular delay-200 ease-in ${ disabled ? 'cursor-not-allowed' : 'cursor-pointer' }
          ${
            fill === 'fill' && 
            ` ${bgColor === 'primary' && `bg-primary text-white hover:bg-white hover:text-primary border-primary border-[1px]`}
              ${bgColor === 'gray' && `bg-lightGray text-darkGray hover:bg-darkGray hover:text-lightGray border-lighterGray border-[1px]`}
            `
          }
          ${ fill === 'outline' && 
            ` bg-transparent 
              ${bgColor === 'primary' && `border-primary text-primary border-[1px] hover:bg-primary hover:text-[white]`} 
              ${bgColor === 'gray' && `border-darkGray text-darkGray border-[1px] hover:bg-lightGray hover:text-darkGray`} 
            `
          } 
          flex justify-center items-center py-2 px-6 rounded-[9px]
        `
      }
      onClick={onClick && onClick}
    >
      { 
        (iconPosition === 'left' && btnIcon) && 
        <div className="mx-2">{ btnIcon }</div>
      }
      { loading ? <p>loading...</p> : <p className="text-[14px] lato-bold">{btnText}</p> }
      { 
        (iconPosition === 'right' && btnIcon) && 
        <div className="mx-2">{ btnIcon }</div>
      }
    </button>
  )
}

export default AppButton;