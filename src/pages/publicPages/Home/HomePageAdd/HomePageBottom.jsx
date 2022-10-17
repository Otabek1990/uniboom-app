import React from 'react'
import iphone from '../../../../assets/images/iPhone 13 Pro Mockup Right View.png'
import scaner from '../../../../assets/images/scaner.jpg'

function HomePageBottom(props) {
  return (
    <div>
      <div className="w-full bg-blue-300 flex rounded-xl mt-14 px-14 items-center justify-between">
        <div className="w-50% ">
          <h3 className="text-md text-white-100 font-bold">
            Ilovani ko'chiring va chegirma hamda <br /> aksiyalar haqida
            birinchi bo'lib biling!
          </h3>
          <div className="w-50% flex pt-4">
            <button className="ml-1 px-5 py-1 flex items-center bg-white-100  rounded-md">
              <svg
                width="31"
                height="35"
                viewBox="0 0 31 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.76018 0.637209C2.39429 0.55488 3.0373 0.695538 3.57912 1.0351L22.0528 11.5367L17.3775 16.2688L1.76018 0.637209ZM0.339124 2.05826C0.250033 2.36764 0.20694 2.68844 0.211229 3.01037V32.3693C0.20694 32.6912 0.250033 33.012 0.339124 33.3214L15.9707 17.6898L0.339124 2.05826ZM17.3918 19.1109L1.76018 34.7425C2.39459 34.8323 3.04014 34.691 3.57912 34.3446L22.0528 23.843L17.3918 19.1109ZM29.4991 15.7856L23.9002 12.6025L18.7844 17.6898L23.886 22.7914L29.4849 19.6083C31.3323 18.5567 31.3323 16.823 29.4849 15.7714L29.4991 15.7856Z"
                  fill="#171515"
                />
              </svg>
              <div className="text-left pl-2">
                <h6 className="text-base font-normal  text-[13px]">
                  GET IT ON
                </h6>
                <h5 className="text-base font-bold">Google Play</h5>
              </div>
            </button>
            <button className="ml-4 px-5 py-1  flex items-center bg-white-100  rounded-md">
              <svg
                width="28"
                height="34"
                viewBox="0 0 28 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5709 18.13C22.5357 13.9285 26.0095 11.8864 26.1621 11.7926C24.1904 8.929 21.1391 8.52998 20.0711 8.49477C17.5127 8.22484 15.0247 10.0322 13.722 10.0322C12.3958 10.0322 10.3772 8.52998 8.21783 8.56518C5.43642 8.61213 2.81931 10.2199 1.39926 12.7314C-1.54646 17.8366 0.648163 25.3476 3.47652 29.4786C4.89657 31.4972 6.5396 33.7622 8.71074 33.6801C10.8232 33.5979 11.6213 32.3304 14.1679 32.3304C16.7029 32.3304 17.4423 33.6801 19.6486 33.6331C21.9254 33.5979 23.3454 31.6028 24.7185 29.5608C26.3498 27.2488 27.007 24.9603 27.0305 24.8429C26.9718 24.8194 22.6178 23.1529 22.5709 18.13Z"
                  fill="#171515"
                />
                <path
                  d="M18.4049 5.78368C19.5433 4.36363 20.3179 2.4272 20.1066 0.455566C18.4636 0.525982 16.3981 1.59395 15.2127 2.99053C14.1682 4.2228 13.2294 6.22964 13.4641 8.11912C15.3184 8.25996 17.2196 7.18025 18.4049 5.78368Z"
                  fill="#171515"
                />
              </svg>
              <div className="text-left pl-2">
                <h6 className="font-normal text-[13px]">Available-on-the</h6>
                <h5 className="text-base font-bold">App Store</h5>
              </div>
            </button>
          </div>
        </div>
        <div className="w-50% flex justify-between text-center">
          <div className="w-full justify-between items-center text-center">
            <div className="w-50% mr-4 relative">
              <img
                className="absolute left-[-300px] top-[-33px]"
                src={iphone}
                alt=""
              />
            </div>
            <div className="w-50% flex justify-between items-center p-7 text-right w50%">
              <img src={scaner} alt="" />
              <h4 className="ml-8 text-white-100 text-left text-md font-semibold">
                Yuklab olish <br /> uchun QR kod
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageBottom
