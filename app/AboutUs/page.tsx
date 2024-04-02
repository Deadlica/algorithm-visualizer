import Link from 'next/link'
import React from 'react'

export default function AboutUs () {
  return (
      <div className='gap-2 flex justify-center items-center'>
        <Link href="/SSS" className=' h-8 w-8 bg-white hover:bg-yellow-500 rounded-full'></Link>
        <Link href="/SSS" className=' h-8 w-8 bg-white hover:bg-yellow-500 rounded-full'></Link>
        <Link href="/Graph" className=' h-8 w-8 bg-white hover:bg-yellow-500 rounded-full'></Link>
        <Link href="/AboutUs" className='h-8 w-8 mt-10 bg-yellow-500 rounded-full animate-bounce duration-10'></Link>
      </div>
  )
}


