import './Postcard.css'
import React from 'react'
import blogImage from '../../assets/post-image.jpg'
import { Link } from 'react-router-dom'

const Postcard = () => {
    return (
        <div className='postcard w-[300px] h-420px bg-red-300 rounded-2xl mb-8'>
            <img src={blogImage} alt="" srcset="" />
            <div className="post-body px-8 py-5">
                <div className="post-title">
                    <Link to='/blogs' className='text-xl font-bold hover:underline'>Post Title</Link>
                </div>
                <div className="post-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="post-author">
                    <p className='text-sm italic'>Author Name</p>
                </div>
            </div>
        </div>
    )
}

export default Postcard