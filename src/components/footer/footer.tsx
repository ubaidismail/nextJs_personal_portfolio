"use client";
import React from 'react'

export default function footer() {
  return (
    <div className='footer_ p-4 uppercase border-t-2 border-zinc-900	backdrop-blur-sm bg-gradient-to-r from-orange-500 via-orange-900 to-orange-500'>
        <div className="container mx-auto">
            <p className='text-center dark:text-white text-white'>Copyright { new Date().getFullYear()} All Right Reserved</p>
        </div>
    </div>
  )
}
