'use client'
import { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import DetailedData from "./../../app/components/DetailedData";

export default function UserTable(props) {
    const [label1, setlabel1] = useState("");
    const [label2, setlabel2] = useState("");
    const [label3, setlabel3] = useState("");
    const [option1, setoption1] = useState("");
    const [option2, setoption2] = useState("");

    const [items, setitems] = useState([]);
    const [displayFlag, setDisplayFlag] = useState(false);
    const [singleItem, setsingleItem] = useState(null);


    useEffect(() => {
        setlabel1(props.name);
        setlabel2(props.username);
        setlabel3(props.email);
        setoption1(props.option1);
        setoption2(props.option2);

        GetTodos();
    }, [props.name, props.username, props.email, props.option1, props.option2]);

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
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">{label1}</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">User Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Email</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">

                {items.map((item) => (
                    <tr key={item.id} className='odd:bg-white even:bg-gray-100 cursor-pointer' onClick={() => showDiv(item)}>
                        <td className="px-6 py-4 whitespace-nowrap text-xs">{item._id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs">{item.f_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs">{item.username}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs">{item.email}</td>
                    </tr>
                ))}

            </tbody>
        </table>
        <button onClick={close}>X</button>
        {displayFlag && <DetailedData display={displayFlag} singleItem={singleItem} opt1={option1} opt2={option2}/>}
        </>

    );
}