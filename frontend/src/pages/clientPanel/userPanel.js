'use client'
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import React from 'react'
import Heading from "../../app/components/Heading";
import JobCard from '../../app/components/JobCard';
import Navbar from '../../app/components/Navbar';
import { useState, useEffect } from "react";




export default function mentorPanel() {
  const router = useRouter();
  const { user } = router.query;


  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    GetTodos();
  }, []);

  const GetTodos = () => {
    console.log("inside GetTodos");
    fetch("http://localhost:5000/")
      .then(res => res.json())
      .then(data => {setJobs(data);
        console.log("value from backend:" + data);
      })
      .catch(err => console.log("Error: ", err))
  }

  return (
    <div>
      <Navbar home={"Home"} location1={"/clientPanel/userPanel"} meeting={"Interviews"} location2={"#"} menu4={"Edit profile(change krna he)"} location4={`/clientPanel/editProfile?user=${user}`} />
      <div className='mt-28 mb-10'>
        <Heading name={"Welcome to Client Panel"} />
      </div>
      {jobs ? jobs.map((job) => (
        <JobCard key={job._id} title={job.title} dis={job.description} status={job.status} salary={job.salary} deadline={job.deadline}/>
      )) : "No jobs right now"};
    </div>
  );
}