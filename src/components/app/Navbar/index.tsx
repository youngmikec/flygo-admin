import { useState } from "react";
import { Link } from "react-router-dom";

// icons
import { FiMenu } from 'react-icons/fi';
import { CiSearch } from "react-icons/ci";
import { PiGlobe } from "react-icons/pi";

import './style.css';
import logo from '../../../assets/images/logo.png';
import profile from '../../../assets/images/ezeh.png';
import InputField from "../../../components/form/InputField";


const Navbar = () => {
  const [show, setShow] = useState(false);
  const toggleShowDrowdown = () => setShow(!show);
  return (
    <>
      <div className="navbar-bg px-12">
        <div className='hidden sm:hidden md:flex lg:flex w-full py-4 justify-between gap-8'>
          <div className="w-1/6">
            <Link to='/'>
                <img src={logo} alt="logo" width="60px" height="60px" />
            </Link>
          </div>

          <div className='pt-3 w-3/6 '>
              <InputField 
                type="text"
                name="search"
                isError={false}
                rightIcon={<CiSearch size={20} className="text-textBlack" />}
                errMsg=""
                value={''}
                onChange={() => {}}
              />
          </div>

          <div className="flex justify-between gap-4 pt-4">
            <div className="mt-2">
              <select name="searchQuery" className="bg-transparent border-0 p-0 focus:outline-none focus:ring-0">
                <option value="EN">EN</option>
                <option value="FR">FR</option>
                <option value="GH">GH</option>
              </select>

            </div>
            <div className="mt-2">
              <PiGlobe size={20} className="text-textBlack" />
            </div>
            <div className="mt-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4505 10.8063V14.7171H2.54883V10.8063C2.54883 6.99045 5.63633 3.90295 9.45216 3.90295H9.54716C13.363 3.90295 16.4505 6.99045 16.4505 10.8063Z" stroke="#121212" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.5 1.58337V3.90295" stroke="#414141" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.3895 14.717C12.2866 16.2291 11.0278 17.4166 9.49993 17.4166C7.97201 17.4166 6.71327 16.2291 6.61035 14.717H12.3895Z" stroke="#121212" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </div>
            <div className="flex flex-row gap-2">
              <div>
                <img src={profile} width="40px" height="40px" className="rounded-full" alt="profile" />
              </div>
              <div>
                <p className="font-bold lato-bold text-textBlack my-auto">Joshua Blake45</p>
              </div>
            </div>
          </div>
        </div>


        {/* mobile view */}
        <div className="block sm:block md:hidden lg:hidden dropdownmenu mx-auto w-full pt-8">
            <div className='flex justify-between'>
                <div className="mt-5" style={{width: '10%'}}>
                    <img src={logo} style={{width: '100%'}} alt="logo" />
                </div>
                <div className="flex justify-right">
                    <div>
                        <div className='pt-4 dropdown relative'>
                          <button className="
                              dropdown-toggle
                              px-6
                              py-2.5
                              text-white hover:border-b-2 hove                     font-medium
                              font-lg
                              leading-tight
                              uppercase
                              rounded
                              hover:bg-white hover:shadow-lg hover:text-primary
                              focus:bg-white focus:text-primary focus:shadow-lg focus:outline-none focus:ring-0
                              active:bg-white active:shadow-lg active:text-primary
                              transition
                              duration-150
                              ease-in-out
                              flex
                              items-center
                              whitespace-nowrap
                              "
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="true"
                              onClick={() => toggleShowDrowdown()}
                          >
                          <span className='font-lg text-4xl'>
                            <FiMenu className="text-primary" />
                          </span>
                      
                          </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`w-full bg-white px-4 absolute transition-all ease-in delay-700 top-0 ${ show ? 'block' : 'hidden' } left-0 h-screen z-40`}>
              {/* mobile view content */}
            </div>

        </div>
        {/* mobile view */}
      </div>
    </>
  )

}
export default Navbar;