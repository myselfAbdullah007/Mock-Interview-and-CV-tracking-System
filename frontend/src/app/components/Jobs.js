import React from 'react'
import { useState, useEffect } from "react";
import DetailedData from './DetailedData';

export default function Jobs(props) {
    const [displayFlag, setDisplayFlag] = useState(false);
    const [singleItem, setsingleItem] = useState(null);
    const [display2ndFlag, setdisplay2ndFlag] = useState(false);
    useEffect(() => {
        setDisplayFlag(props.display);
        setsingleItem(props.singleItem);
    }, [props.display, props.singleItem]);

    const showDiv = (item) => {
        setdisplay2ndFlag(true);
        setsingleItem(item);
    }
    return (
        <>
            <div className='w-3/5 ms-auto me-auto absolute bg-white py-3 job-Data' style={{ display: displayFlag ? 'block' : 'none' }}>
                <div className='text-blue-500 text-4xl text-center mb-2 font-bold'>singleItem.f_name</div>
                <div className='border-grey=500 border px-8 cursor-pointer' onClick={() => showDiv(singleItem)}>
                    <div className='text-2xl font-bold'>
                        Job Title
                    </div>
                    <hr />
                    <p className='text-sm'><span className='me-8'>Job description</span><span className='float-right'>Company</span></p>
                </div>
            </div>
            {display2ndFlag && <DetailedData display={display2ndFlag} singleItem={singleItem} option1={"Schedule Interview"} option2={"Reject Applicantion"} />}
        </>
    )
}
