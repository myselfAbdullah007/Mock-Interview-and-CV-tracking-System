import React from 'react'
import Image from 'next/image';
import 'tailwindcss/tailwind.css';


export default function jobCard() {
  return (
    <div className='border border-grey-400 w-2/5 mx-auto px-5 space-y-4'>
            <Image className="mx-auto w-full" src="/Background_2toneBlue-home.png" alt="Comapny logo" width={150} height={150} />
            <div className='font-bold'>Title : <span className='ms-2 font-normal'>Software Engineer</span></div>
            <div className='font-bold'>Company : <span className='ms-2 font-normal'>GenSol</span></div>
            <div className='font-bold'>Curent Status : <span className='ms-2 font-normal'>Physical</span></div>
            <div className='font-bold'>Address : <span className='ms-2 font-normal'>Kohinoor</span></div>
            <div className='font-bold'>Salary : <span className='ms-2 font-normal'>40k-60k</span></div>
            <button className='bg-blue-400 px-4 py-3 font-light w-full' >Apply For Interview</button>
    </div>
  )
}
