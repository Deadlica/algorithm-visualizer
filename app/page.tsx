'use client'
import Link from "next/link"
import React from "react"
import { ArcherContainer, ArcherElement } from 'react-archer';

export default function Home() {
  
  return (
    <main>
      <div className="h-screen flex items-center justify-center">
      <ArcherContainer strokeColor="orange" >
        <div className="flex justify-start items-center ">
        <ArcherElement id="TagCircleOne"
          relations={[
            {
              targetId: 'CircleOne',
              targetAnchor: 'top',
              sourceAnchor: 'bottom',
              style: { strokeDasharray: '5,5' },
            },
          ]}>
              <div>Sort & Search</div>
        </ArcherElement>
        </div>


        <div className="flex justify-end">
        <ArcherElement id="TagCircleThree"
          relations={[
            {
              targetId: 'CircleThree',
              targetAnchor: 'top',
              sourceAnchor: 'bottom',
              style: { strokeDasharray: '5,5' },
            },
          ]}>
              <div>Graph Theory</div>
        </ArcherElement>
        </div>




        <div className='gap-2 flex justify-center items-center my-28'>
          <ArcherElement id="CircleOne">
          <Link href="/SSS" className='shadow-inner hover:shadow-none shadow-gray-800 h-8 w-8 bg-white hover:bg-yellow-600 rounded-full'></Link>
          </ArcherElement>
          <ArcherElement id="CircleTwo">
            <Link href="/SSS" className='shadow-inner hover:shadow-none shadow-gray-800 h-8 w-8 bg-white hover:bg-yellow-600 rounded-full'></Link>
          </ArcherElement>
          <ArcherElement id="CircleThree">
            <Link href="/Graph" className='shadow-inner hover:shadow-none shadow-gray-800 h-8 w-8 bg-white hover:bg-yellow-600 rounded-full'></Link>
          </ArcherElement>
          <ArcherElement id="CircleFour">
            <Link href="/AboutUs" className='shadow-inner hover:shadow-none shadow-gray-800 h-8 w-8 bg-white hover:bg-yellow-600 rounded-full'></Link>
          </ArcherElement>
        </div>


        <div className="flex justify-center gap-28">
        <ArcherElement id="TagCircleTwo"
          relations={[
            {
              targetId: 'CircleTwo',
              targetAnchor: 'bottom',
              sourceAnchor: 'top',
              style: { strokeDasharray: '5,5' },
            },
          ]}>
              <div>Data Structures</div>
        </ArcherElement>
        <ArcherElement id="TagCircleFour"
          relations={[
            {
              targetId: 'CircleFour',
              targetAnchor: 'bottom',
              sourceAnchor: 'top',
              style: { strokeDasharray: '5,5' },
            },
          ]}>
              <div>About Us</div>
        </ArcherElement>
        </div>

      </ArcherContainer>
      </div>
    </main>
  )
}
