import React from 'react'
import Navbar from './Navbar/Navbar'
import fitlife from '../images/fitlife.jpg'
import Header from './Header/Header'
import Packages from './Packages'
import Feature from './Feature/Feature'
import Footer from './Footer/Footer'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>

        <Feature/>
        <br/> <br/> <br/>
        <img src={fitlife} class="img-fluid" alt="FitLife"/><br/>
        <br/><h2 style={{textAlign: "center"}}>Our Packages</h2> <br/>
        <Packages/> <br/>
        <Footer/>
    </div>
  )
}
