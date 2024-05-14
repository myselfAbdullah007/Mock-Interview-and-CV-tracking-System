import React, { useState, useEffect } from 'react';
import DetailedData from './DetailedData';

export default function DisplayApp(props) {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [displayFlag, setDisplayFlag] = useState(false);
    const [singleItem, setSingleItem] = useState(null);
    const [display2ndFlag, setDisplay2ndFlag] = useState(false);

    useEffect(() => {
        GetJobs();
    }, []);

    useEffect(() => {
        setDisplayFlag(props.display);
        setSingleItem(props.singleItem);
    }, [props.display, props.singleItem]);

    useEffect(() => {
        if (singleItem) {
            filterItems();
        }
    }, [items, singleItem]);

    const showDiv = (item) => {
        setDisplay2ndFlag(true);
        setSingleItem(item);
    };

    const GetJobs = () => {
        fetch("http://localhost:5000/")
            .then(res => res.json())
            .then(data => {
                setItems(data);
                console.log("Fetched jobs: ", data);
            })
            .catch(err => console.log("Error: ", err));
    };

    const filterItems = () => {
        const filtered = items.filter(item => item.applicant_id.includes(singleItem._id));
        setFilteredItems(filtered);
        console.log("Filtered items: ", filtered);
    };

    return (
        <>
            {console.log("Items: ", items)}
            <table className="w-3/5 ms-auto me-auto divide-y divide-gray-200 job-Data absolute border border-gray-400">
                <thead className="bg-cyan-500">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Title</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Description</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Deadline</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredItems.map((item) => (
                        <tr key={item._id} className='odd:bg-white even:bg-gray-100 cursor-pointer' onClick={() => showDiv(singleItem)}>
                            <td className="px-6 py-4 whitespace-nowrap text-xs">{item.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs">{item.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs">{item.deadline}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {display2ndFlag && <DetailedData display={display2ndFlag} singleItem={singleItem} option1={"Schedule Interview"} option2={"Reject Application"} />}
        </>
    );
}

















// import React from 'react'
// import { useState, useEffect } from "react";
// import DetailedData from './DetailedData';

// export default function DisplayApp(props) {
//     const [items, setitems] = useState([]);
//     const [filteredItems, setFilteredItems] = useState([]);
//     const [displayFlag, setDisplayFlag] = useState(false);
//     const [singleItem, setsingleItem] = useState(null);
//     const [display2ndFlag, setdisplay2ndFlag] = useState(false);
//     useEffect(() => {
//         GetJobs();
//         filter();
//         setDisplayFlag(props.display);
//         setsingleItem(props.singleItem);


//     }, [props.display, props.singleItem]);

//     const showDiv = (item) => {
//         setdisplay2ndFlag(true);
//         setsingleItem(item);
//     }
//     const GetJobs = () => {
//         fetch("http://localhost:5000/")
//             .then(res => res.json())
//             .then(data => { setitems(data); console.log(items) })
//             .catch(err => console.log("Error: ", items));
//     }

//     const filter = () => {
//         const filteredItems = items.filter(item => item.applicant_id.includes(singleItem._id));
//         setFilteredItems(filteredItems);
//         console.log("filtered:", filteredItems);
//     };




//     return (
//         <>
//             <table className="w-3/5 ms-auto me-auto divide-y divide-gray-200 job-Data absolute border border-gray-400">
//                 <thead className="bg-cyan-500">
//                     <tr>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Title</th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">description</th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-900 uppercase tracking-wider">Deadline</th>
//                     </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">

//                     {filteredItems.map((item) => (
//                         <tr key={item.id} className='odd:bg-white even:bg-gray-100 cursor-pointer' onClick={() => showDiv(item)}>
//                             <td className="px-6 py-4 whitespace-nowrap text-xs">{item.title}</td>
//                             <td className="px-6 py-4 whitespace-nowrap text-xs">{item.description}</td>
//                             <td className="px-6 py-4 whitespace-nowrap text-xs">{item.deadline}</td>
//                         </tr>
//                     ))}

//                 </tbody>
//             </table>
//             {display2ndFlag && <DetailedData display={display2ndFlag} singleItem={singleItem} option1={"Schedule Interview"} option2={"Reject Applicantion"} />}
//         </>
//     )
// }