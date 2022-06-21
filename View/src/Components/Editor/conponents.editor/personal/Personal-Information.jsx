import React, { useState } from "react";
import useStore from "../../../../app/cells/store";

const PersonalInformation = () => {
  const [personal, setPersonal] = useState({});

  const onSetPersonal = useStore((state) => state.onSetPersonal);

  const handleChange = (event) => {
    let { name, value } = event?.target;
    setPersonal({
      ...personal,
      [name]: value,
    });
  };

  const personals = useStore((state) => state?.personals);
  const onSaveHandler = () => {
    onSetPersonal(personal);
    console.log(personals);
    // onSetPersonal(personal);
  };
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="w-full">
          <div className="mt-5 md:mt-0 ">
            <form action="" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-full">
                      <label
                        htmlFor="Fullname"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Fullname
                      </label>
                      <input
                        type="text"
                        name="Fullname"
                        id="Fullname"
                        autoComplete="off"
                        placeholder="Fullname"
                        value={personal?.Fullname}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-full">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="Email"
                        id="email-address"
                        value={personal?.Email}
                        onChange={handleChange}
                        placeholder="Email address"
                        autoComplete="off"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-full">
                      <label
                        htmlFor="Phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        name="Phone"
                        id="Phone"
                        value={personal?.Phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        autoComplete="off"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-full">
                      <label
                        htmlFor="Country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        name="Country"
                        id="country"
                        value={personal?.Country}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="country"
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
                        name="Street"
                        id="street-address"
                        autoComplete="off"
                        onChange={handleChange}
                        value={personal?.Street}
                        placeholder="Street address"
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
                        name="City"
                        id="city"
                        onChange={handleChange}
                        value={personal?.City}
                        autoComplete="off"
                        placeholder="City"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="Region"
                        onChange={handleChange}
                        value={personal?.Region}
                        id="region"
                        placeholder="Region"
                        autoComplete="address-level1"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="Postal"
                        onChange={handleChange}
                        value={personal?.Postal}
                        id="postal-code"
                        placeholder="Postal code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-full lg:col-span-full">
                      <label
                        htmlFor="Description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="Description"
                          name="Description"
                          rows={3}
                          onChange={handleChange}
                          value={personal?.Description}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Description..."
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500"></p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-100 text-right sm:px-6">
                  <button
                    type="button"
                    onClick={onSaveHandler}
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

export default PersonalInformation;
