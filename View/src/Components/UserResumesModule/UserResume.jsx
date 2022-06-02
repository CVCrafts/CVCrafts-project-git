import React, { Component } from "react";
import UserResumeBody from "./Module/UserResumeBody";
import UserResumeHeader from "./Module/UserResumeHeader";

class UserResume extends Component {
  render() {
    return (
      <>
        <div className="mx-auto min-h-screen w-full bg-homeBackgroundColor">
          <UserResumeHeader />
          <UserResumeBody />
        </div>
      </>
    );
  }
}

export default UserResume;
