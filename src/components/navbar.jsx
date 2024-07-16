import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
          {/* <img src="/Profileimg.png" alt="" /> */}
        </div>
        <ul>
          <li><Link to="/home"><b>Home</b></Link></li>
          <li><Link to="#"><b>Wishlist</b></Link></li>
          <li><Link to="/cart"><b>Cart</b></Link></li>
        </ul>
    </div>

  )
}
