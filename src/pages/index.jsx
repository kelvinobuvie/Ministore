import React from 'react'
// import Bag from '../components/bag'
import Topbag from '../components/topbags'
import Footer from '../components/footer'
import Products from '../components/Products'

export default function Home() {
  return (
    <>
    <a className="sales-week" href="">Top sales of the week</a>
      <div className="hero">
      <div className="content">
        <a>Verified</a>
        <h1>Puffy Clouds</h1>
        <p>Most popular among it's set</p>
      </div>
      <div className="image">
        <img src="/puffy-clouds.png" alt="" />
      </div>
      </div>
      <Products/>
      
      <div className="top-beauty">
        <h4>Top Beauty Bags</h4>
        <h4>SEE ALL</h4>
      </div>
        
      <div className="top-bags">
      <Topbag/>
        <Topbag/>
        <Topbag/>
        <Topbag/>
        <Topbag/>
        <Topbag/>
        <Topbag/>
        <Topbag/>
      </div>

      <div>
        <Footer/>
      </div>
    </>
    
  )
}
