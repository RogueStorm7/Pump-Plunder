// import { model, models } from "mongoose";
import React, {useState} from "react";
import { navigate, useNavigate } from "react-router-dom"
import {useMutation} from "@apollo/client"
import { LOGIN_USER } from '../utils/mutations.js'
import Auth from '../utils/auth.js'
// import {Login} from './source/models/login.js'

function Login() {

   const [formState, setFormState] = useState({ email: '', password: ''})

  const [login, { error }] = useMutation(LOGIN_USER)
// update state based on form input changes

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //submit registration

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: {...formState}
      });

      Auth.login(data.login.token)
    } catch (e)
    {
      console.error(e)
    }

    //clear form variables
   setFormState({
     email: '',
     password: '',
   }); 
  }

    let navigate = useNavigate();
    
    return (
        <div>
            <section id="login">
            <button onClick={() => {navigate('/')}} class="btn btn-info header-button">Home</button>
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
                  value={formState.email}
                  onChange={handleChange}
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
                  value={formState.password}
                  name="password"
                  onChange={handleChange}
               
                />
              </div>
             
              <form onSubmit={handleSubmit}>
              <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">
                Login
              </button>
            </form>

            {error && <div>Login failed</div>}           
          </div>
        </div>
      </div>
      </section>
    </div>
    )
}



export default Login;