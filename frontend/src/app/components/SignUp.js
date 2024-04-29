'use client'
import Image from "next/image";
import { useState } from "react";
export default function SignUp() {
    const [userData, setuserData] = useState({
        f_name: "",
        username: "",
        email: "",
        password: "",
        status: ""
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
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/signup', {
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

            <div className="container min-h-screen mt-9 w-3/4 mx-auto">

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
                                <div id="abc" className="text-4xl  font-bold leading-7 text-gray-900 pt-5">Sign Up</div>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                                    <div className="sm:col-span-3 ">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="f_name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={setDataInObjec}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            User name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="username"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={setDataInObjec}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={setDataInObjec}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="password"
                                                name="password"
                                                id="passwords"
                                                autoComplete="password"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={setDataInObjec}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-full">
                                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                            Re-Enter Password
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                autoComplete="password"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-full">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            Status
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="country"
                                                name="status"
                                                autoComplete="country-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                onChange={setDataInObjec}
                                            >
                                                <option>Student</option>
                                                <option>Mentor</option>
                                                <option>CSO</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded" onClick={saveSignUpData}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}