'use client'
import 'tailwindcss/tailwind.css';
import React from 'react'
import { useRouter } from 'next/router';
import Heading from "./../../app/components/Heading";
import Navbar from './../../app/components/Navbar';

export default function mentorPanel() {
  const movetoRegistration = () => {
    window.location.href = `/mentorPanel/RegisterCompany?user=${user}`;
  }
  const movetojob = () => {
    window.location.href = `/mentorPanel/RegisterJob?user=${user}`;
  }
  const router = useRouter();
  const { user, status } = router.query;

  return (
    <>
      <Navbar home={"Home"} location1={`/mentorPanel/mentorPanel?user=${user}`} meeting={"Schecule Interview"} location2={`/mentorPanel/scheduleInterview?user=${user}&status=${status}`} menu4={""} location4={`#`} />
      <div className='mt-28 mb-10'>
        <Heading name={"Welcome to Mentor Panel"} />
      </div>
      <div className='container mx-20 mt-10'>
        {/* <div>
          <button className='bg-emerald-300 px-2 py-2 border rounded-md'>Add a Company</button></div>*/}
        <div className="mb-2">
          <button className='bg-teal-400 border-2 border-teal-700 px-2 py-2 border rounded-md' onClick={movetoRegistration}>Add a Company</button>
        </div>
        <div>
          <button className='bg-slate-300 border-2 border-sky-600 px-7 py-2 border rounded-md' onClick={movetojob}>Add a Job</button>
        </div>
      </div>
    </>
  )
}

