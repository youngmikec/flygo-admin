import { FC } from 'react';
import { useDispatch } from 'react-redux';
// import { CloseAppModal } from '../../../store/modal';

import deleteImg from '../../../assets/svg/delete.svg';
import AppButton from '../AppButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { CloseLogoutModal } from '../../../store/modal/logout-modal';



const LogoutModalComp: FC = () => {
    const dispatch = useDispatch();
    const displayModal: boolean = useSelector((state: RootState) => state.logoutModal.displayModal);
    // close modal
    // const closeModal = () => {
    //     dispatch(CloseAppModal());
    // }

    // close modal
    const closeModal = () => {
        dispatch(CloseLogoutModal());
    }

    const handleLogout = () => {;
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <>
            <div className="p-6 my-8">
              <div className="bg-skyBlue p-6 min-h-[150px] rounded-lg">
                <div className="flex justify-center mb-4">
                  <img src={deleteImg} width="30px" height="30px" alt="delete" />
                </div>

                <div className="my-4">
                  <h1 className="text-textBlack text-xl text-center font-bold lato-bold">Are you sure you want to logout ?</h1>
                  {/* <p className="text-textBlack text-center">This change will reflect on your list immediately</p> */}
                </div>
              </div>


                <div className="flex justify-center gap-4 mt-8">
                  <div>
                    <AppButton 
                      btnText='Cancel'
                      fill='fill'
                      width='max'
                      bgColor='blue'
                      disabled={true}
                      loading={true}
                      onClick={closeModal}
                    />
                  </div>
                  <div>
                    <AppButton 
                      btnText='Logout'
                      fill='outline'
                      width='max'
                      bgColor='gray'
                      disabled={true}
                      loading={true}
                      onClick={handleLogout}
                    />
                  </div>
                </div>
                
            </div>
        </>
    )
}

export default LogoutModalComp;