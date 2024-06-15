import { FC } from 'react';

import { IoMailUnreadOutline, IoMailOpenOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Notification } from '../../../models';

type Props = {
  data: Notification
}


const NotificationMessage: FC<Props> = ({ data }) => {
  return (
    <>
      <div className="w-full flex flex-row gap-4 p-4 border-b-[1px] border-lighterGray mb-2">
        <div>
          <div className="bg-[#008489] h-[40px] w-[40px] rounded-full flex justify-center items-center">
            {
              data.isRead ? <IoMailOpenOutline size={20} className="text-white" /> : <IoMailUnreadOutline size={20} className="text-white" />
            }
          </div>
        </div>
        <div className="flex-grow flex-1">
          <p className={`text-textBlack ${!data.isRead && 'font-bold lato-bold'}`}>{ data.message }</p>
          <p className="text-lightGray lato-regular">{ data.date }</p>
        </div>
        <div className="flex justify-center items-center">
          <IoIosClose size={24} />
        </div>
      </div>
    </>
  )
}

export default NotificationMessage;