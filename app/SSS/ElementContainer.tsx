'use client'
import React, { useState } from 'react'
import Element from './Element'

const ElementContainer = () => {
    const [values, setValues] = useState(Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)));

    const addRandomElement = () => {
        const newValue = Math.floor(Math.random() * 100);
        setValues([...values, newValue]);
    };
    return (
        <div className="gap-4">
            <div className="flex flex-wrap gap-4 justify-center ">
                {values.map((value, index) => (
                    <Element key={index} value={value} />
                ))}
                <div className="hover:animate-pulse hover:border-yellow-500  flex flex-col h-14 w-14 p-4 text-white rounded-xl shadow-md bg-gray-200 bg-opacity-10 backdrop-filter backdrop-blur-lg border-opacity-20 border-dashed border-2 border-white"
                    onClick={addRandomElement}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 justify-center">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default ElementContainer