import React, { useState, useEffect } from "react";

export default function NumericalStatics(props) {

    const [title, settitle] = useState("");

    useEffect(() => {
        settitle(props.title);
    }, props.title);

    return (
        <>
        <div className="bg-white border-rounded px-3 py-3">
            <div>
                <div className="text-1xl ">
                {title ? title : 'No data'}
                </div>
                <div className="text-4xl text-right">5</div>
            </div>
        </div>
        </>
    );}