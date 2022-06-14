import React from "react";

const Input = (props) => {
  return (
    <div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor={props.htmlFor}
          className="block text-sm font-medium text-gray-700"
        >
          {props.label}
        </label>
        <input
          type={props.type}
          name={props.label}
          id={props.label}
          autoComplete="off"
          placeholder={props.label}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default Input;
