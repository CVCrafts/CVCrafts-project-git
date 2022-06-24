import React from "react";

const Contact = () => {
  return (
    <>
      <div
        className={`head text-[.768rem] uppercase font-semibold
      //1.3rem lg:text-[0.868rem]
      md:text-[1rem]
      sm:text-[0.868rem]
      `}
      >
        Contact
      </div>
      <div
        className={`a1 text-gray-500 text-[.533rem] font-semibold mb-1
      // 0.868rem lg:text-[.533rem]
      md:text-[.633rem]
      sm:text-[.533rem]
      `}
      >
        <i className="fa fa-phone ">&nbsp;&nbsp;</i>
        0304-xxxx-xxx
      </div>
      <div
        className={`a1 text-gray-500 text-[.533rem] font-semibold mb-1
      // 0.868rem lg:text-[.533rem]
      md:text-[.633rem]
      sm:text-[.533rem]
      `}
      >
        <i
          className={`fa fa-envelope
        `}
        >
          &nbsp;&nbsp;
        </i>
        miansonu7...
      </div>
      <div
        className={`a1 text-gray-500 text-[.533rem] font-semibold mb-1
      // 0.868rem lg:text-[.533rem]
      md:text-[.633rem]
      sm:text-[.533rem]
      `}
      >
        <i className="fa fa-home">&nbsp;&nbsp;</i>
        Pakistan
      </div>
    </>
  );
};

export default Contact;
