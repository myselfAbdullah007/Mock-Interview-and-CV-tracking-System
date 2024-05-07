'use client'
import 'tailwindcss/tailwind.css';
import React from 'react'
import Heading from "../../app/components/Heading";
import JobCard from './jobCard';
import Navbar from './../../app/components/Navbar';



export default function mentorPanel() {

  return (
    <div>
      {/* <Navbar meeting={"Interviews"} location2={"#"} menu4={"Edit profile(change krna he)"} location4={"/editProfile/userPanel"}/> */}
      <div className='mt-28 mb-10'>
        <Heading name={"Welcome to Client Panel"} />
      </div>
      <JobCard />
    </div>
  )
}
