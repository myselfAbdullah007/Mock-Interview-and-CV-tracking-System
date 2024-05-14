import React from 'react'
import { useState, useEffect } from "react";
import DetailedData from './DetailedData';

export default function Jobs(props) {
    const [items, setitems] = useState([]);
    const [displayFlag, setDisplayFlag] = useState(false);
    const [singleItem, setsingleItem] = useState(null);
    const [display2ndFlag, setdisplay2ndFlag] = useState(false);
    useEffect(() => {
        setDisplayFlag(props.display);
        setsingleItem(props.singleItem);
        GetJobs();
        // filter();
    }, [props.display, props.singleItem]);

    const showDiv = (item) => {
        setdisplay2ndFlag(true);
        setsingleItem(item);
    }
    const GetJobs = () => {
        fetch("http://localhost:5000/")
            .then(res => res.json())
            .then(data => setitems(data))
            .catch(err => console.log("Error: ", items));
    }

    return (
        <>
        {console.log("items: ", items)}

        {items.map((item) => (
            <div key={item._id} className='w-3/5 ms-auto me-auto absolute bg-white py-3 job-Data' style={{ display: displayFlag ? 'block' : 'none' }}>
                <div className='text-blue-500 text-4xl text-center mb-2 font-bold'>singleItem.f_name</div>
                <div className='border-grey=500 border px-8 cursor-pointer' onClick={() => showDiv(singleItem)}>
                    <div className='text-2xl font-bold'>
                    {item.title}
                    </div>
                    <hr />
                    <p className='text-sm'><span className='me-8'>{item.description}</span><span className='float-right'>{singleItem._id}</span></p>
                </div>
            </div>
            ))}
            {display2ndFlag && <DetailedData display={display2ndFlag} singleItem={singleItem} option1={"Schedule Interview"} option2={"Reject Applicantion"} />}
        </>
    )
}
        // filter();
        // console.log("Entering for loop");
        // for(let i=0; i< data.length; i++){
        //     items.push(data[i]);
        // }


    //     const filter = () =>{          
    //         const filteredEntries = Object.entries(items).filter(
    //           ([key, obj]) => obj.applicant_id.includes(singleItem._id)
    //         );
    //         const filteredObjects = Object.fromEntries(filteredEntries);
    //         console.log(`${filteredObjects}`);
    //   }