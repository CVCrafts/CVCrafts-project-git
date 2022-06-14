import React from "react";

const References = (props) => {
    return (
      <>
        <div className="mt-10 sm:mt-0">
          <div className="w-full">
            <div className="mt-5 md:mt-0 ">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor={props.label}
                          className="block text-sm font-medium text-gray-700"
                        >
                          {props.label}
                        </label>
                        <input
                          type="text"
                          name={props.label}
                          id={props.label}
                          autoComplete="off"
                          placeholder={props.label}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor={props.label1}
                          className="block text-sm font-medium text-gray-700"
                        >
                          {props.label1}
                        </label>
                        <input
                          type="text"
                          name={props.label1}
                          id={props.label1}
                          autoComplete="off"
                          placeholder={props.label1}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor={props.label2}
                          className="block text-sm font-medium text-gray-700"
                        >
                          {props.label2}
                        </label>
                        <input
                          type="text"
                          name={props.label2}
                          id={props.label2}
                          autoComplete="off"
                          placeholder={props.label2}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor={props.label3}
                          className="block text-sm font-medium text-gray-700"
                        >
                          {props.label3}
                        </label>
                        <input
                          type={"email"}
                          name={props.label3}
                          id={props.label3}
                          autoComplete="off"
                          placeholder={props.label3}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor={props.label4}
                          className="block text-sm font-medium text-gray-700"
                        >
                          {props.label4}
                        </label>
                        <input
                          type={"text"}
                          name={props.label4}
                          id={props.label4}
                          autoComplete="off"
                          placeholder={props.label4}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-100 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border-2 border-red-300 shadow-sm text-sm font-medium rounded-md text-black bg-red-300 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default References;
