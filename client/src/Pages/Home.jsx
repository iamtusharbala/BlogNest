import React from 'react'
import Postcard from '../Components/Postcard/Postcard'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Home = () => {
    return (
        <div className='home'>
            <div className="add-blog flex xs:justify-center sm:justify-center md:justify-center lg:justify-end" >
                <Link to={'/create-blog'} ><Button variant="contained">Create blog</Button></Link>
            </div>
            <div className="postcard-row flex justify-between items-center flex-wrap mt-7">
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
            </div>
        </div>
    )
}

export default Home