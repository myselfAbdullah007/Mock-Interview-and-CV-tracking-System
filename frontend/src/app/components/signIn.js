/*Frontend/src\app/components/signIn.js*/
'use client'

import Image from "next/image";
import { useState } from "react";
const BASE_API = "http://localhost:3000/";

export default function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);


  const captureEmail = (e) => {
    document.getElementById("abc").textContent = e.target.value;
    setEmail(e.target.value);
  }
  const capturePassword = (e) => {
    document.getElementById("abc").textContent = e.target.value;
    setPassword(e.target.value);
  }
  const verifyCredentials = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        console.log("User Logged in Successfully!");
      } else {
        console.error("Failed to log in.");
      }

    } catch (error) {
      console.error("An Error Occoure whi;e logging in: ", error);
    }
  }

  return (
    <> 
      <div className="min-h-screen">
        <div className=" grid grid-cols-2 border border-slate-300 w-2/3 mx-auto bg-white mt-8 rounded-md shadow-xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-xl pt-2 pb-16">
            <Image className="mx-auto" src="/Logo.png" alt="Comapny logo" width={150} height={150} />
            <h2 className=" text-center text-1xl font-bold leading-9 tracking-tight text-gray-900 mb-4">
              Sign in to your account
            </h2>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <div>
                <button
                  type="button"
                  className="w-full bg-red-600	text-white rounded-md py-3.5 text-sm">Sign in with google</button>
              </div>

              <p id="abc" className="text-center mt-3">Or</p>
              <form className="space-y-4" action="#" method="POST">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="">
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
                <div>
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
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={verifyCredentials}
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <Image
              className="me-auto w-full h-full"
              src="/SignInPic.png"
              alt="SignUp Image"
              width={480}
              height={140} />
          </div>

        </div>
      </div>

    </>
  );
}
