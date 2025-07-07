import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate, useParams} from 'react-router-dom'
import axios from "axios";

export default function Useredit() {

    const navigarion = useNavigate()
    const {id} = useParams()

  const [user, setuser] = useState({
    fullname: "",
    password: "",
    phone: "",
    dob: "",
    pass: "",
    profile: "",
    email: "",
  });
// get then update "get"
const getUserProfile = async ()=>{
  await axios.get(`http://localhost:8700/singleuserrecoed/${id}`).then((d)=>{
     setuser(d.data.mydata)
    })
}

useEffect(()=>{
    getUserProfile()
},[])

  const updatefield = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setuser((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };


//  get and update 'update' 
  const Udregister = async(e) => {
    e.preventDefault()
    const {fullname,email,phone,pass,dob,profile} = user
    if(fullname === '' || pass === '' || email === '' || phone === '' || dob === '' || profile === ''){
      toast.error('incomplete form',{position:'top-center',autoClose:1000})

    }else {  
    const uddata = await fetch(`http://localhost:8700/userupdate/${id}`,{
      method:'PATCH',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        fullname,email,phone,pass,dob,profile
      })
    })
    const data = await uddata.json() // this is response
     if(data.status === 251){
      toast.success('successfully registor user',{position:'top-center',autoClose:1000})
      setTimeout(()=>{
        navigarion('/dashboard/emploies')
      })
      }
       if (data.status === 355){
              toast.error('incomplete form',{position:'top-center',autoClose:1000})
      }
  }
    
  };



  return (
    <div className="row">
      <div className="col-md-12 d-flex justify-content-center mb-5 ">
        <h1 className="text-warning">Update here</h1>
      </div>
 <ToastContainer />
      <div className="col-md-8 mx-auto">
        <form className="text-warning">
          <div class="row mb-3 ">
            <div class="form-group col-md-6">
              <label>Full name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                value={user.fullname}
                name="fullname"
                onInput={updatefield}
              />
            </div>
            <div class="form-group col-md-6">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                value={user.pass}
                name="pass"
                onInput={updatefield}
              />
            </div>
          </div>

          <div class="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              value={user.email}
              name="email"
              onInput={updatefield}
            />
          </div>

          <div class="form-group mb-3">
            <label>Phone number</label>
            <input
              type="text"
              class="form-control"
              placeholder="Phone no"
              value={user.phone}
              name="phone"
              onInput={updatefield}
            />
          </div>

          <div class="row mb-3">
            <div class="form-group col-md-6">
              <label>Date of Birth</label>
              <input
                type="date"
                class="form-control"
                value={user.dob}
                name="dob"
                onInput={updatefield}
              />
            </div>

            <div class="form-group col-md-6">
              <label>Profile</label>
              <input
                type="text"
                placeholder="URL only"
                class="form-control"
                value={user.profile}
                name="profile"
                onInput={updatefield}
              />
            </div>
          </div>

          <div className="w-100">
            <button
              onClick={Udregister}
              type="submit"
              class="btn btn-primary mt-2"
            >
              Update
            </button>
            <button type="reset" class="btn btn-danger mt-2 float-end">
              Cancil
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
