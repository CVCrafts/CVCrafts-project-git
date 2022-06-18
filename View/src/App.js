import "./App.css";
import React from "react";
import "@material-tailwind/react/tailwind.css";
import Home from "./Pages/Home.pages/home.page.jsx";
// import TemplatePage from "./Components/pages/TemplatePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Components/LoginAndRegister.component/Login.component/Login";
// import Register from "./Components/LoginAndRegister.component/Register.component/Register";
import UserResume from "./Components/UserResumesModule/UserResume";
import Editor from "./Components/Editor/Editor";

function App(props) {
  return (
    <div className="min-h-screen w-full relative">
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route
            path={`/resume/content`}
            element={<Editor state={"content"} />}
          />
          <Route
            path={`/resume/design`}
            element={<Editor state={"design"} />}
          />
          <Route path={`/resume`} element={<UserResume />} />
          {/* <Route path={`/resume/template`} element={<TemplatePage />} /> */}
          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
