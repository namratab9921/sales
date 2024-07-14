import React from 'react'
import Dashboard from './Dashboard'


export default function Admin() {
  return (

    <>
      {/* <Dashboard /> */}
      <div className="adminpage">
        <div className="container">
          <div className="row">
            <div className="col-lg-3"><h3>Products</h3>
              <i class="fas fa-cart-shopping me-3"></i><span>0</span>
              <p><span>12%</span> increase</p>
            </div>
            <div className="col-lg-3"><h3>Sales</h3>
              <i class="fa-solid fa-bag-shopping"></i> <span>0</span>
              <p><span>12%</span> increase</p>
            </div>
            <div className="col-lg-3"><h3>Orders</h3>
              <i class="fa-solid fa-boxes-stacked"></i><span>0</span>
              <p><span>12%</span> increase</p>
            </div>
          </div>
        </div>
        <div className="container charts">
          <div className="row">
            <h2>Chart</h2>
          </div>
        </div>
      </div>
    </>
  )
}
