
import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashbordmt from '../components/Dashbordmt';
export default function  Body() {
  return (
    <div className='row'>
      <div className='col-2 '> <Sidebar /> </div>
      <div className='col-10'> <Dashbordmt /> </div> 
    </div>
  )
}

