import React from 'react'
import silver from '../images/Silver.jpg';
import gold from "../images/Gold.jpg";
import plat from "../images/Platinum.jpg"
// import './Packages.css'
export default function Packages() {
  return (
    
    <div className='container-fluid d-flex justify-content-center'>
        <br/>    
        <div className="row">
            <div className='col-md-4'>
                <img src={silver} alt="Silver"/>
            </div>
            <div className='col-md-4'>
                <img src={gold} alt="Silver"/>
            </div>
            <div className='col-md-4'>
                <img src={plat} alt="Silver"/>
            </div>
        </div>
        </div>
        
        // <div className="row">
        // <h2 className='htag'>Our Packages</h2>
        // <div class="column-md-4">
        //     <img src={silver} alt="Silver"/>
        // </div>
        // <div className="column-md-4">
        //     <img src={gold} alt="Gold"/>
        // </div>
        // <div className="column-md-4">
        //     <img src={plat} alt="Platinum"/>
        // </div>
        // </div> 
    
  )
}
