'use client'
import { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import CompanyData from "./../../app/components/CompanyData";

export default function UserTable(props) {
    const [label1, setlabel1] = useState("");
    const [label2, setlabel2] = useState("");
    const [label3, setlabel3] = useState("");

    const [Companies, setCompanies] = useState([]);
    const [displayFlag, setDisplayFlag] = useState(false);
    const [singleItem, setsingleItem] = useState(null);


    useEffect(() => {
        setlabel1(props.name);
        setlabel2(props.username);
        setlabel3(props.email);

        GetTodos();
    }, [props.name, props.username, props.email]);

    const GetTodos = () => {
        
        fetch("http://localhost:4000/")
            .then(res => res.json())
            .then(data => setCompanies(data))
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
        <div id="asd"></div>
        <table className="min-w-full divide-y divide-gray-200 ">
            <thead className="bg-cyan-500">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Id</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">{label1}</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">{label2}</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">{label3}</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">

                {Companies.map((item) => (
                    <tr key={item.id} className='odd:bg-white even:bg-gray-100 cursor-pointer' onClick={() => showDiv(item)}>
                        <td className="px-6 py-4 whitespace-nowrap text-xs">{item._id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs">{item.company_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs">{item.industry}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs">{item.location}</td>
                    </tr>
                ))}

            </tbody>
        </table>
        <button onClick={close}>X</button>
        {displayFlag && <CompanyData display={displayFlag} singleItem={singleItem}/>}
        </>

    );
}