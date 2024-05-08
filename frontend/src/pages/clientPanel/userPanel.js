'use client'
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import React from 'react'
import Heading from "../../app/components/Heading";
import JobCard from './../../app/components/jobCard';
import Navbar from './../../app/components/Navbar';



export default function mentorPanel() {
  const router = useRouter();
  const { user } = router.query;

  return (
    <div>
      <Navbar meeting={"Interviews"} location2={"#"} menu4={"Edit profile(change krna he)"} location4={`/clientPanel/editProfile?user=${user}`}/>
      <div className='mt-28 mb-10'>
        <Heading name={"Welcome to Client Panel"} />
      </div>
      <JobCard />
    </div>
  )
}
