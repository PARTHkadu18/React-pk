import React from "react";
import { useParams } from "react-router-dom";


export default function User() {
    const {userid}=useParams();
    return ( 
        <>
        <p className="bg-gray-700 text-white p-4 text-3xl">User: {userid}</p>
        </>
     );
}