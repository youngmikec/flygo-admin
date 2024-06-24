import { useState } from 'react';
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { IoMoonOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiLock } from "react-icons/ci";





import ToggleInput from "../../../components/form/ToggleInput";
import AppButton from '../../../components/app/AppButton';
import InputField from '../../../components/form/InputField';
import DashboardLayout from '../../../components/Layout/DashboardLayout';


const SettingsPage = () => {
  const [show, setShow] = useState<boolean>(false);
  const toggleDisplay = () => setShow(prev => !prev);
  
  return (
    <>
      <DashboardLayout>
        <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12">
          <h1 className="text-textBlack text-2xl font-bold lato-bold mb-1">Account Settings</h1>
          <p className="text-textBlack">Make changes to your account</p>

          <div className="my-4">
            {/* dark mode */}
            <div className="p-4 rounded-lg border-[1px] border-lighterGray my-4">
              <div className="flex justify-between">
                <div className="flex justify-start gap-4">
                  <div className="text-textBlue">
                    <IoMoonOutline size={20} className="text-textBlue" />
                  </div>
                  <div>
                    <h1 className="text-textBlack text-lg font-bold lato-bold mb-1">Dark mode</h1>
                    <p className="text-textBlack">switch display mode to your preference</p>

                    <div className="my-4">
                      <ToggleInput 
                        name="darkMode" 
                        label=""
                        value="Dark Mode" 
                        isChecked={true}
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div onClick={toggleDisplay}>
                    {
                      show ? <FaAngleUp size={20} className="text-textBlack" />:
                      <FaAngleDown size={20} className="text-textBlack" />
                    }
                  </div>
                </div>
              </div>
            </div>
            {/* dark mode */}

            {/* notification settings */}
            <div className="p-4 rounded-lg border-[1px] border-lighterGray my-4">
              <div className="flex justify-between">
                <div className="flex justify-start gap-4">
                  <div className="text-textBlue">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4505 10.8063V14.7171H2.54883V10.8063C2.54883 6.99045 5.63633 3.90295 9.45216 3.90295H9.54716C13.363 3.90295 16.4505 6.99045 16.4505 10.8063Z" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.5 1.58337V3.90295" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.3895 14.717C12.2866 16.2291 11.0278 17.4166 9.49993 17.4166C7.97201 17.4166 6.71327 16.2291 6.61035 14.717H12.3895Z" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-textBlack text-lg font-bold lato-bold mb-1">Dark mode</h1>
                    <p className="text-textBlack">switch display mode to your preference</p>

                    <div className="my-4 flex flex-row gap-4">
                      <ToggleInput 
                        name="darkMode" 
                        label="SMS Text"
                        value="Dark Mode" 
                        isChecked={true}
                        onChange={() => {}}
                      />
                      <ToggleInput 
                        name="darkMode" 
                        label="Email"
                        value="Dark Mode" 
                        isChecked={true}
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div onClick={toggleDisplay}>
                    {
                      show ? <FaAngleUp size={20} className="text-textBlack" />:
                      <FaAngleDown size={20} className="text-textBlack" />
                    }
                  </div>
                </div>
              </div>
            </div>
            {/* notification settings */}


            {/* password reset */}
            <div className="p-4 rounded-lg border-[1px] border-lighterGray my-4">
              <div className="flex justify-between">
                <div className="flex justify-start gap-4">
                  <div className="text-textBlue">
                    <CiLock size={20} className="text-textBlue" />
                  </div>

                  <div>
                    <h1 className="text-textBlack text-lg font-bold lato-bold mb-1">Password reset</h1>
                    <p className="text-textBlack">update your password </p>

                    <div className="mt-6 mb-4">
                      <InputField 
                        name="oldPassword"
                        type="password"
                        label="Old Password"
                        placeholder="Enter old password"
                        onChange={() => {}}
                        value=""
                        isError={true}
                        errMsg=""
                      />
                    </div>
                    <div className="my-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <InputField 
                          name="newPassword"
                          type="password"
                          label="New Password"
                          placeholder="pls enter new password"
                          onChange={() => {}}
                          value=""
                          isError={true}
                          errMsg=""
                        />
                      </div>
                      <div>
                        <InputField 
                          name="confirmPassword"
                          type="password"
                          label="Confirm New Password"
                          placeholder="pls enter new password"
                          onChange={() => {}}
                          value=""
                          isError={false}
                          errMsg=""
                        />
                      </div>
                    </div>

                    <div className="my-4 flex justify-end">
                      <AppButton 
                        btnText='Save'
                        fill={'fill'}
                        width={'max'}
                        bgColor={'blue'}
                        onClick={() => {}}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div onClick={toggleDisplay}>
                    {
                      show ? <FaAngleUp size={20} className="text-textBlack" />:
                      <FaAngleDown size={20} className="text-textBlack" />
                    }
                  </div>
                </div>
              </div>
            </div>
            {/* password reset */}

            {/* dark mode */}
            <div className="p-4 rounded-lg border-[1px] border-lighterGray my-4">
              <div className="flex justify-between">
                <div className="flex justify-start gap-4">
                  <div className="text-textBlue">
                    <RiDeleteBin6Line size={20} className="text-textBlue" />
                  </div>
                  <div>
                    <h1 className="text-textBlack text-lg font-bold lato-bold mb-1">Delete account</h1>
                    <p className="text-textBlack">Deactivate your account if you want to stop using this services</p>

                    <div className="my-4">
                      <AppButton 
                        btnText='Delete'
                        fill={'outline'}
                        width={'max'}
                        bgColor={'blue'}
                        onClick={() => {}}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div onClick={toggleDisplay}>
                    {
                      show ? <FaAngleUp size={20} className="text-textBlack" />:
                      <FaAngleDown size={20} className="text-textBlack" />
                    }
                  </div>
                </div>
              </div>
            </div>
            {/* dark mode */}

          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default SettingsPage;