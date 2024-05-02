'use client'
import { useState, useEffect } from "react";
import DetailedData from "./DetailedData";
export default function UserTable() {
    const [items, setitems] = useState([]);
    const [displayFlag, setDisplayFlag] = useState(false);
    const [singleItem, setsingleItem] = useState(null);


    useEffect(() => {
        GetTodos();
    }, []);

    const GetTodos = () => {
        fetch("http://localhost:8080/")
            .then(res => res.json())
            .then(data => setitems(data))
            .catch(err => console.log("Error: ", err))
    }

    const showDiv = (item) => {
        setDisplayFlag(true);
        setsingleItem(item);
    }

    const close = () =>{
        setDisplayFlag(false);
    }

    return (
        <>
        <table className="min-w-full divide-y divide-gray-200 ">
            <thead className="bg-cyan-500">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Id</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">User Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Email</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acceptance</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">

                {items.map((item) => (
                    <tr key={item.id} className='odd:bg-white even:bg-gray-100 cursor-pointer' onClick={() => showDiv(item)}>
                        <td className="px-6 py-4 whitespace-nowrap text-xs">{item._id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs">{item.f_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs">{item.username}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs">{item.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs"><a href="#" className="text-red-600 font-bold">Delete</a></td>
                    </tr>
                ))}

            </tbody>
        </table>
        <button onClick={close}>X</button>
        {displayFlag && <DetailedData display={displayFlag} singleItem={singleItem}/>}
        </>

    );
}