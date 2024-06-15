import { FC, useState, useEffect } from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";



type Props = {
  rate: number;
  className?: string
}

const StarRating: FC<Props> = ({ rate, className = "" }) => {
  const  maxRate: number = 5;
  const [filledRate, setFilledRate] = useState<number>(0);
  const [nonFilledRate, setNonFilledRate] = useState<number>(0);

  useEffect(() => {
    (rate > maxRate) ? setFilledRate(maxRate) : setFilledRate(rate);
    (rate > maxRate) ? setNonFilledRate(0) : setNonFilledRate(maxRate - rate);
  }, [rate]);


  return (
    <>
      <div className="flex flex-row">
        {
          Array(filledRate).fill('').map((_, idx) => <FaStar key={idx} size={18} className={className ? className : "text-primary mr-1"} />)
        }
        {
          Array(nonFilledRate).fill('').map((_, idx) => <FaRegStar key={idx} size={18} className={className ? className : "text-primary mr-1"} />)
        }
      </div>
    </>
  )
}

export default StarRating;