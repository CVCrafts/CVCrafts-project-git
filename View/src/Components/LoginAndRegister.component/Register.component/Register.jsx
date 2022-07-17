import React, { Component } from "react";
import "./Register.style.css";
import { Link } from "react-router-dom";
import Logo from "../../../images/CVCrafts.svg";


export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    };

    this.ConfirmPassword = this.ConfirmPassword.bind(this);

  }
  ConfirmPassword = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen">
          <div className="px-8 z-10 py-6 mx-4 mt-4 text-left bg-transparent shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
            <div className="flex justify-center">
              <img className="mx-auto h-32 w-auto" src={Logo} alt="CVCrafts" />
            </div>
            <h3 className="text-2xl font-bold text-center">Join us</h3>
            <form action="" method="POST">
            <div className="mt-4">
              <div>
                <label className="block text-red-500" for="Name">
                  Name
                </label>
                <input
                  autoComplete={"off"}
                  value={this.state.username}
                  name="username"
                  type="text"
                  placeholder="Name"
                  onChange={this.ConfirmPassword}
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div className="mt-4">
                <label className="block text-red-500" for="email">
                  Email
                </label>
                <input
                  autoComplete={"off"}
                  value={this.state.email}
                  name="email"
                  type="text"
                  placeholder="Email"
                  onChange={this.ConfirmPassword}
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block text-red-500">Password</label>
                <input
                  value={this.state.password}
                  onChange={this.ConfirmPassword}
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block text-red-500">Confirm Password</label>
                <input
                  value={this.state.conformpassword}
                  onChange={this.ConfirmPassword}
                  name="confirmpassword"
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <span className="text-xs text-red-400">{this.state.msg}</span>
              <div className="flex">
                {/* w-full px-6 py-2 mt-4 text-gray-700 bg-red-400 rounded-lg hover:bg-red-300 */}
                <button
                  type="submit"
                  className="group relative w-full mt-4 flex justify-center py-2 px-4 border border-red-300 text-sm font-medium rounded-md text-black bg-red-400 hover:bg-red-300 hover:text-gray-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-red-500"
                >
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account?
                <Link
                  className="text-red-500 ml-1 hover:underline"
                  to={"/login"}
                >
                  Log in
                </Link>
              </div>
            </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
