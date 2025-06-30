import React, { Fragment } from 'react'
import Navbar from '../shares/components/Navbar'
import Sidenav from '../shares/components/Sidenav'
import { Outlet } from 'react-router-dom'

export default function Welcome() {
  return (
    <Fragment>
      <Navbar/>
   <div className='container-fluid'>
    <div className='row'>
        <div className='col-md-2 gx-0 bg-dark'>
            <Sidenav/>            
        </div>
        <div className='col-md-10 bg-black'>
            <Outlet/>
        </div>



    </div>
   </div>






    </Fragment>
  )
}
