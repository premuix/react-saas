
import React from 'react';
export default function  Sidebar() {
  return (
    <div className='sidebar-nav'>
      <ul className="nav flex-column text-uppercase">
         <li className="nav-item">
            <a className=" " aria-current="page" href="/" ><span className='active-col'><i class="rounded-circle bi bi-house-door"></i></span> Home</a>
          </li>
         <li className="nav-item">
            <a className="" href="/"><i class="bi bi-bar-chart-steps"></i> Inbox</a>
         </li>
         <li className="nav-item">
            <a className="" href="/"><i class="bi bi bi-alarm"></i> Upcoming</a>
         </li>
          <li className="nav-item">
             <a className="" href='/'> <i class="bi bi-apple"></i> Sales</a>
           </li>
           <li className="nav-item">
             <a className="" href='/'><i class="bi bi-archive-fill"></i> Insight</a>
           </li>
          </ul>
    </div>
  )
}

