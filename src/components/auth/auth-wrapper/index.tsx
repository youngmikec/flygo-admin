import { FC } from 'react';
import { Link } from 'react-router-dom';


import './style.css';
import logo from '../../../assets/images/logo.png';



type Props = {
  children: JSX.Element
}

const AuthWrapper: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="w-full py-4 px-6 auth-bg">
        <div className="flex justify-start">
          <Link to={'/'}>
            <img src={logo} width={"60px"} height={"60px"} alt="" />
          </Link>
        </div>
        <div className="w-full min-h-[85vh]">
          <div className="flex justify-center md:justify-end lg:justify-end">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthWrapper;