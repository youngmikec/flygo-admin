import { FC, ReactNode } from 'react';

type Props = {
  size: 'sm' | 'md' | 'lg' | 'full';
  children: ReactNode;
  hover?: boolean;
  onClick?: () => void;
}


const Card: FC<Props> = ({ children, size, hover = false, onClick }) => {
  return (
    <>
      <div className={`
          min-h-[150px] bg-white rounded-[10px] shadow-md relative
          ${size === 'sm' ? 'max-w-[180px]' : size === 'md' ? 'max-w-[250px]' : size === 'lg' ? 'max-w-[370px]' : 'w-full'}
          ${ hover && 'hover:shadow-lg hover:scale-105 ease-in-out duration-300' }
          ${ onClick && 'cursor-pointer' }
        `}
        onClick={onClick && onClick}
      >
        <div className="mt-0">
          { children }
        </div>
      </div>
    </>
  )
}

export default Card;