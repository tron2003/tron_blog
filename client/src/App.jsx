import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Profile from "./pages/profile";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Project from "./pages/project";
import Header from "./components/header";
import Footer from "./components/footer";
import PrivateRoute from "./components/privateroute";
import PrivateAdmin from  "./components/admin" 
import CreatePost from "./pages/creatpost";
import UpdatePost from "./pages/updatepost";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<PrivateAdmin />}>
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post/:postId" element={<UpdatePost />} />

          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Project />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
