
import React from 'react'
import { Button, Popover } from "flowbite-react";
import { Dropdown } from "flowbite-react"
const ContainerCustomizer = () => {
    return (/*
        <Popover
        aria-labelledby="default-popover"
        content={
          <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
            <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
              <h3 id="default-popover" className="font-semibold text-gray-900 dark:text-white">Customize Array</h3>
            </div>
            <div className="px-3 py-2">
                <div>Length of Array</div>
            <input type="range" min={0} max="20" step="1" className="w-300 range range-xs [--range-shdw:black] opacity-20"/>
            <div className=" flex justify-between text-xs px-2 mb-15">
                    <span>0</span>
                    <span>10</span>
                    <span>20</span>
            </div>
              <button>Random</button>
              <button>Ascending</button>
              <button>Descending</button>
              <button>Incrementing</button>
            </div>
          </div>
        }
        arrow={false}
      >
        <Button className=" hover:border-yellow-500  flex flex-col h-14 w-14 p-4 text-white rounded-xl shadow-md bg-gray-200 bg-opacity-10 backdrop-filter backdrop-blur-lg border-opacity-20 border-double border-2 border-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg></Button>
      </Popover>*/



<Dropdown label="Dropdown button" dismissOnClick={false} renderTrigger={() => <div className=" hover:border-yellow-500  flex flex-col h-14 w-14 p-4 text-white rounded-xl shadow-md bg-gray-200 bg-opacity-10 backdrop-filter backdrop-blur-lg border-opacity-20 border-double border-2 border-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
        </div>}>
<Dropdown.Header>
<input type="range" min={0} max="20" step="1" className="w-300 range range-xs [--range-shdw:white] opacity-20"/>
            <div className=" flex justify-between text-xs px-2 mb-15">
                    <span>0</span>
                    <span>10</span>
                    <span>20</span>
            </div>
</Dropdown.Header>
<Dropdown.Item>Random</Dropdown.Item>
<Dropdown.Item>Ascending</Dropdown.Item>
<Dropdown.Item>Descending</Dropdown.Item>
<Dropdown.Divider />
<Dropdown.Item>Incrementing</Dropdown.Item>
</Dropdown>
        /*<div className=" hover:border-yellow-500  flex flex-col h-14 w-14 p-4 text-white rounded-xl shadow-md bg-gray-200 bg-opacity-10 backdrop-filter backdrop-blur-lg border-opacity-20 border-double border-2 border-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
        </div>*/
        /*<div>
            <input type="range" min={0} max="20" step="1" className="w-300 range range-xs [--range-shdw:white] opacity-20"/>
            <div className=" flex justify-between text-xs px-2 mb-15">
                    <span>0</span>
                    <span>10</span>
                    <span>20</span>
            </div>
        </div> */
    )
}

export default ContainerCustomizer
