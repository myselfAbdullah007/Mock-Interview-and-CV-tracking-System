import { Route, Routes } from "react-router-dom";
import Link from "next/link.js";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Signin from "./components/signIn.js";



export default function Home() {
  return (
    <>
      <Signin />
       {/* <Navbar />
      <Header />  */}
      {/* {typeof window !== "undefined" && (
        <Routes>
          <Route path="/sign-in" element={<Signin />} />
        </Routes>
      )} */}
    </>
  );
}
