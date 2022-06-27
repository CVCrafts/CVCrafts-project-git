import React, { useState } from "react";
import { handleChange, OnPostAxios } from "../../cells/editor.util";
import useCertificateStore from "../../../../app/cells/CertificateStore";
import useInterestStore from "../../../../app/cells/InterestStore";

const CertificateInterest = (props) => {
  const [certificateOrInterest, setCertificateOrInterest] = useState({});

  const onSetCertificate = useCertificateStore(
    (state) => state.onSetCertificate
  );

  const onSetInterest = useInterestStore((state) => state.onSetInterest);

  const onCertificateOrInterestSave = () => {
    switch (props.state) {
      case "certificate":
        OnPostAxios(certificateOrInterest).catch((e) => console.log(e));
        onSetCertificate(certificateOrInterest);
        break;
      case "interest":
        OnPostAxios(certificateOrInterest).catch((e) => console.log(e));

        onSetInterest(certificateOrInterest);
        break;
      default:
        console.table([
          { error: "Please check the summery component for correct props" },
        ]);
        break;
    }
  };

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
                        onChange={(evt) =>
                          handleChange(
                            setCertificateOrInterest,
                            certificateOrInterest,
                            evt
                          )
                        }
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
                        onChange={(evt) =>
                          handleChange(
                            setCertificateOrInterest,
                            certificateOrInterest,
                            evt
                          )
                        }
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-100 text-right sm:px-6">
                  <button
                    type="button"
                    onClick={() => onCertificateOrInterestSave()}
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

export default CertificateInterest;
