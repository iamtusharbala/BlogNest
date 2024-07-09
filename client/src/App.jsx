import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Layout from './Layout/Layout'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import CreateBlog from './Pages/CreateBlog'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="profile" element={<Profile />} />
        <Route path="create-blog" element={<CreateBlog />} />
      </Route>
      <Route path='/login' element={<Login />
      } />
    </Routes>
  )
}

export default App