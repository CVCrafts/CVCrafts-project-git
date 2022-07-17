import React, { useState } from "react";
import useEducationStore from "../../../../app/cells/EducationStore";
import { handleChange, OnPostAxios } from "../../cells/editor.util";

const EducationForm = () => {
  const [education, setEducation] = useState({});

  const onSetEducation = useEducationStore((state) => state?.onSetEducation);

  const onEducationSave = () => {
    OnPostAxios(education).catch((e) => console.log(e));
    onSetEducation(education);
  };
  return (
    <div>
      <div className="mt-10 sm:mt-0">
        <div className="w-full">
          <div className="mt-5 md:mt-0 ">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-full sm:col-span-full">
                      <label
                        htmlFor="Degree"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Degree
                      </label>
                      <input
                        type="text"
                        name="Degree"
                        id="JDegree"
                        autoComplete="off"
                        placeholder="Degree"
                        onChange={(evt) =>
                          handleChange(setEducation, education, evt)
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-full sm:col-span-full">
                      <label
                        htmlFor="Institute"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Institute
                      </label>
                      <input
                        type="text"
                        name="Institute"
                        id="EInstitute"
                        autoComplete="off"
                        placeholder="Institute"
                        onChange={(evt) =>
                          handleChange(setEducation, education, evt)
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-full sm:col-span-full">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        autoComplete="off"
                        placeholder="country"
                        onChange={(evt) =>
                          handleChange(setEducation, education, evt)
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-full sm:col-span-full lg:col-span-full">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="off"
                        placeholder="City"
                        onChange={(evt) =>
                          handleChange(setEducation, education, evt)
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-full sm:col-span-full lg:col-span-full">
                      <label
                        htmlFor="start_date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Start Date
                      </label>
                      <input
                        type={"date"}
                        name="start_date"
                        id="start_date"
                        autoComplete="off"
                        onChange={(evt) =>
                          handleChange(setEducation, education, evt)
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-full sm:col-span-full lg:col-span-full">
                      <label
                        htmlFor="End_date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        End Date
                      </label>
                      <input
                        type={"date"}
                        name="end_date"
                        id="End_date"
                        autoComplete="off"
                        onChange={(evt) =>
                          handleChange(setEducation, education, evt)
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-full sm:col-span-full lg:col-span-full">
                      <label
                        htmlFor="CGP"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Enter CGP
                      </label>
                      <input
                        type={"text"}
                        name="CGP"
                        id="CGP"
                        autoComplete="off"
                        onChange={(evt) =>
                          handleChange(setEducation, education, evt)
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    {/* <div className="col-span-6 sm:col-span-6 lg:col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="description"
                          rows={3}
                          onChange={(evt) =>
                            handleChange(setEducation, education, evt)
                          }
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Description..."
                          defaultValue={""}
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-100 text-right sm:px-6">
                  <button
                    type="button"
                    onClick={() => onEducationSave()}
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
    </div>
  );
};

export default EducationForm;
