import React from 'react'
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import Heading from './../../app/components/Heading';
import Navbar from './../../app/components/Navbar';
import UserTable from './../UserData/UserTable';


export default function scheduleInterview() {
  const router = useRouter();
  const { user } = router.query;
  return (
    <>
        <Navbar home={"Home"} location1={`/mentorPanel/mentorPanel?user=${user}`} meeting={"Schecule Interview"} location2={`/mentorPanel/scheduleInterview?user=${user}`} menu4={""} location4={`#`}/>

    <div className='mt-28 mb-10'>
      <Heading name={"Schecule Interview"}/>
    </div>
    <div>
      <UserTable/>
    </div>
    </>
  )
}
