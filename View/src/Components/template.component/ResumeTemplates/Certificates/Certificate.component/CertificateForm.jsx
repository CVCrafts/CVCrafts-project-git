import React, { Component } from "react";

export class CertificateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      certificateName: "",
      certificateDescription: "",
    };
    this.SaveChange = this.SaveChange.bind(this);
    this.onSubmited = this.onSubmited.bind(this);
  }
  SaveChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <form className="mt-8 space-y-6" method="POST">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label for="certificateName" className="sr-only">
                    Certificate Name
                  </label>
                  <input
                    onChange={this.SaveChange}
                    value={this.state.certificateName}
                    id="certificateName"
                    name="certificateName"
                    type="text"
                    autocomplete="off"
                    className="appearance-none mb-1 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:border-transparent focus:ring-transparent focus:z-10 sm:text-sm"
                    placeholder="Certificate Name"
                  />
                </div>
                <div>
                  <label for="certificateDescription" className="sr-only">
                    Description
                  </label>
                  <input
                    onChange={this.SaveChange}
                    value={this.state.certificateDescription}
                    id="certificateDescription"
                    name="certificateDescription"
                    type="text"
                    autocomplete="off"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:border-transparent focus:ring-transparent focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                    placeholder="Certificate Description"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class=" font-serif group relative w-full flex justify-center py-2 px-4 border border-red-300 text-sm font-medium rounded-md text-black bg-red-400 hover:bg-red-300 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CertificateForm;
