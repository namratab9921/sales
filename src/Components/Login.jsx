import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Login() {

  let navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  function handleChange(e) {
    e.preventDefault();
    setData({ ...data, [e.target.id]: e.target.value })
  };

  function handelSubmit(e) {
    e.preventDefault();
    // console.log(data);

    if (data.username === "admin" && data.password === "admin") {

      setData({
        username: "",
        password: ""
      })

      let credential = JSON.stringify(data)
      localStorage.setItem("data", credential)
      navigate("/admin")
      window.location.reload();

    } else {
      alert("Invalid Credential");

    }
  }



  return (
    <div className='login'>
      <div className="container">
        <div className="row align-self-center">
          <div className="col-lg-6 align-self-center">
            <h1>The best offer<br></br><span>for your business</span></h1>
          </div>
          <div className="col-lg-6 align-self-center">
            <form>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="email" className="form-control" value={data.username} onChange={(e) => handleChange(e)} id="username" aria-describedby="emailHelp" />

              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input value={data.password} onChange={(e) => handleChange(e)} type="password" id="password" className="form-control" />
              </div>

              <button type="submit" onClick={(e) => handelSubmit(e)} className="btn btn-primary">Sign In</button>

              <div className="text-center"><p>or sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1"><i className="fab fa-facebook-f"></i></button>
                <button type="button" className="btn btn-link btn-floating mx-1"><i className="fab fa-google"></i></button>
                <button type="button" className="btn btn-link btn-floating mx-1"><i className="fab fa-twitter"></i></button>
                <button type="button" className="btn btn-link btn-floating mx-1"><i className="fab fa-github"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
