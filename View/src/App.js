import "./App.css";

import "@material-tailwind/react/tailwind.css";
import Home from "./Pages/Home.pages/home.page.jsx";
import TemplatePage from "./Components/pages/TemplatePage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Components/LoginAndRegister.component/Login.component/Login";
import Register from "./Components/LoginAndRegister.component/Register.component/Register";

function App() {
  return (
    <div className="min-h-screen w-full relative">
    <BrowserRouter>
      <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/editor" element={<TemplatePage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
