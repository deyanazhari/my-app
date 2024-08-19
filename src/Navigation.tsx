import React from 'react'
import { Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'
import User from './User'
import { useNavigate } from 'react-router-dom'
const Navigation = () => {
    const navigate = useNavigate()
    const navigateProg = () => {
        console.log("Do Something...")
        //to simulate API CALL
        navigate ('/user/123')
        setTimeout(() => {

        },500)
    }
  return (
<>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/user/1">user1</Link></li>
                <li><Link to="/user/2">user2</Link></li>


            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/user/:userId'  element={<User/>}></Route>

        </Routes>
        </>
  )
}

export default Navigation