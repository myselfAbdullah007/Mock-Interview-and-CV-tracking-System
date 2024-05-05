'use client'
import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import Statics from "./statics";

export default function NumericalStatics() {

    return (
        <>
            <div className="grid grid-cols-4 gap-2">
                <div>
                    <Statics title={"No. of Users"}/>
                </div>
                <div>
                    <Statics title={"No. of Companies"}/>
                </div>
                <div>
                    <Statics title={"No. of Requests"}/>
                </div>
                <div>
                    <Statics />
                </div>
            </div>
        </>
    );
}