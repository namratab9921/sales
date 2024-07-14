import React from 'react';
import './sales.css';
import { Link, Outlet } from 'react-router-dom';


function Dashboard() {
  return (
    <div>
      {/* <!--Main Navigation--> */}
      <header>
        {/* <!-- Sidebar --> */}
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <Link to={"/admin"} className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span></Link>
              <Link to={"/products"} className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-chart-area fa-fw me-3"></i><span>Products</span></Link>
              <Link to={"/sales"} className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></Link>
              <Link to={"/expenses"} className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-chart-bar fa-fw me-3"></i><span>Sale Expenses</span></Link>
              {/* <Link to={"/users"} className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-users fa-fw me-3"></i><span>Users</span></Link> */}
              <Link to={""} className='list-group-item list-group-item-action py-2 ripple'>
                <i className="fa-solid fa-arrow-right-from-bracket me-3"></i><span>Logout</span>
              </Link>
            </div>
          </div>
        </nav>
        {/* <!-- Sidebar --> */}

        {/* <!-- Navbar --> */}
        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid">
            {/* <!-- Toggle button --> */}
            <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>

            {/* <!-- Brand --> */}
            <a className="navbar-brand" href="#">
              <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="25" alt="MDB Logo"
                loading="lazy" />
            </a>


            {/* <!-- Right links --> */}
            <ul className="navbar-nav ms-auto d-flex flex-row">
              {/* <!-- Notification dropdown --> */}
              <li className="nav-item dropdown">
                <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
                  role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-bell"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="#">Some news</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Another news</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>

              {/* <!-- Icon --> */}
              <li className="nav-item">
                <a className="nav-link me-3 me-lg-0" href="#">
                  <i className="fas fa-fill-drip"></i>
                </a>
              </li>
              {/* <!-- Icon --> */}
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="#">
                  <i className="fab fa-github"></i>
                </a>
              </li>

              {/* <!-- Icon dropdown --> */}
              <li className="nav-item dropdown">
                <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdown"
                  role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                  <i className="united kingdom flag m-0"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#"><i className="united kingdom flag"></i>English
                      <i className="fa fa-check text-success ms-2"></i></a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-poland flag"></i>Polski</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-china flag"></i>中文</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-japan flag"></i>日本語</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-germany flag"></i>Deutsch</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-france flag"></i>Français</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-spain flag"></i>Español</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-russia flag"></i>Русский</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"><i className="flag-portugal flag"></i>Português</a>
                  </li>
                </ul>
              </li>

              {/* <!-- Avatar --> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
                  id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" className="rounded-circle"
                    height="22" alt="Avatar" loading="lazy" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="#">My profile</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Settings</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}
      </header>
      {/* <!--Main Navigation--> */}

      {/* <!--Main layout--> */}
      <main style={{ marginTop: "60px" }}>
        <div className="container pt-4">
          <Outlet />

        </div>
      </main>
      {/* <!--Main layout--> */}
    </div>
  )
}

export default Dashboard;
