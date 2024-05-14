import React from 'react'
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import Heading from './../../app/components/Heading';
import Navbar from '../../app/components/Navbar';
import { useState, useEffect } from 'react';

export default function Interviews() {
    const router = useRouter();
    const { user } = router.query;
    const [items, setitems] = useState([]);
    const [interview, setinterview] = useState([]);

    useEffect(() => {
        GetInterview();
    }, []);

    const GetInterview = async () => {
        console.log("user: ", user);
        try {
            const response = await fetch(`http://localhost:8080/${user}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setitems(data);
            GetJobs(data);
            console.log(items);
        } catch (error) {
            console.log("Error: ", error);
        }

    };

    const GetJobs = async (data) => {
        const arr = data.interviews;
        console.log("items.interviews: ", data);
        console.log("arr: ", arr);
        try {
            const response = await fetch('http://localhost:5000/jobsByIds', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ arr })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            setinterview(data);
            console.log(data);
        } catch (error) {
            console.log("Error: ", error);
        }
    };


    return (
        <div>
            <Navbar home={"Home"} location1={"/clientPanel/userPanel"} meeting={"Interviews"} location2={`/clientPanel/Interviews?user=${user}`} menu4={"Edit profile(change krna he)"} location4={`/clientPanel/editProfile?user=${user}`} />
            <div className='mt-28 mb-10'>
                <Heading name={"Welcome to Interview Panel"} />
            </div>
            <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-cyan-500">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Title</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Dexcription</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Deadline</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">

                    {interview.map((item) => (
                        <tr key={item.id} className='odd:bg-white even:bg-gray-100 cursor-pointer' onClick={() => showDiv(item)}>
                            <td className="px-6 py-4 whitespace-nowrap text-xs">{item.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs">{item.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs">{item.status}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs">{item.deadline}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

