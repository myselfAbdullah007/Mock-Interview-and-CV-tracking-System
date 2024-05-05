import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import './../globals.css';

const DetailedData = (props) => {
    const [displayFlag, setDisplayFlag] = useState(false);
    const [singleItem, setsingleItem] = useState(null);


    useEffect(() => {
        setDisplayFlag(props.display);
        setsingleItem(props.singleItem)
    }, [props.display, props.singleItem]);

    return (
        <div className="w-1/3 mx-auto bg-white px-10 py-5 border border-slate-300 rounded-md shadow-[0px_0px_60px_-15px_rgba(0,0,0,0.3)] absolute de-Data space-y-4 text-sm" style={{ display: displayFlag ? 'block' : 'none' }}>
            <div className="text-center text-2xl pb-3">User Data</div>
            <div className="font-bold">
                ID: <span className="font-normal">{singleItem ? singleItem._id : 'No data'}</span>
            </div>
            <div className="font-bold">
                Company Name: <span className="font-normal">{singleItem ? singleItem.company_name : 'No data'}</span>
            </div>
            <div className="font-bold">
                Industry Type: <span className="font-normal">{singleItem ? singleItem.industry : 'No data'}</span>
            </div>

            <div className="font-bold">
                Address: <span className="font-normal">{singleItem ? singleItem.location : 'No data'}</span>
            </div>
            <div className="pt-3">
                <button className="bg-blue-500 text-white border-rounded px-8 py-2 text-sm float-start">Accept</button>
                <button className="bg-red-600 text-white border-rounded px-8 py-2 text-sm float-end">Decline</button>
            </div>
        </div>
    );
};

export default DetailedData;
