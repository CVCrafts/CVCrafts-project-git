import React, { Component } from 'react'
import './Editor.style.css'
export class Editor extends Component {
  render() {
    return (
      <>
            <div className="relative min-h-screen w-full max-w-full bg-homeBackgroundColor sidebar:px-6 xl:px-8 2xl:px-10">
                <div className="fixed right-4 bottom-18 z-[8] grid justify-items-center  gap-4 sidebar:hidden">
                    {/* some link here */}
                    <a href="3" className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">

                    </a>
                    <a href="3" className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md"></a>
                    <a href="3" className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md"></a>

                    <button className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center outline-none transition-transform duration-200 hover:scale-[1.03] min-h-[30px] min-w-[30px] text-white bg-primaryBlack h-15 w-15 rounded-full" type='button' name='review'>

                    </button>
                </div>

                <div className="grid w-full max-w-full grid-cols-1 sidebar:grid-cols-[min-content_max(550px)_auto] sidebar:justify-center lgxl:grid-cols-[min-content_max(570px)_auto] xl:grid-cols-[min-content_max(600px)_auto]  2xl:grid-cols-[min-content_max(650px)_auto] 3xl:grid-cols-[min-content_max(700px)_auto] ">
                    <div className="C-sc-12po8wc-0 BaFjt">
                        <div className="sticky top-0 w-full sidebar:top-8">
                            <nav className="Nav-sc-12po8wc-1 jiqQjb">
                                <div className="Grid-sc-12po8wc-2 gPPcGe">
                                    {/* a link here logo */}

                                    <div className="NavLinks-sc-12po8wc-3 ktRwas">
                                        <a href="#" className="StyledNavLink-sc-1noyufq-0 bzcBIG active">
                                            <span className="Inner-sc-1noyufq-1 buzFio">
                                                <span className="IconWrapper-sc-1noyufq-2 eRUSZY">
                                                    {/* span element to hold svg */}

                                                    <span className="TextWrapper-sc-1noyufq-3 crdhUE">Content</span>
                                                </span>
                                            </span>
                                        </a>

                                        <a href="#" className="StyledNavLink-sc-1noyufq-0 bzcBIG active" hidden>
                                            <span className="Inner-sc-1noyufq-1 buzFio">
                                                <span className="IconWrapper-sc-1noyufq-2 eRUSZY">
                                                    {/* span element to hold svg */}

                                                    <span className="TextWrapper-sc-1noyufq-3 crdhUE">Design</span>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="w-full sidebar:px-6 xl:px-8 2xl:px-10">
                        {/* Header of editor and download */}

                        <div className="w-full max-w-[800px] px-6 pb-16 sidebar:max-w-none sidebar:px-0">
                            <div className="w-full pb-8">
                                <div className="">
                                    <div className="w-full rounded-large bg-white shadow-card px-5 md:px-7 lg:px-9 max-w-full cursor-pointer break-words pt-6 pb-9">
                                        <div className="mt-4 grid w-full grid-cols-[1fr_100px] gap-3">
                                            <div>
                                                <p class="text-xl font-bold">
                                                    <span class="text-placeholderGrayOnWhite">Your name</span>
                                                </p>
                                                <span class="mt-6 flex items-center  text-placeholderGrayOnWhite">Email</span>
                                                <span class="mt-4 flex   items-center text-placeholderGrayOnWhite">Phone</span>
                                                <span class="mt-4 flex items-center  text-placeholderGrayOnWhite">Address</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </>
    )
  }
}

export default Editor