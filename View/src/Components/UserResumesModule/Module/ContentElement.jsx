import React, { Component } from "react";

class ContentElement extends Component {
  render() {
    return (
      <>
        <div className="mb-5 sm:hidden">
          {/* <div className="dashboard__item relative h-16 w-full cursor-pointer rounded-lg flex items-center border border-dashed border-gray-300">
            <div className="flex grow items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 81 80"
                className="-ml-2 mr-3 w-9 sm:mr-6 md:hidden"
              >
                <path
                  fill="url(#paint0_linear_339_39480.030842205922718247)"
                  fill-rule="evenodd"
                  d="M26.729 4.182c-8.107 0-14.914 7.017-14.914 15.526v38.857c0 8.8 6.297 16.185 14.914 16.185h26.908c8.295 0 14.56-7.876 14.56-16.185v-30.78c.028-.19.032-.407 0-.655v-1.811a2 2 0 00-.508-1.331L50.63 4.85a2 2 0 00-1.492-.669H26.729zm20.27 4h-20.27c-5.764 0-10.914 5.09-10.914 11.526v38.857c0 6.984 4.879 12.185 10.914 12.185h26.908c5.581 0 10.56-5.544 10.56-12.185V29.006h-.408c-2.022 0-4.688 0-6.716-.006C51.315 28.986 47 23.915 47 18.11V8.182zm4.365 4.74l10.422 11.72c-1.59-.002-3.3-.003-4.702-.007-2.97-.007-5.72-2.726-5.72-6.525v-5.189zM29.27 46.087C31.95 45.245 35.455 45 39 45c3.567 0 7.075.255 9.752 1.11 1.345.429 2.635 1.057 3.611 2.017C53.392 49.14 54 50.457 54 52.018c0 1.566-.614 2.883-1.65 3.892-.98.956-2.274 1.578-3.62 2.001C46.05 58.755 42.544 59 39 59c-3.567 0-7.075-.255-9.752-1.11-1.344-.429-2.634-1.057-3.61-2.017-1.03-1.013-1.638-2.33-1.638-3.891 0-1.566.614-2.884 1.65-3.893.98-.956 2.275-1.577 3.62-2zm-.828 4.866c-.307.299-.442.6-.442 1.028 0 .432.136.738.443 1.04.36.354.998.731 2.022 1.058 2.06.658 5.052.92 8.535.92 3.467 0 6.461-.253 8.529-.904 1.028-.324 1.67-.699 2.03-1.05.307-.3.441-.601.441-1.028 0-.432-.136-.738-.442-1.04-.36-.354-.998-.731-2.022-1.058-2.06-.658-5.053-.92-8.536-.92-3.467 0-6.46.253-8.529.904-1.028.323-1.668.698-2.03 1.05zM38.998 26c-4.434 0-8 3.564-8 8 0 4.434 3.566 8 8 8 4.436 0 8-3.566 8-8 0-4.436-3.564-8-8-8zm-4 8c0-2.226 1.775-4 4-4 2.227 0 4 1.773 4 4 0 2.225-1.774 4-4 4a3.98 3.98 0 01-4-4z"
                  clip-rule="evenodd"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_339_39480.030842205922718247"
                    x1="11.815"
                    x2="68.22"
                    y1="39.466"
                    y2="39.466"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EC008C"></stop>
                    <stop offset="1" stop-color="#FC6767"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-lg font-bold md:text-xl">New resume</p>
            </div>
            <button
              type="button"
              className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center outline-none hover:opacity-80 min-h-[30px] min-w-[30px] text-white bg-primaryBlack h-9 w-20 rounded-full sm:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 19"
                fill="currentColor"
                className="w-[1.5em]"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.8 2.452a1.3 1.3 0 10-2.6 0v5.316H2.885a1.3 1.3 0 000 2.6H8.2v5.315a1.3 1.3 0 002.6 0v-5.315h5.315a1.3 1.3 0 100-2.6H10.8V2.452z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center outline-none hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-10 text-[15px] min-w-[120px] text-white bg-primaryBlack md:hidden"
            >
              <span className="flex items-center justify-center mr-2 -ml-1 md:mr-3 md:-ml-[6px] pb-0 md:pb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19 19"
                  fill="currentColor"
                  className="w-[1.4em]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.8 2.452a1.3 1.3 0 10-2.6 0v5.316H2.885a1.3 1.3 0 000 2.6H8.2v5.315a1.3 1.3 0 002.6 0v-5.315h5.315a1.3 1.3 0 100-2.6H10.8V2.452z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              Create
            </button>
          </div> */}
        </div>
        <div className="w-full">
          <div className="space-y-4 md:space-y-5">
            <a
              className="dashboard__item flex  items-stretch  bg-white shadow-card "
              href=""
            >
              <div className="flex grow items-center">
                <p className="text-lg font-bold md:text-xl">Resume No. 1</p>
              </div>
              <div className="relative flex items-stretch"></div>
            </a>
          </div>
        </div>
        <div className="mt-5 sm:block">
          <div className="dashboard__item relative h-16 w-full cursor-pointer rounded-full md:pr-8 md:px-16 sm:px-9 flex items-center border border-dashed border-gray-300">
            <div className="flex grow items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 81 80"
                className="-ml-2 mr-3 w-9 sm:mr-6 md:hidden"
              >
                <path
                  fill="url(#paint0_linear_339_39480.7891467209011294)"
                  fill-rule="evenodd"
                  d="M26.729 4.182c-8.107 0-14.914 7.017-14.914 15.526v38.857c0 8.8 6.297 16.185 14.914 16.185h26.908c8.295 0 14.56-7.876 14.56-16.185v-30.78c.028-.19.032-.407 0-.655v-1.811a2 2 0 00-.508-1.331L50.63 4.85a2 2 0 00-1.492-.669H26.729zm20.27 4h-20.27c-5.764 0-10.914 5.09-10.914 11.526v38.857c0 6.984 4.879 12.185 10.914 12.185h26.908c5.581 0 10.56-5.544 10.56-12.185V29.006h-.408c-2.022 0-4.688 0-6.716-.006C51.315 28.986 47 23.915 47 18.11V8.182zm4.365 4.74l10.422 11.72c-1.59-.002-3.3-.003-4.702-.007-2.97-.007-5.72-2.726-5.72-6.525v-5.189zM29.27 46.087C31.95 45.245 35.455 45 39 45c3.567 0 7.075.255 9.752 1.11 1.345.429 2.635 1.057 3.611 2.017C53.392 49.14 54 50.457 54 52.018c0 1.566-.614 2.883-1.65 3.892-.98.956-2.274 1.578-3.62 2.001C46.05 58.755 42.544 59 39 59c-3.567 0-7.075-.255-9.752-1.11-1.344-.429-2.634-1.057-3.61-2.017-1.03-1.013-1.638-2.33-1.638-3.891 0-1.566.614-2.884 1.65-3.893.98-.956 2.275-1.577 3.62-2zm-.828 4.866c-.307.299-.442.6-.442 1.028 0 .432.136.738.443 1.04.36.354.998.731 2.022 1.058 2.06.658 5.052.92 8.535.92 3.467 0 6.461-.253 8.529-.904 1.028-.324 1.67-.699 2.03-1.05.307-.3.441-.601.441-1.028 0-.432-.136-.738-.442-1.04-.36-.354-.998-.731-2.022-1.058-2.06-.658-5.053-.92-8.536-.92-3.467 0-6.46.253-8.529.904-1.028.323-1.668.698-2.03 1.05zM38.998 26c-4.434 0-8 3.564-8 8 0 4.434 3.566 8 8 8 4.436 0 8-3.566 8-8 0-4.436-3.564-8-8-8zm-4 8c0-2.226 1.775-4 4-4 2.227 0 4 1.773 4 4 0 2.225-1.774 4-4 4a3.98 3.98 0 01-4-4z"
                  clip-rule="evenodd"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_339_39480.7891467209011294"
                    x1="11.815"
                    x2="68.22"
                    y1="39.466"
                    y2="39.466"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EC008C"></stop>
                    <stop offset="1" stop-color="#FC6767"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-lg font-bold md:text-xl">New resume</p>
            </div>
            <button
              type="button"
              className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center outline-none hover:opacity-80 min-h-[30px] min-w-[30px] text-white bg-primaryBlack h-9 w-20 rounded-full sm:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 19"
                fill="currentColor"
                className="w-[1.5em]"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.8 2.452a1.3 1.3 0 10-2.6 0v5.316H2.885a1.3 1.3 0 000 2.6H8.2v5.315a1.3 1.3 0 002.6 0v-5.315h5.315a1.3 1.3 0 100-2.6H10.8V2.452z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            {/* <button
              type="button"
              className="appearance-none bg-primaryBlack border-none cursor-pointer flex font-extrabold h-10 hover:opacity-80 items-center justify-center maxsm:hidden min-w-[120px] outline-none px-7 py-2 rounded-full text-[15px] text-white touch-manipulation"
            >
              <span className="flex items-center justify-center mr-2 -ml-1 md:mr-3 md:-ml-[6px] pb-0 md:pb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19 19"
                  fill="currentColor"
                  className="w-[1.4em]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.8 2.452a1.3 1.3 0 10-2.6 0v5.316H2.885a1.3 1.3 0 000 2.6H8.2v5.315a1.3 1.3 0 002.6 0v-5.315h5.315a1.3 1.3 0 100-2.6H10.8V2.452z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              Create
            </button> */}
          </div>
        </div>
      </>
    );
  }
}

export default ContentElement;
