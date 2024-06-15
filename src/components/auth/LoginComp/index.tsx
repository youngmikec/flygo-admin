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


const LoginComp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    remember: false
  });

  const loginFormValidation = () => Yup.object({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required')
  })

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: formValues,
    enableReinitialize: true,
    validationSchema: loginFormValidation(),
    onSubmit: (values) => {
      const data = { ...values }
      setLoading(true);
      console.log('data', data);
    }
  })


  useEffect(() => {
    setFormValues({
      email: '',
      password: '',
      remember: false
    })
  }, [])

  return (
    <>
      <AuthWrapper>
        <div className="flex justify-center bg-white shadow-lg rounded-lg w-full sm:w-10/12 md:7/12 lg:w-5/12 mr-0 md:mr-20">
          {/* Header */}
          <div className="w-full py-12 px-6 md:px-20">
            <div className="">
              <h1 className="text-5xl lato-bold font-semibold text-textBlack mb-4">Welcome Back Admin!</h1>
              <p className="text-sm lato-regular mb-4">
                <Link to={'/sign-up'} className="text-primary text-xl font-bold mx-2">Sign up</Link>
              </p>
            </div>


            {/* Form */}
          <div className="mt-12">
            
            <form onSubmit={handleSubmit}>
              <InputField 
                name="email"
                type="email"
                label="Email Address"
                labelPosition={'out'}
                placeholder="Please enter your username"
                value={values.email}
                isError={(touched.email && errors.email) ? true : false}
                errMsg={errors && errors.email}
                onChange={handleChange}
              />

              <InputField 
                name="password"
                type="password"
                label="Password"
                labelPosition={'out'}
                placeholder="Please enter your password"
                value={values.password}
                isError={(touched.password && errors.password) ? true : false}
                errMsg={errors && errors.password}
                onChange={handleChange}
              />

              <div className="flex justify-between">
                <div>
                  <input type="checkbox" name="remember" id="remember" onChange={handleChange} />
                  <label htmlFor="remember" className="mx-2 text-textBlack">Remember me</label>
                </div>
                <div>
                  <Link to={'/forgot-password'} className="text-primary font-bold">Forgot password?</Link>
                </div>
              </div>

              <div className="mt-12 mb-4">
                <div className="flex justify-center">
                  <AppButton 
                    width="full"
                    fill="fill"
                    btnText="Sign in"
                    bgColor="primary"
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
        </div>
      </AuthWrapper>
    </>
  );
}

export default LoginComp;