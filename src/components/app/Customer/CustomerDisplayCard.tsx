import { FC } from "react";

type Props = {
  data: {
    profileImg: string
    name: string
  }
}

const CustomerDisplayCard: FC<Props> = ({ data: { profileImg, name }}) => {
  return (
    <>
      <div>
        <div className='flex justify-center'>
          <img src={profileImg} className="w-16 h-16 rounded-full" alt="customer" />
        </div>
        <p className="text-textBlue text-lg font-semibold lato-bold">{name}</p>
      </div>
    </>
  )
}

export default CustomerDisplayCard