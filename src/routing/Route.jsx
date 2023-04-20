import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from '../pages/Products'
import Product from '../pages/Product'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Contact from '../pages/Contact'
import Login from '../pages/Login'

const Routing = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes >
            <Route path='/products' element = {<Products />}/>
            <Route path='/contact' element = {<Contact />}/>
            <Route path='/login' element = {<Login />}/>
            <Route path='/products/:title' element = {<Product />}/>
            <Route path='/' element = {<Home />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing