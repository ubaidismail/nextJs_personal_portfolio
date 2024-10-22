"use client";
import React from 'react'

export default function footer() {
  return (
    <div className='footer_ p-4 uppercase border-t-2 border-zinc-900	backdrop-blur-sm bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-900'>
        <div className="container mx-auto">
            <p className='text-center'>Copyright { new Date().getFullYear()} All Right Reserved</p>
        </div>
    </div>
  )
}
