import React from 'react'
// import Topbags from '../components/topbags'
import Cartitem from '../components/cart-item'
import Addmore from '../components/addmore'
import Checkout from '../components/checkout'


export default function Cart() {
  return (
    <>
    <div className="cart-container">
    <div className="cart-header">
        <h1><img src="/cartimg.png" alt=""/> Here is your Cart</h1>
    </div>
        <div className="cart-box">
            <Cartitem/>
            <Cartitem/>
        </div>
        <div className="btns">
            <Addmore/>
            <Checkout/>
        </div>
    </div>
    </>
  )
}
