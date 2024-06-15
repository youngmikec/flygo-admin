import { FC } from 'react';

type Props = { title: string, value: string, imgUrl: string }

const StatisticsCard: FC<Props> = ({ title, value, imgUrl }) => {
  return (
    <>
      <div className="w-full rounded-xl border-[1px] border-lighterGray shadow-sm px-6 py-4">
        <h1 className="text-textBlack text-lg lato-regular mb-4">{title}</h1>
        <div className="flex justify-between">
          <div>
            <p className="text-textBlack font-semibold lato-bold text-4xl">{value}</p>
          </div>
          <div>
            <img src={imgUrl} className="w-16 h-16" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default StatisticsCard;