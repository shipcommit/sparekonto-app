import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-blueGray-50">
      <div className="container mx-auto overflow-hidden">
        <div className="flex items-center justify-between px-4 py-5 bg-blueGray-50">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto mr-14">
                <a href="#">
                  {/* <Image
                    src="https://shuffle.dev/flaro-assets/images/headers/header.png"
                    width={100}
                    height={500}
                    alt="Hero image"
                  /> */}
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-16">
                  <li className="mr-9 font-medium hover:text-gray-700">
                    <a href="#">Lån</a>
                  </li>
                  <li className="mr-9 font-medium hover:text-gray-700">
                    <a href="#">Sparing</a>
                  </li>
                </ul>
              </div>
              <div className="w-auto hidden lg:block">
                <div className="inline-block">
                  <button
                    className="py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                    type="button"
                  >
                    Få bedre rente
                  </button>
                </div>
              </div>
              <div className="w-auto lg:hidden">
                <a href="#">
                  <svg
                    className="navbar-burger text-indigo-600"
                    width="51"
                    height="51"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="56"
                      height="56"
                      rx="28"
                      fill="currentColor"
                    ></rect>
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2">
                  <div className="w-auto p-2">
                    <a className="inline-block" href="#">
                      <img
                        src="flaro-assets/logos/flaro-logo-black.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-auto p-2">
                    <a className="navbar-burger" href="#">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="#111827"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center py-16 w-full">
                <ul>
                  <li className="mb-12">
                    <a className="font-medium hover:text-gray-700" href="#">
                      Lån
                    </a>
                  </li>
                  <li className="mb-12">
                    <a className="font-medium hover:text-gray-700" href="#">
                      Sparing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-end w-full pb-8">
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <div className="block">
                      <button
                        className="py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                        type="button"
                      >
                        Try 14 Days Free Trial
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="overflow-hidden pt-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/2 p-8">
              <h1 className="mb-6 text-6xl md:text-8xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none">
                Den beste renten for sparekontoen
              </h1>
              <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md">
                Vi finner den beste renten for alle sparekontoer i Norge, slik
                at du kan tjene mer på sparepengene
              </p>
              <div className="flex flex-wrap -m-2.5 mb-20">
                <div className="w-full md:w-auto p-2.5">
                  <div className="block">
                    <button
                      className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                      type="button"
                    >
                      Få bedre rente
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-auto p-2.5">
                  <div className="block">
                    <button
                      className="py-4 px-9 w-full font-semibold border border-gray-300 hover:border-gray-400 rounded-xl focus:ring focus:ring-gray-50 bg-transparent hover:bg-gray-100 transition ease-in-out duration-200"
                      type="button"
                    >
                      <div className="flex flex-wrap justify-center items-center -m-1">
                        <div className="w-auto p-1">
                          <span>Se oversikt</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap -m-3">
                <div className="w-auto p-3">
                  <img src="flaro-assets/logos/brands/brand.png" alt="" />
                </div>
                <div className="w-auto p-3">
                  <img src="flaro-assets/logos/brands/brand2.png" alt="" />
                </div>
                <div className="w-auto p-3">
                  <img src="flaro-assets/logos/brands/brand3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <img
                className="transform hover:-translate-y-16 transition ease-in-out duration-1000"
                src="flaro-assets/images/headers/header.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
