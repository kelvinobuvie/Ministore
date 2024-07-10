import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
          <img src="/Profileimg.png" alt="" />
        </div>
        <div className="search">
        <input type="text"  placeholder='Search products, brands and categories' />
        </div>
        <ul>
          <Link to="/cart" className='Cart'><h4>Cart</h4><li><img src="/Cart.png" alt="" /></li></Link>
          <li><img src="/Account.png" alt="" /></li>
          <li><img src="/Menu.png" alt="" /></li>
        </ul>
    </div>

  )
}
