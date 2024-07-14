import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand mb-0 h1">Sales Products...</a>
          <form className="d-flex">
            <h1>{localStorage.getItem("name")}</h1>
            <Link to={'/'}> <button className='btn btn-success me-5 fs-5'>Logout</button></Link>
          </form>
        </div>
      </nav>
    </div>
  )
}