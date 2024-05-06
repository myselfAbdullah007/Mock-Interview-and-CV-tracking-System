'use client'
import 'tailwindcss/tailwind.css';
import React from 'react'
import Heading from "./../../app/components/Heading";

const movetoRegistration =() =>{
  window.location.href = "/mentorPanel/RegisterCompany";
}

export default function mentorPanel() {

  return (
    <>
      <div>
        <Heading name={"Mentor"} />
      </div>
      <div className='container mx-20 mt-10'>
        {/* <div>
          <button className='bg-emerald-300 px-2 py-2 border rounded-md'>Add a Company</button></div>*/}
        <div className="mb-2"> 
          <button className='bg-teal-400 border-2 border-teal-700 px-2 py-2 border rounded-md' onClick={movetoRegistration}>Add a Company</button>
        </div>
        <div>
          <button className='bg-slate-300 border-2 border-sky-600 px-7 py-2 border rounded-md'>Add a Job</button>
        </div>
      </div>
    </>
  )
}

