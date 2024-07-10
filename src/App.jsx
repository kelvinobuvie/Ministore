import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/index'
import Navbar from './components/navbar';
import Cart from '../src/pages/Cart';


const App = () => {

  return (
    <>
    <Navbar />
      <div className="container">
        <Routes>
        <Route  index={true} element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
        {/* <Route path="/cart/:productId" element={<Cart />}/> */}
    {/* <Cart /> */}
      </div>
      </>
  )
}

export default App
