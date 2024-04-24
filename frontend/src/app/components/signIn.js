'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
const BASE_API = "http://localhost:3000/";

export default function signIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);


  const captureEmail = (e) =>{
    document.getElementById("abc").textContent = e.target.value;
    setEmail(e.target.value);
  }
  const capturePassword  = (e) =>{
    document.getElementById("abc").textContent = e.target.value;
    setPassword(e.target.value);
  }
  const verifyCredentials = async (e) =>{
    e.preventDefault();

    try{
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers:{
          "Content-Typr": "application/json",
        },
        body: JSON.stringify({email, password}),
      });
      if(response.ok){
        console.log("User Logged in Successfully!");
      }else{
        console.error("Failed to log in.");
      }
      
    } catch(error){
      console.error("An Error Occoure whi;e logging in: ", error);
    }
  }

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 pt-4 ">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-xl">
          <Image className="mx-auto" src="/Logo.png" alt="Comapny logo" width={150} height={150} />
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <div>
            <button
              type="button"
              className="w-full bg-red-600	text-white rounded-md py-2.5 text-sm">Sign in with google</button>
          </div>

          <p id="abc" className="text-center">Or</p>
          <form className="space-y-6" action="#" method="POST">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={captureEmail}
              />
            </div>

            <div className="flex items-center justify-between ">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={capturePassword}
                />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={verifyCredentials}
              >
                Sign In
              </button>
            </div>
          </form> 

          {/* <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p> */}
        </div>
      </div>
    </>
  );
}
