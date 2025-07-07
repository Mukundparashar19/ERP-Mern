import React, { useEffect, useState } from "react";
import { IoIosCreate } from "react-icons/io";
import { CiRead } from "react-icons/ci";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom'

export default function Emploieslist() {

const [allemp, setallemp] = useState([])
const myallemp =()=>{
  axios.get('http://localhost:8700/allemplist').then((d)=>{
    console.log(d.data.allemp);
    setallemp(d.data.allemp);    
  })
}

useEffect(()=>{
  myallemp()
},[])

const deleterecord =(id)=>{
axios.delete(`http://localhost:8700/deleterecord/${id}`).then((d)=>{
toast.success("record delete successfully",{autoClose:500});
  myallemp()
})
}





  
  return (
    <table class="table table-dark mt-2">
      <thead>
        <tr>
          <th scope="col">MongodbId</th>
          <th scope="col">Emp Id</th>
          <th scope="col">FullName</th>
          <th scope="col">Email Id</th>
          <th scope="col">Dob</th>
          <th scope="col">Profile Pic</th>
          <th scope="col">Phone No</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <ToastContainer/>
      <tbody>
{allemp.map((emp,index)=>{
return (
   <tr>
          <th scope="row">{emp._id}</th>
          <td>{++index}</td>
          <td>{emp.fullname}</td>
          <td>{emp.email}</td>
          <td>{emp.dob}</td>
          <td>
            <img src={emp.profile} width={30} height={20} alt='skdjf' />
          </td>
          <td>{emp.phone}</td>
          <td className="d-flex gap-2 ">
            <Link to={'profile/'+emp._id} type="button" class="btn btn-info d-flex align-item-center">
              <CiRead/>
            </Link>
            <Link to={'editUser/'+emp._id} type="button" class="btn btn-warning d-flex align-item-center">
              <GrUpdate/>
            </Link>
            <button type="button" onClick={()=>deleterecord(emp._id)} class="btn btn-danger d-flex align-item-center">
             <MdDeleteForever/>
            </button>
          </td>
        </tr>
)
})}

       
      </tbody>
    </table>
  );
}
