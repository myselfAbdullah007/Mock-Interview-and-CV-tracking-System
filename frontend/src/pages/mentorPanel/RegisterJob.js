'use client'
import 'tailwindcss/tailwind.css';
import React, { useRef } from 'react';
import Image from "next/image";
import { useState } from "react";
import { CldUploadWidget } from 'next-cloudinary';
export default function RegisterJob() {
    const fileInputRef = useRef(null);
    const [userData, setuserData] = useState({
        title: "",
        description: "",
        Status:"",
        salary: "",
        deadline: "",
    });

    const setDataInObjec = (e) => {
        const { name, value } = e.target;
        setuserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const saveJobData = async (e) => {
        // document.getElementById('abc').textContent = `Name: ${userData.name}\nUsername: ${userData.username}\nEmail:${userData.email}\nPassword: ${userData.password}\nStatus: ${userData.status}`;
        console.log(userData);
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:6000/create-job', {
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
                                <div id="abc" className="text-4xl  font-bold leading-7 text-gray-900 pt-5">Register Job</div>

                                <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-6">
                                    <div className="sm:col-span-3 ">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Job title
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                autoComplete="title"
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
                                </div>

                                <div className="mt-2 sm:col-span-3 ">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            Status
                                        </label>
                                        <select
                                            id="Status"
                                            name="Status"
                                            autoComplete="Status"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        onChange={setDataInObjec}
                                        >
                                            <option>Physical</option>
                                            <option>Virtual</option>
                                        </select>
                                    </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Salary
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="salary"
                                            id="salary"
                                            autoComplete="v"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={setDataInObjec}
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Deadline
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="deadline"
                                            name="deadline"
                                            type="text"
                                            autoComplete="deadline"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={setDataInObjec}
                                        />
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
                                // onClick={saveJobData}
                                >Upload Profile pic</button> */}

                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded"
                                onClick={saveJobData}
                                >Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}