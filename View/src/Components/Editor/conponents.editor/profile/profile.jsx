import React, { useState } from "react";
import useProfileStore from "../../../../app/cells/profileStore";
import { handleChange } from "../../cells/editor.util";
import axios from "axios";
import { OnPostAxios } from "../../cells/editor.util";
const Profile = () => {
  const [profile, setProfile] = useState({});

  const onSetProfile = useProfileStore((state) => state.onSetProfile);

  const onProfileSave = () => {
    OnPostAxios(profile).catch((e) => console.log(e));
    onSetProfile(profile);
  };
  return (
    <div className="">
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="company-website"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Website
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      http://
                    </span>
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      onChange={(evt) => handleChange(setProfile, profile, evt)}
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  About
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    onChange={(evt) => handleChange(setProfile, profile, evt)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="you@example.com"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500"></p>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-100 text-right sm:px-6">
              <button
                type="button"
                onClick={() => onProfileSave()}
                className="inline-flex justify-center py-2 px-4 border-2 border-red-300 shadow-sm text-sm font-medium rounded-md text-black bg-red-300 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
