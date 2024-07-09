import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'

const Layout = () => {
    return (
        <>
            <Navbar />
            <Container fixed className='mt-20' >
                <Outlet />
            </Container>

        </>
    )
}

export default Layout