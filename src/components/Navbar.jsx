
import React from 'react';
import Logo from "../images/logo.jpg";
import Faceimg from '../images/face.jpg';
export default function  Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img src={Logo} alt="prem"/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item "> 
          <input type="text" placeholder="Search..." className=" fa-solid fa-bridge-suspension form-control width-450"  />
          </li>
        </ul>
        <div className="d-flex" role="search">
        <div className='avitar-welcome-txt py-2 me-2'><span>Good Mornning</span> <h6>Dr. Christine</h6></div>
        <a type="button" href='/' className="pro-avitar position-relative">
        <img className='shadow-sm bg-body rounded' src={Faceimg} alt='prem' />
  <span className="position-absolute bottom-0 start-0  translate-bottom p-2 bg-success border border-light rounded-circle">
    <span className="visually-hidden">New alerts</span>
  </span>
</a>
        </div>
      </div>
    </div>
    
  </nav>
  )
}

