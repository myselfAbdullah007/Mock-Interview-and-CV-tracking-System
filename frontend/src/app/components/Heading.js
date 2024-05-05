import { useState, useEffect } from 'react';

export default function Heading(props){

    const [name, setname] = useState("");

    useEffect(() => {
        setname(props.name);
    }, [props.name]);


    return (
        <h1 className="text-center text-2xl mt-10 font-bold">Welcome to {name} Panel</h1>
    );
}