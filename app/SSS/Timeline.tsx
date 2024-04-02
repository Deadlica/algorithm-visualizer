import React from 'react'
import { Dropdown } from "flowbite-react"
const Timeline = () => {
    return (
<Dropdown label="Dropdown button" dismissOnClick={false} renderTrigger={() => <div className=" hover:border-yellow-500  flex flex-col h-14 w-14 p-4 text-white rounded-full shadow-md bg-gray-200 bg-opacity-10 backdrop-filter backdrop-blur-lg border-opacity-20 border-double border-2 border-white">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>

        </div>}>
<Dropdown.Item>Sort</Dropdown.Item>
<Dropdown.Item>Search</Dropdown.Item>
</Dropdown>
    )
}

export default Timeline;
