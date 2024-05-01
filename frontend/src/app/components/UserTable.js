'use client'
import { useState, useEffect } from "react";
export default function UserTable() {
    const { data, setData } = useState("");
    useEffect(() => {
        GetTodos();
    });

    const GetTodos = () => {
        fetch("http://localhost:3000/")
            .then(res => res.json)
            .then(data => setData(data))
            .catch(err => console.log("Error: ", err))
    }
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-cyan-500">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">User Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Email</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acceptance</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                <tr className='odd:bg-white even:bg-gray-100 cursor-pointer'>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">30</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">john.doe@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs"><a href="#" className="text-red-600 font-bold">Delete</a></td>
                </tr>
                <tr className='odd:bg-white even:bg-gray-100'>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">30</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">john.doe@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs"><a href="#" className="text-red-600 font-bold">Delete</a></td>
                </tr>
                <tr className='odd:bg-white even:bg-gray-100'>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">30</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">john.doe@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs"><a href="#" className="text-red-600 font-bold">Delete</a></td>
                </tr>
                <tr className='odd:bg-white even:bg-gray-100'>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">30</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">john.doe@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs"><a href="#" className="text-red-600 font-bold">Delete</a></td>
                </tr>

            </tbody>
        </table>
    );
}