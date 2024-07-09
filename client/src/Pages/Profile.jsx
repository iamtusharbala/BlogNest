import { Avatar } from '@mui/material'
import React from 'react'

const Profile = () => {
    return (
        <div className='profile'>
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 300, height: 300 }}
            />
            <div className="profile-details">

            </div>
        </div>
    )
}

export default Profile