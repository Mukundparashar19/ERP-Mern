import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function UserRegistrationpage() {
  const [user, setuser] = useState({
    fullname: "",
    password: "",
    phone: "",
    dob: "",
    pass: "",
    profile: "",
    email: "",
  });

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



  const register = async(e) => {
    e.preventDefault()
    const {fullname,email,phone,pass,dob,profile} = user
    if(fullname === '' || pass === '' || email === '' || phone === '' || dob === '' || profile === ''){
      toast.error('incomplete form',{position:'top-center',autoClose:1000})

    }else {  
    const postdata = await fetch('http://localhost:8700/registorpage',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        fullname,email,phone,pass,dob,profile
      })
    })
    const data = await postdata.json() // this is response
    // console.log(data.status);
    if(data.status === 255){
      toast.success('successfully registor user',{position:'top-center',autoClose:1000})
      }
       if (data.status === 355){
              toast.error('incomplete form',{position:'top-center',autoClose:1000})
      }
  }
    
  };



  return (
    <div className="row">
      <div className="col-md-12 d-flex justify-content-center mb-5">
        <h1>register here</h1>
      </div>
 <ToastContainer />
      <div className="col-md-8 mx-auto">
        <form>
          <div class="row mb-3">
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
              onClick={register}
              type="submit"
              class="btn btn-primary mt-2"
            >
              Sign in
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
