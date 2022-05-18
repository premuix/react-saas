
import React from 'react';
export default function  Sidebar() {
  return (
    <div className='sidebar-nav'>
      <ul className="nav flex-column text-uppercase">
         <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
         <li className="nav-item">
            <a className="nav-link" href="/">Inbox</a>
         </li>
         <li className="nav-item">
            <a className="nav-link" href="/">Upcoming</a>
         </li>
          <li className="nav-item">
             <a className="nav-link" href='/'>Sales</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href='/'>Insight</a>
           </li>
          </ul>
    </div>
  )
}

