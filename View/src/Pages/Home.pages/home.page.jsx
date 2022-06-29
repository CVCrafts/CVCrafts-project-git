import React from "react";
import Footer from "../../Components/Footer.component/Footer";
import Header from "../../Components/Header.component/Header";
import Main from "../../Components/main.component/Main";
import Template from "../../Components/template.component/Template";
import "./home.style.css";

export const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Template />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
