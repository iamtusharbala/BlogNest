import './Navbar.css'
import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar w-screen h-[1/4] bg-green-800 '>
            <div className="nav-items flex justify-center items-center">
                <div className="brand ms-4">
                    <h1 className='text-md text-white font-bold'>BlogNest</h1>
                </div>
                <div className="nav-links flex p-3 me-5 gap-5 ms-auto">
                    <h1 className='text-md text-white font-medium'>Posts</h1>
                    <h1 className='text-md text-white font-medium'>Profile</h1>
                    <h1 className='text-md text-white font-medium'>Login</h1>
                    <h1 className='text-md text-white font-medium'>Register</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar