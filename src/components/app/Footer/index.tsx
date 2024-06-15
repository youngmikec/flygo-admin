import { Link } from 'react-router-dom';

// icons
import { CgInstagram } from 'react-icons/cg';
import { GrFacebookOption, GrTwitter } from 'react-icons/gr';

import logo from '../../../assets/images/logo.png';


const Footer = () => {
    
    return (
        <>
            <div className='w-full footer-bg pt-32 pb-20 bg-[#042f9ccc] text-lightGray'>
                <div className="mx-auto w-10/12">
                    <div className="grid lg:space-x-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                        {/* column1 */}
                        <div>
                            <div className='mb-6'>
                                <img src={logo} alt="logo" width="50px" height="50px" />
                            </div>
                            <p className='text-justify text-lightGray lato-regular my-4 pr-8'>Welcome to FlyGo, your gateway to seamless travel experiences. As a top-notch flight booking and hotel reservation company, FlyGo is committed to simplifying your journeys.</p>
                            <ul className='list-none'>
                                <li className='inline-flex mx-3'>
                                    <a 
                                        href="https://web.facebook.com/profile.php?id=61557766280904&_rdc=1&_rdr" 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className='p-2 bg-white rounded-md'
                                    >
                                        <GrFacebookOption className="text-textBlack" />
                                    </a>
                                </li>
                                <li className='inline-flex mx-3'>
                                    <a 
                                        href="https://www.instagram.com/alloccupationservicesltd?igsh=MXFhM2ZweHdpdm1naw==" 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className='p-2 bg-white rounded-md'
                                    >
                                        <CgInstagram className="text-textBlack" />
                                    </a>
                                </li>

                                <li className='inline-flex mx-3'>
                                    <a 
                                        href="https://twitter.com/AOSL2023"
                                        target="_blank"
                                        rel="noreferrer"
                                        className='p-2 bg-white rounded-md'
                                    >
                                        <GrTwitter className="text-textBlack" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* column2 */}
                        <div>
                            <h3 className='text-lightGray text-xl font-bold mb-6 lato-regular'>Company Name</h3>

                            <ul className='list-none text-lightGray'>
                              <li className='my-4 font-light lato-regular'>
                                  <Link to="/about">About us</Link>
                              </li>
                              <li className='my-4 font-light lato-regular'>
                                  <Link to="/contact">Contact</Link>
                              </li>
                            </ul>
                        </div>

                        {/* column3 */}
                        <div>
                            <h3 className='text-lightGray text-xl font-bold mb-6 lato-regular'>Learn more</h3>

                            <ul className='list-none text-lightGray'>
                              <li className='my-4 font-light lato-regular'>
                                Book @ flygo
                              </li>
                              <li className='my-4 font-light lato-regular'>
                                Affiliates
                              </li>
                              <li className='my-4 font-light lato-regular'>
                                <Link to="/privacy-policy">Privacy & Policy</Link>
                              </li>
                              <li className='my-4 font-light lato-regular'>
                                <Link to="/terms">Terms & Conditions</Link>
                              </li>
                            </ul>
                        </div>

                        {/* column4 */}
                        <div>
                      
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer