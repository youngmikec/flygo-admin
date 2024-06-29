import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'animate.css';

import { RootState } from '../../../store';
import { CloseAppModal } from '../../../store/modal';


type Props = {
  children: ReactNode,
  title?: string;
  width?: 'lg' | 'md' | 'sm';
}

const AppModalComp = ({ children, title = '', width = 'lg' }: Props) => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(true);
    const [animation, setAnimation] = useState<string>('animate__fadeInUp');
    const displayModal: boolean = useSelector((state: RootState) => state.modalState.displayModal);
    // close modal
    const closeModal = () => {
      setAnimation('animate__fadeOutDown');
      setTimeout(() => {
        dispatch(CloseAppModal());
      }, 800);
    }

    const getWidthDimensions = (w: string): string => {
      let dimension: string = '';
      if(w === 'lg') {
        dimension = 'w-11/12 sm:w-11/12 md:w-10/12 lg:w-7/12';
      }
      if(w === 'md') {
        dimension = 'w-11/12 sm:w-9/12 md:w-8/12 lg:w-5/12';
      }
      if(w === 'sm') {
        dimension = 'w-11/12 sm:w-9/12 md:w-6/12 lg:w-4/12';
      }
      return dimension;
    }


    useEffect(() => {
      let interval: any;
      if (displayModal) {
        setAnimation('animate__fadeInUp');
        interval = setTimeout(() => {
          setVisible(true);
        }, 500);
      }else {
        setAnimation('animate__fadeOutDown');
        interval = setTimeout(() => {
          setVisible(true);
        }, 500);
      }

      return () => {
        clearTimeout(interval);
      }
    }, [displayModal]);

    return (
        <>  
            {
              displayModal &&
              <div 
                className="fixed top-0 bottom-0 left-0 right-0 bg-[#4242428f] w-full h-full z-30 overflow-scroll"
                // onClick={() => closeModal()}
              >
                <div className='my-24'>
                    <div 
                      className={`
                      bg-white p-2 lg:p-4 rounded-lg 
                      ${getWidthDimensions(width)} min-h-[400px] max-h-[80%] mx-auto
                        animate__animated ${animation}
                      `}
                    >
                      {/* animate__animated animate__fadeOutDown */}
                      <div className='flex justify-between mb-8'>
                          <div>
                            <h3>{ title }</h3>
                          </div>
                          <div className="relative bg-white rounded-lg shadow">
                              <button 
                                type="button" 
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" 
                                data-modal-hide="popup-modal"
                                onClick={() => closeModal()}
                              >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                              </button>
                          </div>
                      </div>

                      {/* content */}
                      <div className='min-h-52'>
                        {
                          children
                        }
                      </div>
                      {/* content */}
                    </div>
                    
                </div>
              </div>
            }
        </>
    );
}

export default AppModalComp;