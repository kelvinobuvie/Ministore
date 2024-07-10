import React from 'react'

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
          <li><img src="/Cart.png" alt="" /></li>
          <li><img src="/Account.png" alt="" /></li>
          <li><img src="/Menu.png" alt="" /></li>
        </ul>
    </div>

  )
}
