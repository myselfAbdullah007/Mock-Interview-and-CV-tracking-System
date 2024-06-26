'use client'
import 'tailwindcss/tailwind.css';
import React, { useRef } from 'react';
import Image from "next/image";
import { useState } from "react";
import { CldUploadWidget } from 'next-cloudinary';
export default function SignUp() {
    const fileInputRef = useRef(null);
    const [userData, setuserData] = useState({
        company_name: "",
        industry: "",
        location: "",
        website: "",
        description: ""
    });

    const setDataInObjec = (e) => {
        const { name, value } = e.target;
        setuserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const saveSignUpData = async (e) => {
        // document.getElementById('abc').textContent = `Name: ${userData.name}\nUsername: ${userData.username}\nEmail:${userData.email}\nPassword: ${userData.password}\nStatus: ${userData.status}`;
        console.log(userData);
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/create-company', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),

            });
            const data = await response.json();
            console.log('Response from backend: ', data);
        }
        catch (error) {
            console.log("Error: ", error);
        }
    };
    return (
        <>

            <div className="container min-h-screen mt-9 w-3/4 mx-auto bg-white">

                <div className="grid grid-cols-2 gap-4 border border-slate-300 rounded-md shadow-xl">
                    <div className="">
                        <Image
                            className="me-auto "
                            src="/SignUp pic.jpeg"
                            alt="SignUp Image"
                            width={380}
                            height={100} />
                    </div>

                    <div >
                        <div>
                            <div className="border-b border-gray-900/10 w-3/4">
                                <div id="abc" className="text-4xl  font-bold leading-7 text-gray-900 pt-5">Register Company</div>

                                <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-6">
                                    <div className="sm:col-span-3 ">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Company Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="company_name"
                                                id="company_name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={setDataInObjec}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:col-span-3 ">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            Industry
                                        </label>
                                        <select
                                            id="industry"
                                            name="industry"
                                            autoComplete="industry"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        onChange={setDataInObjec}
                                        >
                                            <option>IT</option>
                                            <option>Technology</option>
                                            <option>Textile</option>
                                            <option>Fashion</option>
                                            <option>Interior Design</option>
                                            <option>Mechanical</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="location"
                                            id="location"
                                            autoComplete="location"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={setDataInObjec}
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Website link
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="website"
                                            name="website"
                                            type="text"
                                            autoComplete="website"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={setDataInObjec}
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            name="description"
                                            id="description"
                                            rows="4"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Enter description"
                                        onChange={setDataInObjec}
                                        ></textarea>
                                    </div>
                                </div>

                                {/* <CldUploadWidget uploadPreset="Mock_Interview_cloudinary_web_app">
                                    {({ open }) => {
                                        return (
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded me-3"
                                                onClick={() => open()}>
                                                Upload an Image
                                            </button>

                                        );
                                    }}
                                </CldUploadWidget> */}


                                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded me-3"
                                // onClick={saveSignUpData}
                                >Upload Profile pic</button> */}

                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded"
                                onClick={saveSignUpData}
                                >Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}