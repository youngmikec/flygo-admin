import { FC } from "react";

import { Notification } from "../../../models";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import NotificationMessage from "../../../components/app/NotificationsTab/NotificationMessage";
import StarRating from "../../../components/app/StarRating";
import ProgressBar from "../../../components/app/ProgreeBar";

type Props = {
  data: {name: string, percentage: number, value: number | string}
}

const ReviewBars: FC<Props> = ({data}) => {
  return (
    <>
      <div className="flex flex-row gap-2 mb-4">
        <div>
          <p className="text-textBlue text-sm">{data.name}</p>
        </div>
        <div className="flex-grow">
          <ProgressBar percentage={data.percentage} />
        </div>
        <div>
          <p className="text-textBlue text-sm">{data.value}</p>
        </div>
      </div>
    </>
  )
}

const ProgressBarKey = ({ title, color }: { title: string, color: string }) => {
  return (
    <>
      <div className="flex flex-row gap-1">
        <p className="text-textBlack text-sm font-semibold">Adventures 40%</p>
        <div className="flex items-center">
          <div className={`w-2 h-2`} style={{ backgroundColor: color }}></div>
        </div>
      </div>
    </>
  )
}



const ReviewsPage = () => {
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
      <DashboardLayout>
        <div className="w-full pb-8">
          <div className="mb-4">
            <h1 className="text-textBlack text-2xl font-bold lato-bold mb-4">Feedback/ reviews</h1>
            <p className="text-textBlack"> Over 100 reviews  and feedback(s)</p>
            
          </div>

          <div className="my-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
              <div>
                <div className="border-[1px] border-lighterGray rounded-xl px-6 py-4 mb-12">
                  <div className="mb-4">
                    <h1 className="text-textBlue text-6xl font-semibold lato-bold mb-4">5.0</h1>
                    <StarRating rate={5} />
                    <p className="text-textBlack">All reviews come from customers   </p>
                  </div>

                  <div className="mt-8">
                    <ReviewBars data={{name: '5 star', percentage: 80, value: 30}} />
                    <ReviewBars data={{name: '4 star', percentage: 60, value: 25}} />
                    <ReviewBars data={{name: '3 star', percentage: 30, value: 5}} />
                    <ReviewBars data={{name: '2 star', percentage: 10, value: 1}} />
                    <ReviewBars data={{name: '1 star', percentage: 0, value: 0}} />
                  </div>
                </div>
              </div>

              <div>
                <div className="border-[1px] border-lighterGray rounded-xl px-6 py-4 pb-8 mb-12">
                  {/* customer likes */}
                  <div className="my-4 mb-8">
                    <div className="flex flex-row gap-2">
                      <p className="text-textBlack text-lg font-semibold">what customers like most</p>
                      <div>
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.75 8.98402L1.497 8.92002C1.47978 8.72793 1.38924 8.54986 1.24416 8.42279C1.09909 8.29572 0.910639 8.22941 0.717959 8.23765C0.525279 8.24589 0.343177 8.32803 0.209478 8.46702C0.0757788 8.60601 0.000758622 8.79116 0 8.98402H0.75ZM17.986 10.807L17.28 14.887L18.759 15.143L19.464 11.063L17.986 10.807ZM10.995 20H6.346V21.5H10.995V20ZM5.435 19.163L4.623 9.77002L3.128 9.89902L3.941 19.292L5.435 19.163ZM17.28 14.887C16.773 17.817 14.131 20 10.995 20V21.5C14.821 21.5 18.121 18.831 18.759 15.143L17.28 14.887ZM11.005 3.85002L10.342 7.89502L11.822 8.13702L12.485 4.09302L11.005 3.85002ZM4.938 8.99602L6.377 7.75602L5.397 6.62002L3.96 7.86002L4.938 8.99602ZM8.994 3.72202L9.47 1.88802L8.018 1.51202L7.542 3.34502L8.994 3.72202ZM10.188 1.52802L10.333 1.57502L10.792 0.147016L10.647 0.100016L10.188 1.52802ZM8.273 5.56602C8.58537 4.98201 8.8274 4.36302 8.994 3.72202L7.542 3.34502C7.40528 3.87165 7.20656 4.38021 6.95 4.86002L8.273 5.56602ZM10.333 1.57502C10.4757 1.61826 10.6051 1.69685 10.7093 1.80349C10.8135 1.91013 10.8891 2.04137 10.929 2.18502L12.381 1.80902C12.2777 1.42052 12.0778 1.06445 11.8 0.773879C11.5222 0.483312 11.1755 0.267679 10.792 0.147016L10.333 1.57502ZM9.47 1.88802C9.48993 1.81599 9.5253 1.74916 9.57365 1.69218C9.622 1.63519 9.68218 1.58941 9.75 1.55802L9.099 0.207016C8.567 0.463016 8.167 0.937016 8.018 1.51202L9.47 1.88802ZM9.75 1.55802C9.88686 1.49265 10.0435 1.48192 10.188 1.52802L10.647 0.100016C10.1363 -0.0636643 9.58231 -0.025371 9.099 0.207016L9.75 1.55802ZM11.904 9.73402H17.084V8.23402H11.904V9.73402ZM2.469 20.156L1.497 8.92002L0.00300002 9.04902L0.973 20.285L2.469 20.156ZM1.5 20.263V8.98402H0V20.263H1.5ZM0.973 20.285C0.969949 20.2487 0.97549 20.2121 0.987334 20.1776C0.999178 20.1431 1.01807 20.1115 1.0428 20.0847C1.06753 20.0579 1.09757 20.0365 1.131 20.0219C1.16443 20.0073 1.20053 19.9999 1.237 20V21.5C1.963 21.5 2.531 20.878 2.469 20.156L0.973 20.285ZM12.485 4.09302C12.6097 3.33274 12.5743 2.55481 12.381 1.80902L10.929 2.18602C11.0699 2.72934 11.0958 3.29611 11.005 3.85002L12.485 4.09302ZM6.346 20C6.11701 19.9996 5.89648 19.9135 5.72785 19.7585C5.55923 19.6036 5.45475 19.3912 5.435 19.163L3.941 19.292C3.99303 19.8942 4.26888 20.455 4.71411 20.8637C5.15933 21.2725 5.74159 21.4995 6.346 21.5V20ZM6.377 7.75602C7.057 7.17002 7.789 6.47302 8.274 5.56602L6.95 4.86002C6.604 5.50902 6.053 6.05602 5.397 6.62002L6.377 7.75602ZM19.464 11.063C19.5242 10.716 19.5078 10.36 19.416 10.02C19.3241 9.68 19.1591 9.36418 18.9323 9.09467C18.7056 8.82516 18.4227 8.60848 18.1034 8.45982C17.7841 8.31115 17.4362 8.23408 17.084 8.23402V9.73402C17.651 9.73402 18.084 10.246 17.986 10.807L19.464 11.063ZM1.237 20C1.383 20 1.5 20.118 1.5 20.263H0C0 20.945 0.553 21.5 1.237 21.5V20ZM10.342 7.89502C10.3047 8.1216 10.3172 8.35357 10.3785 8.57486C10.4399 8.79614 10.5486 9.00143 10.6972 9.17648C10.8458 9.35154 11.0307 9.49217 11.2391 9.58861C11.4475 9.68506 11.6744 9.73402 11.904 9.73402V8.23402C11.8918 8.23407 11.8797 8.23243 11.8687 8.22729C11.8576 8.22215 11.8478 8.21464 11.84 8.20528C11.8321 8.19592 11.8265 8.18495 11.8234 8.17315C11.8203 8.16136 11.8198 8.14902 11.822 8.13702L10.342 7.89502ZM4.623 9.77002C4.61064 9.6252 4.63184 9.47952 4.68678 9.34496C4.74171 9.2104 4.82782 9.0908 4.938 8.99602L3.958 7.85902C3.66802 8.10905 3.44156 8.42437 3.29726 8.77903C3.15296 9.13369 3.09495 9.51755 3.128 9.89902L4.623 9.77002Z" fill="#04BF5A"/>
                        </svg>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="mb-4 w-full md:w-3/4 lg:w-2/4">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          <div>
                            <ProgressBarKey title={'Adventures 40%'} color={'#167EE6'} />
                          </div>
                          <div>
                            <ProgressBarKey title={'Vacation 40%'} color={'#DD584F'} />
                          </div>
                          <div>
                            <ProgressBarKey title={'Fun places 40%'} color={'#FFC700'} />
                          </div>
                          <div>
                            <ProgressBarKey title={'Mysteries 40%'} color={'#E98862'} />
                          </div>
                          
                        </div>
                      </div>
                      <ProgressBar percentage={70} />
                    </div>
                  </div>


                  {/* customer dislikes */}
                  <div className="my-4 mb-8">
                    <div className="flex flex-row gap-2">
                      <p className="text-textBlack text-lg font-semibold">what customers dislike</p>
                      <div>
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.75 12.516L1.497 12.58C1.47978 12.7721 1.38924 12.9502 1.24416 13.0772C1.09909 13.2043 0.910639 13.2706 0.717959 13.2624C0.525279 13.2541 0.343177 13.172 0.209478 13.033C0.0757788 12.894 0.000758622 12.7089 0 12.516H0.75ZM17.986 10.693L17.28 6.613L18.759 6.357L19.464 10.437L17.986 10.693ZM10.995 1.5H6.346V0H10.995V1.5ZM5.435 2.338L4.623 11.73L3.128 11.601L3.941 2.208L5.435 2.338ZM17.28 6.613C16.773 3.683 14.131 1.5 10.995 1.5V0C14.821 0 18.121 2.669 18.759 6.357L17.28 6.613ZM11.005 17.65L10.342 13.605L11.822 13.363L12.485 17.407L11.005 17.65ZM4.938 12.504L6.377 13.744L5.397 14.881L3.958 13.641L4.938 12.504ZM8.994 17.778L9.47 19.612L8.018 19.988L7.542 18.155L8.994 17.778ZM10.188 19.972L10.333 19.925L10.792 21.353L10.647 21.4L10.188 19.972ZM8.273 15.934C8.585 16.518 8.828 17.137 8.994 17.778L7.542 18.155C7.40529 17.6284 7.20657 17.1198 6.95 16.64L8.273 15.934ZM10.333 19.925C10.4757 19.8818 10.6051 19.8032 10.7093 19.6965C10.8135 19.5899 10.8891 19.4587 10.929 19.315L12.381 19.691C12.2777 20.0795 12.0778 20.4356 11.8 20.7261C11.5222 21.0167 11.1755 21.2323 10.792 21.353L10.333 19.925ZM9.47 19.612C9.48981 19.6841 9.52513 19.751 9.5735 19.808C9.62186 19.865 9.6821 19.9107 9.75 19.942L9.099 21.293C8.83482 21.1671 8.60126 20.9851 8.41457 20.7597C8.22788 20.5344 8.09255 20.271 8.018 19.988L9.47 19.612ZM9.75 19.942C9.88686 20.0074 10.0435 20.0181 10.188 19.972L10.647 21.4C10.1363 21.5637 9.58231 21.5254 9.099 21.293L9.75 19.942ZM11.904 11.766H17.084V13.266H11.904V11.766ZM2.469 1.344L1.497 12.58L0.00300002 12.451L0.973 1.215L2.469 1.344ZM1.5 1.237V12.516H0V1.237H1.5ZM0.973 1.215C0.969949 1.25134 0.97549 1.28792 0.987334 1.32241C0.999178 1.35691 1.01807 1.38856 1.0428 1.41536C1.06753 1.44216 1.09757 1.46353 1.131 1.4781C1.16443 1.49267 1.20053 1.50013 1.237 1.5V0C1.963 0 2.531 0.622 2.469 1.344L0.973 1.215ZM12.485 17.407C12.61 18.167 12.575 18.945 12.381 19.691L10.929 19.314C11.069 18.771 11.096 18.204 11.005 17.65L12.485 17.407ZM6.346 1.5C6.11685 1.50042 5.89619 1.58671 5.72754 1.74184C5.55889 1.89697 5.45451 2.10968 5.435 2.338L3.941 2.208C3.99303 1.60584 4.26888 1.04505 4.71411 0.636295C5.15933 0.227539 5.74159 0.000507786 6.346 0V1.5ZM6.377 13.744C7.057 14.33 7.789 15.027 8.274 15.934L6.95 16.641C6.604 15.992 6.053 15.445 5.397 14.881L6.377 13.744ZM19.464 10.437C19.5242 10.784 19.5078 11.14 19.416 11.48C19.3241 11.82 19.1591 12.1358 18.9323 12.4053C18.7056 12.6749 18.4227 12.8915 18.1034 13.0402C17.7841 13.1889 17.4362 13.2659 17.084 13.266V11.766C17.2175 11.7659 17.3495 11.7367 17.4705 11.6803C17.5915 11.6238 17.6988 11.5416 17.7847 11.4394C17.8707 11.3372 17.9332 11.2174 17.968 11.0885C18.0027 10.9595 18.0089 10.8246 17.986 10.693L19.464 10.437ZM1.237 1.5C1.30675 1.5 1.37365 1.47229 1.42297 1.42297C1.47229 1.37365 1.5 1.30675 1.5 1.237H0C0 0.555 0.553 0 1.237 0V1.5ZM10.342 13.605C10.3047 13.3784 10.3172 13.1464 10.3785 12.9252C10.4399 12.7039 10.5486 12.4986 10.6972 12.3235C10.8458 12.1485 11.0307 12.0079 11.2391 11.9114C11.4475 11.815 11.6744 11.766 11.904 11.766V13.266C11.854 13.266 11.814 13.311 11.822 13.363L10.342 13.605ZM4.623 11.73C4.61064 11.8748 4.63184 12.0205 4.68678 12.1551C4.74171 12.2896 4.82782 12.4092 4.938 12.504L3.958 13.641C3.66802 13.391 3.44156 13.0756 3.29726 12.721C3.15296 12.3663 3.09495 11.9825 3.128 11.601L4.623 11.73Z" fill="#FE8181"/>
                        </svg>

                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="mb-4 w-full md:w-3/4 lg:w-2/4">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          <div>
                            <ProgressBarKey title={'Adventures 40%'} color={'#167EE6'} />
                          </div>
                          <div>
                            <ProgressBarKey title={'Vacation 40%'} color={'#DD584F'} />
                          </div>
                          <div>
                            <ProgressBarKey title={'Fun places 40%'} color={'#FFC700'} />
                          </div>
                          <div>
                            <ProgressBarKey title={'Mysteries 40%'} color={'#E98862'} />
                          </div>
                          
                        </div>
                      </div>
                      <ProgressBar percentage={70} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>


          <div className="w-full mb-4">
            <h1 className="text-textBlack text-2xl font-semibold lato-bold mb-4">Reviews</h1>
          </div>
          <div className="border-[1px] border-lighterGray rounded-md h-max pb-12 px-4">
            {
              notifications.map((item: Notification, idx: number) => (<NotificationMessage key={idx} data={item} />))
            }
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default ReviewsPage;