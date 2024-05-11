'use client'
import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';


export default function JobCard(props) {

  const [title, settitle] = useState("");
  const [dis, setdis] = useState("");
  const [status, setstatus] = useState("");
  const [salary, setsalary] = useState("");
  const [deadline, setdeadline] = useState("");

  useEffect(() => {
      settitle(props.title);
      setdis(props.dis);
      setstatus(props.status);
      setsalary(props.salary);
      setdeadline(props.deadline);
  }, [props.title, props.dis, props.status, props.salary, props.deadline]);

  return (
    
    <div className='border border-grey-400 w-2/5 mx-auto px-5 space-y-4'>
            <Image className="mx-auto w-full" src="/Background_2toneBlue-home.png" alt="Comapny logo" width={150} height={150} />
            <div className='font-bold'>Title: <span className='ms-2 font-normal'>{title}</span></div>
            <div className='font-bold'>Company: <span className='ms-2 font-normal'>GenSol</span></div>
            <div className='font-bold'>Discription: <span className='ms-2 font-normal'>{dis}</span></div>
            <div className='font-bold'>Status: <span className='ms-2 font-normal'>{status}</span></div>
            <div className='font-bold'>Address: <span className='ms-2 font-normal'>Kohinoor</span></div>
            <div className='font-bold'>Salery: <span className='ms-2 font-normal'>{salary}</span></div>
            <div className='font-bold'>Deadline: <span className='ms-2 font-normal'>{deadline}</span></div>
            <button className='bg-blue-400 px-4 py-3 font-light w-full' >Apply for interview</button>
    </div>
  )
}
