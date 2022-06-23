import React, { useState } from "react";
import useExperienceStore from "../../../../app/cells/ExperienceStore";
import { handleChange } from "../../cells/editor.util";

const ExperienceForm = () => {
  const [experience, setExperience] = useState({});

  const onSetExperience = useExperienceStore((state) => state?.onSetExperience);

  const onExperienceSave = () => {
    return onSetExperience(experience);
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
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Job_Title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Job Title
                      </label>
                      <input
                        type="text"
                        name="Job_Title"
                        id="Job_Title"
                        autoComplete="off"
                        placeholder="Job Title"
                        onChange={(evt) =>
                          handleChange(setExperience, experience, evt)
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Employer"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Employer
                      </label>
                      <input
                        type="text"
                        name="Employer"
                        id="Employer"
                        autoComplete="off"
                        placeholder="Employer"
                        onChange={(evt) =>
                          handleChange(setExperience, experience, evt)
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    {/* <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div> */}

                    <div className="col-span-6 sm:col-span-3">
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
                          handleChange(setExperience, experience, evt)
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="off"
                        placeholder="Street address"
                        onChange={(evt) =>
                          handleChange(setExperience, experience, evt)
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
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
                          handleChange(setExperience, experience, evt)
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
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
                          handleChange(setExperience, experience, evt)
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="End_date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        End Date
                      </label>
                      <input
                        type={"date"}
                        name="End_date"
                        id="End_date"
                        autoComplete="off"
                        onChange={(evt) =>
                          handleChange(setExperience, experience, evt)
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="Description"
                          rows={3}
                          onChange={(evt) =>
                            handleChange(setExperience, experience, evt)
                          }
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Description..."
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500"></p>
                    </div>
                    {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div> */}

                    {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div> */}
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-100 text-right sm:px-6">
                  <button
                    type="button"
                    onClick={() => onExperienceSave()}
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

export default ExperienceForm;
