import './Postcard.css'
import React from 'react'
import blogImage from '../../assets/post-image.jpg'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Postcard = () => {
    return (
        <div className='postcard w-[300px] h-420px bg-red-300 rounded-2xl mb-8 shadow-md'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={blogImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='cursor-pointer'>
                        <Link to={"/blogs"}>Blog Title</Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Postcard