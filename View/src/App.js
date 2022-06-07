import "./App.css";
import React, { useEffect } from "react";
import "@material-tailwind/react/tailwind.css";
import Home from "./Pages/Home.pages/home.page.jsx";
import TemplatePage from "./Components/pages/TemplatePage";
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Login from "./Components/LoginAndRegister.component/Login.component/Login";
// import Register from "./Components/LoginAndRegister.component/Register.component/Register";
import UserResume from "./Components/UserResumesModule/UserResume"
function App(props) {
  return (
    <div className="min-h-screen w-full relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/resume/content`} element={<TemplatePage />} />
          <Route path={`/resume`} element={<UserResume/>} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
