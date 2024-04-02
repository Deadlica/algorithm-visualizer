'use client'
import React from 'react'
import ElementContainer from './ElementContainer'
import ContainerCustomizer from './ContainerCustomizer'
import Timeline from './Timeline'
import Link from 'next/link'
import { useScramble } from "use-scramble";

import { Kbd } from "flowbite-react";
const SSS = () => {
  const { ref, replay } = useScramble({ 
    text: "Sort Using",
    speed: 0.22000000000000004,
    scramble: 2,
  });
  const openModal = () => {
    const modal = document.getElementById('my_modal_4') as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div>
      <div className='flex items-center justify-between pt-4 px-4 flex-grow'>
      <Link href="../" className="font-extrabold text-2xl" >Darwin</Link>

        <div className='gap-2 flex'>
          <Link href="/SSS" className=' h-8 w-8 bg-white hover:bg-yellow-500 rounded-full'></Link>
          <Link href="/SSS" className=' h-8 w-8 bg-yellow-500 mt-6 rounded-full'></Link>
          <Link href="/Graph" className=' h-8 w-8 bg-white hover:bg-yellow-500 rounded-full'></Link>
          <Link href="/AboutUs" className='h-8 w-8 bg-white rounded-full '></Link>
        </div>
        <button onClick={openModal} className=" hover:border-yellow-500  flex flex-col h-14 w-14 p-4 text-white rounded-xl shadow-md bg-gray-200 bg-opacity-10 backdrop-filter backdrop-blur-lg border-opacity-20 border-double border-2 border-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </button>
        <dialog id="my_modal_4" className="modal bg-opacity-10">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Settings</h3>
            <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller" value="synthwave" />
              <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
              <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            </label>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn" onClick={(e) => {
                  e.preventDefault();
                  const modal = document.getElementById('my_modal_4') as HTMLDialogElement | null;
                  if (modal) {
                    modal.close();
                  }
                }}>Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      {/*
      <div className='gap-10 pt-10 flex justify-center items-center'>
        <div ref={ref} onMouseOver={replay} onFocus={replay} >Sort Using</div>
        <div className="divider divider-horizontal"></div>
        <div  className="relative w-[max-content]  before:absolute before:inset-0 before:animate-typewriter before:bg-slate-950 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-yellow-500">Search For __ </div>
      </div>*/}
      <div className="gap-2 flex items-center justify-between px-4 pt-16 flex-grow">
            <Timeline/>
            <ElementContainer/>
            <ContainerCustomizer/>
      </div>
      <ul className="steps steps-vertical overflow-x-auto pl-6">
        <li className="step step-neutral"></li>
        <li className="step step-neutral"></li>
        <li className="step step-neutral"></li>
        <li className="step step-neutral"></li>
        <li className="step step-neutral"></li>
        <li className="step step-neutral"></li>
        <li className="step step-neutral"></li>
        <li className="step step-neutral"></li>
      </ul>
      <div className="gap-2 flex items-center justify-between px-4 flex-grow">
            <Timeline/>
            <ElementContainer/>
            <ContainerCustomizer/>
      </div>
    </div>
  )
}

export default SSS
