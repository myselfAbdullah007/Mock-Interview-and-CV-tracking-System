'use client'
import { useState } from "react";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Signin from "./../pages/signin/login.js";
import AdminPanel from "./components/AdminPanel.js";
// import SignUp from "./pages/signup/SignUp.js";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes, Link } from 'react-router-dom';



export default function Home() {
  return (
    <>
      {/* <SignUp/> */}
      {/* <Signin /> */}
      {/* <AdminPanel/> */}
      <Navbar />
      <Header />

      {/* <Link to="/signin">SignIn</Link>

      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router > */}
    </>
  );
}
