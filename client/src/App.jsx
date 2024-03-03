import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import dashboard from "./pages/dashboard";
import about from "./pages/about";
import profile from "./pages/profile";
import signin from "./pages/signin";
import signup from "./pages/signup";
import home from "./pages/home";
import project from "./pages/project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
<Route path="/" element={<home/>}/>
<Route path="/sign-in" element={<signin/>}/>
<Route path="/sign-up" element={<signup/>}/>


<Route path="/dashboard" element={<dashboard/>}/>
<Route path="/about" element={<about/>}/>
<Route path="/profile" element={<profile/>}/>
<Route path="/projects" element={<project/>}/>


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
