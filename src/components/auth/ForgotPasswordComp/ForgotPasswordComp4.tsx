import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

import googleSvg from '../../../assets/svg/google-svg.svg';

import AppCarousel from "../../app/AppCarousel";
import AuthWrapper from "../auth-wrapper";

import logo from '../../../assets/images/logo.png';
import InputField from "../../form/InputField";
import AppButton from "../../app/AppButton";

type Props = {
  changeStep: (data: number) => any
}


const ForgotPasswordComp4 = ({ changeStep }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState({
    password: '',
    confirmPassword: ''
  });

  const loginFormValidation = () => Yup.object({
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password')], 'Passwords must match')
  })

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: formValues,
    enableReinitialize: true,
    validationSchema: loginFormValidation(),
    onSubmit: (values) => {
      const data = { ...values }
      setLoading(true);
      changeStep(2)
      console.log('data', data);
    }
  })


  useEffect(() => {
    setFormValues({
      password: '',
      confirmPassword: ''
    })
  }, []);

  return (
    <>
      <AuthWrapper>
        <div className="flex flex-col md:flex-row lg:flex-row gap-4">
          {/* Header */}
          <div className="w-full p-4">
            <div className="mx-auto w-8/12">
              <div className="flex justify-center">
                <Link to={'/'}>
                  <img src={logo} width={"50px"} height={"50px"} alt="" />
                </Link>
              </div>
              <h1 className="text-2xl lato-bold font-bold text-textBlack text-center">Forgot your password?</h1>
              <p className="text-sm lato-regular text-textBlack mb-4 text-center">
                Go back to 
                <Link to={'/sign-in'} className="text-primary font-bold mx-2">Sign in</Link>
              </p>
              <p className="text-sm lato-regular text-textBlack mb-4 text-center">
                Enter your registered email address and you will receive an email with password reset code
              </p>
            </div>


            {/* Form */}
          <div className="mt-12">
            <form onSubmit={handleSubmit}>
              <InputField 
                name="password"
                type="password"
                label="New Password"
                labelPosition={'out'}
                placeholder="Please enter your new password"
                value={values.password}
                isError={(touched.password && errors.password) ? true : false}
                errMsg={errors && errors.password}
                onChange={handleChange}
              />

              <InputField 
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                labelPosition={'out'}
                placeholder="Please enter your password"
                value={values.confirmPassword}
                isError={(touched.confirmPassword && errors.confirmPassword) ? true : false}
                errMsg={errors && errors.confirmPassword}
                onChange={handleChange}
              />

              <div className="mt-[25%] mb-4">
                <div className="flex justify-center">
                  <AppButton 
                    width="full"
                    fill="fill"
                    btnText="Confirm"
                    bgColor="primary"
                    loading={loading}
                    type="submit"
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
                    loading={loading}
                    type="submit"
                  />
                </div>
              </div>
              
            </form>

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

export default ForgotPasswordComp4;