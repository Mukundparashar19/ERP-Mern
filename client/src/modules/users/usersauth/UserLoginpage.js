// import { useState } from 'react';
import {useForm} from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function UserLoginpage() {
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

// const [login, setlogin] = useState()
const navigate = useNavigate()

const onEnter = async (data)=>{
  console.log('start');  
if(data.email === '' || data.pass === ''){
    toast.warn("username and password is mishmach",{autoClose:1000})
  }else{
    console.log('middel');    
    await axios.post("http://localhost:8700/userlogin",data).then((d)=>{
      const resdata = d.data.status
      console.log('midle midle');
      console.log(d.data.status);
      console.log(d.data.mytoken);
            
      if(resdata===240){
        toast.success('welcome',{autoClose:2000})
        setTimeout(()=>{
           navigate('/dashboard')
        },2000)
        console.log('end');
        
      }
    })
  }
}


// const myloginapi = async()=>{
  
// }





  return (
    <div className='container mt-5 row mx-auto ' >
        <div className='col-md-12 d-flex justify-content-center mb-4'>
            <h1>PLease login</h1>
        </div>
        <ToastContainer/>
   <form onSubmit={handleSubmit(onEnter)} className='col-md-6 mx-auto'>
  <div class="form-group mb-5">
    <label>Email address</label>
    <input type="email" class="form-control" {...register('email',
      {required:true,pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/})}/>
      {errors.email && <text className='text-danger'>Email not correct</text>}
  </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control"{...register('pass',
      {required:true}      
    )}/>
    {errors.pass &&  <text className='text-danger'>pass is missing</text>}
  </div>
  
  <button type="submit" class="btn btn-primary mt-2">Submit</button>
</form>
</div>
  )
}
