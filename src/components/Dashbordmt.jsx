
import React from 'react';
import Faceimg from '../images/face.jpg';
import Iconch from '../images/icon-ch.jpg';
import Icondoc from '../images/icon-doc.jpg';
import Iconlist from '../images/icon-list.jpg';
import Iconpri from '../images/icon-pri.jpg';

export default function  Dashbordmt () {
  return (
<>
<div className="row dash-card  gx-5  "> 
    
  <div className="col-md-3 ">

<div className="row shadow bg-white py-3 rounded-4 ">
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

<div className="col-md-3 ">
<div className="row shadow bg-white py-3 rounded-4 ">
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

<div className="col-md-3  ">
<div className="row shadow bg-white py-3 rounded-4 ">
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

<div className="col-md-3 ">
<div className="row shadow bg-white py-3 rounded-4 ">
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
    <div className=' p-3 rounded-4 bg-green-lg '><h5>Ongoing Users</h5>
    <div className='bg-white  rounded-4'>
    <div className='row pt-3 px-2'> 
      <div className='col-3'> <img src={Faceimg} alt="prem" className='shadow img-fluid rounded border border-light  ' /> </div>
      <div className='col-5 '><span className='fw-bold'>Emma Mendoza</span> <span className='text-uppercase  text-success'>ONGOING</span></div>
      <div className='col-4'><button type="button" class="btn btn-light shadow-sm"><i class="bi bi-chat-quote"></i> Chat </button></div>
    </div>
    <div class="d-flex flex-row text-center small-font mt-3 pb-3 ">
  <div class="px-3 border-end">Gender <span className='fw-semibold'>Femal</span></div>
  <div class="px-3 border-end">Age <span className='fw-semibold'> 29</span></div>
  <div class="px-3 border-end">State <span className='fw-semibold'>Alaska</span></div>
  <div class="px-3">Country <span className='fw-semibold'>USA</span></div>
</div>
    </div>


    <div className='bg-green-lt rounded-4'>
    <div className='row py-3 my-3 px-2'> 
      <div className='col-3'> <img src={Faceimg} alt="prem" className='shadow img-fluid rounded border border-light  ' /> </div>
      <div className='col-5 '><span className='fw-bold'>Emma Mendoza</span> <span ><i class="bi bi-clock"></i> 10am - 11am</span></div>
      <div className='col-4'><button type="button" class="btn btn-light shadow-sm"><i class="bi bi-chat-quote"></i> Chat </button></div>
    </div>

    </div>

    <div className='bg-green-lt rounded-4'>
    <div className='row py-3 my-3 px-2'> 
      <div className='col-3'> <img src={Faceimg} alt="prem" className='shadow img-fluid rounded border border-light  ' /> </div>
      <div className='col-5 '><span className='fw-bold'>Emma Mendoza</span> <span ><i class="bi bi-clock"></i> 10am - 11am</span></div>
      <div className='col-4'><button type="button" class="btn btn-light shadow-sm"><i class="bi bi-chat-quote"></i> Chat </button></div>
    </div>

    </div>


    <div className='bg-green-lt rounded-4'>
    <div className='row py-3 my-3 px-2'> 
      <div className='col-3'> <img src={Faceimg} alt="prem" className='shadow img-fluid rounded border border-light  ' /> </div>
      <div className='col-5 '><span className='fw-bold'>Emma Mendoza</span> <span ><i class="bi bi-clock"></i> 10am - 11am</span></div>
      <div className='col-4'><button type="button" class="btn btn-light shadow-sm"><i class="bi bi-chat-quote"></i> Chat </button></div>
    </div>

    </div>
    </div>



    
</div>
<div className='col-md-9 '>
    <div className=' p-3 rounded-4 bg-green'>
    <h5>Today's Consultation</h5>
    <div className='bg-white  rounded-4'>
    <div className='row pt-3 py-3 px-5'> 
    <table class="table table-hover align-middle">
      
  <thead>
    <tr>
      <th scope="col">Time</th>
      <th scope="col"></th>
      <th scope="col">Patient name</th>
      <th scope="col">Contact</th>
      <th scope="col">Action</th>
      <th scope="col">View</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">08:00</th>
      <td><img src={Faceimg} alt="prem" className='img-40 shadow rounded float-end border border-light  ' /> </td>
      <td>Mark</td>
      <td>(200) 234-7883</td>
      <td><button className='btn btn-light shadow-smhg'>Reschedule</button></td>
      <td><a href='/'>Views</a></td>
    </tr>
    <tr>
      <th scope="row">08:00</th>
      <td><img src={Faceimg} alt="prem" className='img-40 shadow rounded float-end border border-light  ' /></td>
      <td>Jacob</td>
      <td>(200) 234-7883</td>
      <td><button className='btn btn-light shadow-smhg'>Reschedule</button></td>
      <td><a href='/'>Views</a></td>
    </tr>
    <tr>
      <th >08:00</th>
      <td><img src={Faceimg} alt="prem" className='img-40 shadow rounded float-end border border-light  ' /></td>
      <td >Larry the Bird</td>
      <td >(200) 234-7883</td>
      <td><button className='btn btn-light shadow-smhg'>Reschedule</button></td>
      <td><a href='/'>Views</a></td>
    </tr>
    <tr>
      <th >08:00</th>
      <td><img src={Faceimg} alt="prem" className='img-40 shadow rounded float-end border border-light  ' /></td>
      <td >Larry the Bird</td>
      <td >(200) 234-7883</td>
      <td><button className='btn btn-light shadow-smhg'>Reschedule</button></td>
      <td><a href='/'>Views</a></td>
    </tr>
    <tr>
      <th >08:00</th>
      <td><img src={Faceimg} alt="prem" className='img-40 shadow rounded float-end border border-light  ' /></td>
      <td >Larry the Bird</td>
      <td >(200) 234-7883</td>
      <td><button className='btn btn-light shadow-smhg'>Reschedule</button></td>
      <td><a href='/'>Views</a></td>
    </tr>
    <tr>
      <th >08:00</th>
      <td><img src={Faceimg} alt="prem" className='img-40 shadow rounded float-end border border-light  ' /></td>
      <td >Larry the Bird</td>
      <td >(200) 234-7883</td>
      <td><button className='btn btn-light shadow-smhg'>Reschedule</button></td>
      <td><a href='/'>Views</a></td>
    </tr>
    <tr>
      <th >08:00</th>
      <td><img src={Faceimg} alt="prem" className='img-40 shadow rounded float-end border border-light  ' /></td>
      <td >Larry the Bird</td>
      <td >(200) 234-7883</td>
      <td><button className='btn btn-light shadow-smhg'>Reschedule</button></td>
      <td><a href='/'>Views</a></td>
    </tr>
  </tbody>

    </table>
    </div>
  
    </div>

    </div>
</div>
</div>


</>
  )
}

