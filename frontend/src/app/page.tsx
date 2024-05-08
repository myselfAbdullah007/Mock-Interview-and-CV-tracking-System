'use client'
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import MentorPanel from "./../pages/mentorPanel/mentorPanel.js";
import Heading from "./components/Heading.js";



export default function Home() {
  return (
    <>
            <Navbar meeting={"Interviews"} location2={"#"} menu4={"Edit profile(change krna he)"} location4={"/clientPanel/editProfile"} />
      <Header />
    </>
  );
}
