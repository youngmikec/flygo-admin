import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


import googleSvg from '../../../assets/svg/google-svg.svg';

import AppCarousel from "../../app/AppCarousel";
import AuthWrapper from "../auth-wrapper";

import logo from '../../../assets/images/logo.png';
// import InputField from "../../form/InputField";
import AppButton from "../../app/AppButton";
// import { getItem } from "../../../helpers";


type inputProps={
  type:string,
  placeholder:string,
  focus:boolean,
  value:string,
  id:Number;
}

type Props = {
  changeStep: (data: number) => any
}


const ForgotPasswordComp2 = ({ changeStep }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
    
    const [loading, setLoading] = useState<boolean>(false);
    const [inputs, setInput] = useState<inputProps[]> ([
      {type:'text', placeholder:'0', focus: true, value:'', id: 0},
      {type:'text', placeholder:'0', focus: false, value:'', id: 1},
      {type:'text', placeholder:'0', focus: false, value:'', id: 2},
      {type:'text', placeholder:'0', focus: false, value:'', id: 3},
      {type:'text', placeholder:'0', focus: false, value:'', id: 4},
      {type:'text', placeholder:'0', focus: false, value:'', id: 5},
    ]);
    // const [codes, setCodes] = useState<string[] | any>([]);
    // let code: string = '';

    const changeFocus = () => {
      inputRef.current?.focus();
    }

    const changeInput=(id:Number, value:string)=>{
      const tempInput:inputProps[] = [...inputs];     
      tempInput.forEach((e, i, a) => {
        if(e.id === id){
          if(value !== ''){
            e.value = value;
            // setCodes((prev: string[]) => [...prev, value]);
            e.focus = false;
            if(i < 5){
              a[i + 1].focus = true
            }
            if(i === 4) e.focus = true
          }else{
            e.value = '';
            // setCodes(codes.pop());
            if(i >= 1 ) {
              a[i - 1].focus = true;
              e.focus = false;
            }
          }
        }
      });
      setInput(tempInput);
    }

    const handleSubmit = (e: any) => {
      e.preventDefault();
      setLoading(true);
      changeStep(3);
      setLoading(false);
      // if(!!code){
      //   setLoading(true);
      //   // const id = getItem('xxid');
      //   // const data = { id, resetCode: code };
      //   // VERIFY_RESET_CODE(data).then((res: AxiosResponse<ApiResponse>) => {
      //   //   setLoading(false);
      //   //   const { message } = res.data;
      //   //   setItem('clientD', res.data.payload)
      //   //   notify('success', message);
      //   //   changeStep(3)
      //   // }).catch((err: any) => {
      //   //   setLoading(false);
      //   //   const { message } = err.response.data;
      //   //   notify('error', message);
      //   //   changeStep(2)
      //   // })
      // }
    }

   useEffect(() => {
    // let code: string = '';
    // code = inputs.map(i => i.value).join('');
    inputRef && changeFocus();
   },[inputs]);


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
                kindly enter the six digit code sent to your email @joshuachinonso45@gmail.com
              </p>
            </div>


            {/* Form */}
          <div className="mt-12">
            <form onSubmit={handleSubmit}>
              {/* <InputField 
                name="email"
                type="email"
                label="Email Address"
                labelPosition={'out'}
                placeholder="Please enter your email"
                value={values.email}
                isError={(touched.email && errors.email) ? true : false}
                errMsg={errors && errors.email}
                onChange={handleChange}
              /> */}
              <div className='my-10'>
                <h1 className="text-2xl lato-bold font-bold text-lightGray mb-4">Enter OTP</h1>
                <div className='my-2 flex justify-between'>
                  {inputs.map((e, i)=>{
                      return(
                        <input
                          key={i}
                          type='text'
                          maxLength={1}
                          ref={e.focus ? inputRef : null}
                          autoFocus={true}
                          placeholder="0"
                          onChange={(e)=> { 
                            changeInput(i, e.target.value)
                          }}
                          className="rounded-md w-2/12 h-14 text-center mx-1 my-6  focus:outline-none focus:ring-0 text-textBlack border-lighterGray border-solid border"
                      />
                      )
                  })}
                </div>
              </div>

              <div className="mt-[25%] mb-4">
                <div className="flex justify-center">
                  <AppButton 
                    width="full"
                    fill="fill"
                    btnText="Verify"
                    bgColor="primary"
                    loading={loading}
                    type="submit"
                  />
                </div>

                <div className="my-12 w-full relative">
                  <hr className="border-[1px] w-full border-lighterGray/30" />
                  <p className="bg-white absolute p-1 -top-3 left-1/2 rounded-lg text-sm text-textBlack lato-regular">OR</p>
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

export default ForgotPasswordComp2;