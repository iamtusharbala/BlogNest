import React from 'react'
import blogImage from '../assets/post-image.jpg'

const Blog = () => {
    return (
        <div className='blog flex flex-col justify-around items-center flex-wrap'>
            <img src={blogImage} alt="" srcset="" />
            <h1>Blog Title</h1>
            <h4>Author Name</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates qui doloremque unde eligendi rem, voluptas perspiciatis dolores voluptatum harum dolore, adipisci deleniti quis nesciunt error quibusdam iste reprehenderit inventore corporis eveniet officia ducimus. Animi placeat, dolorum ratione laborum mollitia non magnam natus laboriosam, nobis explicabo quia illum quos voluptates harum nam itaque, assumenda temporibus? Vero commodi iste, asperiores, nobis amet nostrum ex cumque corrupti, rerum quo quia enim accusamus magni fuga? Reiciendis veniam dignissimos ratione quasi ea laudantium officiis ut modi molestias temporibus eaque, quam sint iusto sed, alias similique voluptatibus. Iusto eveniet maiores, consequuntur veritatis aspernatur assumenda ad distinctio.</p>
        </div>
    )
}

export default Blog