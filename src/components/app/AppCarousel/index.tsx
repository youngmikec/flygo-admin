

import loginImg from '../../../assets/images/login-img1.png';

const AppCarousel = () => {
  return (
    <>
      <div id="indicators-carousel" className="relative w-full min-h-full" data-carousel="static">
          {/* <!-- Carousel wrapper --> */}
          <div className="relative h-56 overflow-hidden rounded-xl md:h-96">
              {/* <!-- Item 1 --> */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                {/* <img src={loginImg} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." /> */}
                <div className="h-full absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <img src={loginImg} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                  <p className="text-4xl text-center">Welcome</p>
                </div>
              </div>
              {/* <!-- Item 2 --> */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src={loginImg} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              {/* <!-- Item 3 --> */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src={loginImg} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              {/* <!-- Item 4 --> */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={loginImg} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              {/* <!-- Item 5 --> */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src={loginImg} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
          </div>

          {/* <!-- Slider indicators --> */}
          <div className="absolute z-50 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-0 left-1/2">
              <button type="button" className="w-3 h-3 rounded-full bg-primary text-primary" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-primary text-primary" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-primary text-primary" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-primary text-primary" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-primary text-primary" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
          </div>
          {/* <!-- Slider controls --> */}


          <button type="button" className="absolute bottom-10 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-primary dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="#FF8609" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                  </svg>
                  <span className="sr-only">Previous</span>
              </span>
          </button>
          <button type="button" className="absolute bottom-10 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-primary dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="#FF8609" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="sr-only">Next</span>
              </span>
          </button>
      </div>
    </>
  )
}

export default AppCarousel;