
import React from 'react';
import Iconch from '../images/icon-ch.jpg';
import Icondoc from '../images/icon-doc.jpg';
import Iconlist from '../images/icon-list.jpg';
import Iconpri from '../images/icon-pri.jpg';

export default function  Dashbordmt () {
  return (
<>
<div className="row dash-card "> 
    
  <div className="col-md-3 shadow bg-light py-3 rounded-4 ">
<div className="row g-3">
  <div className="col-md-3 img-middle ">
  <img  src={Iconch} alt="prem"/>
  </div>
  <div className="col-md-9">
    <div className="card-body">
      <h5 className="card-title">18</h5>
      <p className="card-text">Today's Consultations <label> <strong>+2</strong>  +4 New by today</label></p>
      
    </div>
  </div>
</div>
</div>

<div className="col-md-3 shadow bg-light py-3 rounded-4 ">
<div className="row g-3">
  <div className="col-md-3 img-middle ">
  <img  src={Icondoc} alt="prem"/>
  </div>
  <div className="col-md-9">
    <div className="card-body">
      <h5 className="card-title">S42K</h5>
      <p className="card-text">Last month <label><strong>+2</strong> $10K from last week</label></p>
      
    </div>
  </div>
</div>
</div>

<div className="col-md-3 shadow bg-light py-3 rounded-4 ">
<div className="row g-3">
  <div className="col-md-3 img-middle ">
  <img  src={Iconlist} alt="prem"/>
  </div>
  <div className="col-md-9">
    <div className="card-body">
      <h5 className="card-title">06</h5>
      <p className="card-text">09 Inbox Messages <label> <strong>+2</strong> +2 new by today</label></p>
      
    </div>
  </div>
</div>
</div>

<div className="col-md-3 shadow bg-light py-3 rounded-4 ">
<div className="row g-3">
  <div className="col-md-3 img-middle ">
  <img  src={Iconpri} alt="prem"/>
  </div>
  <div className="col-md-9">
    <div className="card-body">
      <h5 className="card-title">09</h5>
      <p className="card-text">09 Inbox Messages <label> <strong>+2</strong> from previous</label></p>
      
    </div>
  </div>
</div>
</div>
   

   </div>

<div className='row my-5'>
  <div className='col-md-3 '>
    <div className=' p-3 rounded-4 bg-green-lg '>sdsd</div>
</div>
<div className='col-md-9 '>
    <div className=' p-3 rounded-4 bg-green'>sdsd</div>
</div>
</div>


</>
  )
}

