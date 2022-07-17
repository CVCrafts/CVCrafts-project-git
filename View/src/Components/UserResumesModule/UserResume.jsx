import React, { Component } from "react";
import Footer from "../Footer.component/Footer";
import UserResumeBody from "./Module/UserResumeBody";
import UserResumeHeader from "./Module/UserResumeHeader";

class UserResume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <>
        <div className="mx-auto min-h-screen w-full bg-homeBackgroundColor">
          <UserResumeHeader />
          <UserResumeBody />
          <Footer />
        </div>
      </>
    );
  }
}

export default UserResume;
