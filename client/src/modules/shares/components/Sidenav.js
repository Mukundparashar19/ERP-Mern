import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaBox } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';


export default function Sidenav() {

const location = useLocation()
const { pathname } = location
console.log(pathname);

  return (
    <div>
      <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '250px',height: 'calc(100vh - 56px)',overflowY: 'auto'  }}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column gap-2 mb-auto">
      <li class="nav-item ">
        <Link to="" class={`nav-link d-flex align-items-center gap-1 ${pathname === '/dashboard' ? 'active' : 'text-white' }`} aria-current="page">
          <MdHomeFilled/>
         <text> Home</text>
        </Link>
      </li>
      <li>
        <Link to="#" class="nav-link text-white d-flex align-items-center gap-1">
          <MdSpaceDashboard/>
         <text> Dashboard</text>
        </Link>
      </li>
      <li>
        <Link to="emploies" class={`nav-link d-flex align-items-center gap-1 ${pathname === '/dashboard/emploies' ? 'active' : 'text-white' }`}>
          <IoPerson/>
           <text>Employe List</text>
        </Link>
      </li>
      <li>
        <Link to="newidea" class="nav-link text-white d-flex align-items-center gap-1 ">
            <FaBox/>
           <text>New idea</text>
        </Link>
      </li>
      <li>
        <Link to="products" class="nav-link text-white d-flex align-items-center gap-1">
          <AiFillProduct/>
           <text>Products</text>
        </Link>
      </li>
    </ul>
    <hr/>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    </div>
  )
}
