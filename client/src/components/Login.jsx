import React from 'react';
 
const Login = () => {
    return (
        <div>
            <section id="login">
      <div className="container shadow my-5">
        <div className="row justify-content-center">
         
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5 text-warning">LOGIN</h1>
           
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label text-warning">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                 
                 
                />
                <div id="emailHelp" className="form-text">
                 
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label text-warning">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
               
                />
              </div>
             
              <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">
                Login
              </button>
           
          </div>
        </div>
      </div>
      </section>
    </div>
    );
}
 
export default Login;