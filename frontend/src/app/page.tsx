import { Route, Routes } from "react-router-dom";
import Link from "next/link.js";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Signin from "./components/SignIn.js";
import AdminPanel from "./components/AdminPanel.js";
import SignUp from "./components/SignUp.js";



export default function Home() {
  return (
    <>
    {/* <SignUp/> */}
      <Signin />
       {/* <Navbar /> */}
       {/* <AdminPanel/> */}
      {/* <Header />  */}
      {/* {typeof window !== "undefined" && (
        <Routes>
          <Route path="/sign-in" element={<Signin />} />
        </Routes>
      )} */}
    </>
  );
}
