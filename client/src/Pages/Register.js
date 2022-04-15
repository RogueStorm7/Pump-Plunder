import React, { useState } from "react";
import { useMutation } from '@apollo/client'
import { navigate, useNavigate } from "react-router-dom"
import { ADD_USER } from '../utils/mutations.js'
import Auth from '../utils/auth'

function Form() {
  function handleForm(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
}


const Register = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' })

  const [addUser, { error }] = useMutation(ADD_USER)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //submit registration

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token)
    } catch (e) 
    {
      console.error(e);
    }
  }

  let navigate = useNavigate();
  return (
    <div>
      <section id="register">
        <button onClick={() => {navigate('/')}} class="btn btn-info header-button">Home</button>
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
                  value={formState.username}
                  onChange={handleChange}
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
                  value={formState.email}
                  aria-describedby="emailHelp"
                  name="email"
                  onChange={handleChange}
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
                  value={formState.password}
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

export default Register;