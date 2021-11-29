import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NewPostForm from './NewPostForm'
import  BlogPost  from './BlogPost'
import Home from './Home'

const SiteRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/new" element={<NewPostForm />}></Route>
            <Route path="/:id" element={<BlogPost />}></Route>
        </Routes>
    )
}

export default SiteRoutes;