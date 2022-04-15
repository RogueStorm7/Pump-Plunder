import React from 'react';

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-warning">Pump Plunder</h1>
                            
                            <p className="lead text-center fs-4 mb-5 text-warning">Running on E? Find a cheap fill with Pump Plunder</p>
                            <div className="buttons d-flex justify-content-center">
                <button className="btn btn-warning me-4 round-pill px-4 py-2">
          <i className="fa fa-sign-in me-2"></i>Login</button>
          <button to="/register" className="btn btn-warning me-4 round-pill px-4 py-2">
      <i className="fa fa-user-plus me-2"></i>Register</button>
                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Home;