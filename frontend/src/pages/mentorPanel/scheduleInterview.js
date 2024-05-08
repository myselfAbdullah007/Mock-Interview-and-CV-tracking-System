import React from 'react'
import 'tailwindcss/tailwind.css';
import Heading from './../../app/components/Heading';
import Navbar from './../../app/components/Navbar';
import UserTable from './../UserData/UserTable';


export default function scheduleInterview() {
  return (
    <>
    <Navbar meeting={"Schecule Interview"} location2={"/mentorPanel/scheduleInterview"}/>
    <div className='mt-28 mb-10'>
      <Heading name={"Schecule Interview"}/>
    </div>
    <div>
      <UserTable/>
    </div>
    </>
  )
}
