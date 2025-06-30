import React from 'react'

export default function UserLoginpage() {
  return (
    <div className='container mt-5 row mx-auto ' >
        <div className='col-md-12 d-flex justify-content-center mb-4'>
            <h1>PLease login</h1>
        </div>
   <form className='col-md-6 mx-auto'>
  <div class="form-group mb-5">
    <label>Email address</label>
    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control"  placeholder="Password"/>
  </div>
  
  <button type="submit" class="btn btn-primary mt-2">Submit</button>
</form>
</div>
  )
}
