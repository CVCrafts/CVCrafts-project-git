import "./App.css";
import React from "react";
import "@material-tailwind/react/tailwind.css";
import Home from "./Pages/Home.pages/home.page.jsx";
import TemplatePage from "./Components/pages/TemplatePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginAndRegister.component/Login.component/Login";
import Register from "./Components/LoginAndRegister.component/Register.component/Register";
import UserResume from "./Components/UserResumesModule/UserResume";
<<<<<<< HEAD

function App(props) {
=======
function App() {
>>>>>>> c2ddfe28dd7aaad697e5c0a58ff84c522bc455a7
  return (
    <div className="min-h-screen w-full relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/resume/content`} element={<TemplatePage />} />
          <Route path={`/resume`} element={<UserResume />} />
<<<<<<< HEAD

=======
>>>>>>> c2ddfe28dd7aaad697e5c0a58ff84c522bc455a7
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
