'use client'
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';


export default function JobCard(props) {
  const router = useRouter();
  const { user } = router.query;

  const [jobs, setJobs] = useState([]);
  const [applicant_id, setapplicant_id] = useState([]);

  useEffect(() => {
    GetTodos();
  }, []);

  const GetTodos = () => {
    console.log("inside GetTodos");
    fetch("http://localhost:5000/")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        console.log("value from backend:" + data);
      })
      .catch(err => console.log("Error: ", err))
  }

  const applyForJob = async (job_id) => {
    if (jobs.applicant_id) {
      applicant_id.push(jobs.applicant_id);
    }
    applicant_id.push(user);
    console.log("applicant's id after pushing user: " + applicant_id);

    try {
      console.log("Inside try of saving application");

      const data = {
        job_id,
        applicant_id
    };

      const response = await fetch('http://localhost:5000/saveApplication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
      {
        jobs.length > 0 ? (jobs.map((job) => (
          <div key={job._id} className='border border-grey-400 w-2/5 mx-auto px-5 space-y-4 mb-8'>
            <Image className="mx-auto w-full" src="/Background_2toneBlue-home.png" alt="Comapny logo" width={150} height={150} />
            <div className='font-bold'>Title: <span className='ms-2 font-normal'>{job.title}</span></div>
            <div className='font-bold'>Company: <span className='ms-2 font-normal'>GenSol</span></div>
            <div className='font-bold'>Discription: <span className='ms-2 font-normal'>{job.description}</span></div>
            <div className='font-bold'>Status: <span className='ms-2 font-normal'>{job.status}</span></div>
            <div className='font-bold'>Address: <span className='ms-2 font-normal'>Kohinoor</span></div>
            <div className='font-bold'>Salery: <span className='ms-2 font-normal'>{job.salary}</span></div>
            <div className='font-bold'>Deadline: <span className='ms-2 font-normal'>{job.deadline}</span></div>
            <button className='bg-gradient-to-r from-blue-400 to-purple-700 px-4 py-3 font-light w-full' onClick={() => applyForJob(job._id)}>Apply for interview</button>
          </div>))) : (<p className='text-center font-bold'>No jobs right now</p>)
      }</div>
  );
}
// bg-[url("/Background_2toneBlue-home.png")]