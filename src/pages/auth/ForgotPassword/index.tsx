import { FC, useState } from 'react';
import ForgotPasswordComp from '../../../components/auth/ForgotPasswordComp';
import ForgotPasswordComp2 from '../../../components/auth/ForgotPasswordComp/ForgotPasswordComp2';
import ForgotPasswordComp3 from '../../../components/auth/ForgotPasswordComp/ForgotPasswordComp3';



const ForgotPasswordPage: FC = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <>
      {
        step === 1 && 
        <ForgotPasswordComp changeStep={setStep} />
      }
      {
        step === 2 && 
        <ForgotPasswordComp2 changeStep={setStep}/>
      }
      {
        step === 3 && 
        <ForgotPasswordComp3/>
      }
    
    </>
  )
}

export default ForgotPasswordPage;