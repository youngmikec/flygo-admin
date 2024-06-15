import { useNavigate } from "react-router-dom";


import googleSvg from '../../../assets/svg/google-svg.svg';

import AppCarousel from "../../app/AppCarousel";
import AuthWrapper from "../auth-wrapper";

import keyLockSvg from '../../../assets/svg/key-lock.svg';
import AppButton from "../../app/AppButton";


const ForgotPasswordComp3 = () => {
  const navigate = useNavigate();
  const goToLogin = () => navigate("/sign-in");
  return (
    <>
      <AuthWrapper>
        <div className="flex flex-col md:flex-row lg:flex-row gap-4">
          {/* Header */}
          <div className="w-full p-4">
            <div className="mx-auto w-8/12">
              <div className="flex justify-center">
                <img src={keyLockSvg} width={"70px"} height={"70px"} alt="Password reset successful svg" />
              </div>
              <h1 className="text-2xl lato-bold font-bold text-textBlack text-center">Password reset successful</h1>
              <p className="text-sm lato-regular text-textBlack mb-4 text-center">
                your password has been successfully reset
              </p>
            </div>


            {/* Form */}
          <div className="mt-12">
            <div className="mt-[25%] mb-4">
              <div className="flex justify-center">
                <AppButton 
                  width="full"
                  fill="fill"
                  btnText="Log in"
                  bgColor="primary"
                  type="submit"
                  onClick={goToLogin}
                />
              </div>

              <div className="my-12 w-full relative">
                <hr className="border-[1px] w-full border-lighterGray/30" />
                <p className="bg-white absolute p-1 -top-3 left-1/2 rounded-xl text-sm text-textBlack lato-regular">OR</p>
              </div>

              <div className="flex justify-center">
                <AppButton 
                  width="full"
                  fill="fill"
                  btnText="Sign up with Google"
                  btnIcon={<img src={googleSvg} alt="google" />}
                  iconPosition="left"
                  bgColor="gray"
                  type="submit"
                />
              </div>
            </div>
          </div>

          {/* Form */}
          </div>
          {/* Header */}


          <div className="w-full">
            <AppCarousel />
          </div>
        </div>
      </AuthWrapper>
    </>
  );
}

export default ForgotPasswordComp3;