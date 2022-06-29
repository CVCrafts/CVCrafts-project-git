import React from "react";
import Footer from "../Footer.component/Footer";
import UserResumeBody from "./Module/UserResumeBody";
import UserResumeHeader from "./Module/UserResumeHeader";

export const UserResume = () => {
  return (
    <>
      <div className="mx-auto min-h-screen w-full bg-homeBackgroundColor">
        <UserResumeHeader />
        <UserResumeBody />
        <Footer />
      </div>
    </>
  );
};

export default UserResume;
