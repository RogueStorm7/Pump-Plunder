import React from 'react';
 
const Register = () => {
    return (
        <div>
            <section id="register">
      <div className="container shadow my-5">
        <div className="row justify-content-center">
         
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5 text-warning">Register</h1>

            <div className="mb-3">
                <label htmlFor="inputUsername" className="form-label text-warning">
                  Username
                </label>
                <input
                  type="username"
                  className="form-control"
                  id="inputUsername"
                  name="username"
               
                />
              </div>
           
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label text-warning">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  name="email"
                 
                 
                />
                <div id="emailHelp" className="form-text">
                 
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label text-warning">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
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
 
export default Register;