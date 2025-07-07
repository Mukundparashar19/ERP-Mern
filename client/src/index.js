import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './modules/Application';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserLoginpage from './modules/users/usersauth/UserLoginpage';
import UserRegistrationpage from './modules/users/usersauth/UserRegistrationpage';
import Welcome from './modules/dashboard/Welcome';
import Main from './modules/dashboard/Main'
import Emploieslist from './modules/dashboard/Emploieslist'
import Addproduct from './modules/dashboard/Addproduct';
import Products from './modules/dashboard/Products';
import Profile from './modules/dashboard/profile'
import Useredit from './modules/dashboard/Useredit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Application />}/>
      <Route path='login' element={<UserLoginpage />}/>
      <Route path='regestration' element={<UserRegistrationpage />}/>
      <Route path='dashboard' element={<Welcome/>}>
        <Route path='' element={<Main/>}/>
        <Route path='emploies' element={<Emploieslist/>}/>
        <Route path='newidea' element={<Addproduct/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='emploies/profile/:id' element={<Profile/>}/>
        <Route path='emploies/editUser/:id' element={<Useredit/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


