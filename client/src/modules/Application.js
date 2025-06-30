import React from 'react'
import { FaBeer } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Application() {
  return (
        <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">✨ MyApp</a>
        </div>
      </nav>

      {/* Banner / Hero Section */}
      <div className="bg-info text-white py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to MyApp</h1>
          <p className="lead">Your journey to awesomeness starts here 🚀</p>
        </div>
      </div>

      {/* Dirxt Card */}
      <div className='d-flex'>
      <div className="container my-5 d-flex justify-content-center">
        <div className="card shadow-lg border-0" style={{ maxWidth: '600px', borderRadius: '1.5rem' }}>
          <div className="card-body text-center p-5">
            <h2 className="mb-4">👋 Hello There!</h2>
            <p className="mb-4 fs-5">
              We're thrilled to have you. Let's explore, learn, and build something amazing together.
            </p>
            <Link to='/login' className="btn btn-lg btn-success px-4 rounded-pill">
             Log In
            </Link>
          </div>
        </div>
      </div>

       <div className="container my-5 d-flex justify-content-center">
        <div className="card shadow-lg border-0" style={{ maxWidth: '600px', borderRadius: '1.5rem' }}>
          <div className="card-body text-center p-5">
            <h2 className="mb-4">👋 Hello There!</h2>
            <p className="mb-4 fs-5">
              We're thrilled to have you. Let's explore, learn, and build something amazing together.
            </p>
            <Link to='/regestration' className="btn btn-lg btn-success px-4 rounded-pill">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <small>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</small>
        </div>
      </footer>
    </>
  )
}
