import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

import NotificationMessage from './NotificationMessage';
import InputField from '../../../components/form/InputField';

export type Notification = {
  message: string;
  date: string;
  isRead: boolean
}

const NotificationsTab = () => {
  const tabs: string[] = ['All', 'Unread', 'Important'];
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const notifications: Notification[] = [
    {
      message: 'Meg Griffin has left you a review. Both of your reviews from this trip are now public.please i dont like the delay i had the last time while going to london',
      date: 'March 1, 2024',
      isRead: false,
    },
    {
      message: 'Meg Griffin has left you a review. Both of your reviews from this trip are now public.please i dont like the delay i had the last time while going to london',
      date: 'March 1, 2024',
      isRead: true,
    },
    {
      message: 'Meg Griffin has left you a review. Both of your reviews from this trip are now public.please i dont like the delay i had the last time while going to london',
      date: 'March 1, 2024',
      isRead: true,
    },
    {
      message: 'Meg Griffin has left you a review. Both of your reviews from this trip are now public.please i dont like the delay i had the last time while going to london',
      date: 'March 1, 2024',
      isRead: true,
    },
  ]

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between border-[1px] border-lighterGray rounded-lg pr-4 pt-4 pb-1">
          <div className="flex justify-start gap-4 px-4 pt-6">
            {
              tabs.map((item: string, idx: number) => {
                return (
                  <div key={idx}>
                    <p 
                      onClick={() => setActiveTab(item)}
                      className={`cursor-pointer text-sm   text-textBlack border-textBlue pb-2 hover:text-textBlue hover:border-b-[1px] 
                      ${activeTab === item && 'text-textBlue border-b-[3px]'} active:border-b-[1px] font-semibold`}
                    >{item}</p>
                  </div>
                )
              })
            }
            
          </div>

          <div className='flex-[0.7]'>
            <InputField 
              type="text"
              name="search"
              isError={false}
              placeholder='search for anything'
              rightIcon={<CiSearch size={20} className="text-textBlack" />}
              errMsg=""
              value={''}
              onChange={() => {}}
            />
          </div>
        </div>

        <div className="mt-12">
          {
            activeTab === 'All' && (
              <div className="border-[1px] border-lighterGray rounded-md h-max pb-12 px-4">
                {
                  notifications.map((item: Notification, idx: number) => (<NotificationMessage key={idx} data={item} />))
                }
              </div>
            )
          }
          {
            activeTab === 'Unread' && (
              <div className="border-[1px] border-lighterGray rounded-md h-max pb-12 px-4">
                {
                  notifications.map((item: Notification, idx: number) => (<NotificationMessage key={idx} data={item} />))
                }
              </div>
            )
          }
          {
            activeTab === 'Important' && (
              <div className="border-[1px] border-lighterGray rounded-md h-max pb-12 px-4">
                {
                  notifications.map((item: Notification, idx: number) => (<NotificationMessage key={idx} data={item} />))
                }
              </div>
            )
          }
        </div>

      </div>
    </>
  )
}

export default NotificationsTab;