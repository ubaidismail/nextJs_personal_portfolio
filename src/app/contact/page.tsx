import FloatingDockDemo from '@/components/contactSection/docSlider'
import React from 'react'

export default function Contact() {
    return (
        <>

            <div className='contact-area pt-[100px] pb-5'>
                <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <div className="container mx-auto">
                        <FloatingDockDemo />
                    </div>
                    
                </div>

            </div>
        </>
    )
}
