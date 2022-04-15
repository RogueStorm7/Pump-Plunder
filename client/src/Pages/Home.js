import React from "react";
import { useNavigate } from "react-router-dom"
import Map from './Map';

function Form() {
  function handleForm(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
}
function Home() {
    let navigate = useNavigate();
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-warning">Pump Plunder</h1>
                            
                            <p className="lead text-center fs-4 mb-5 text-warning">Don't Get Robbed at the Pump</p>
                            <div className="buttons d-flex justify-content-center">
                <button onClick={() => {navigate('/login')}} className="btn btn-warning me-4 round-pill px-4 py-2">
          <i className="fa fa-sign-in me-2"></i>Login</button>
          <button onClick={() => {navigate('/register')}} className="btn btn-warning me-4 round-pill px-4 py-2">
      <i className="fa fa-user-plus me-2"></i>Register</button>
                </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sectionone">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                        <div className="lead text-center fs-4 mb-5 text-warning"></div>
                            <Map />
                            <p className="lead text-center fs-4 mb-5 text-warning font-weight-bold">Find Affordable Black Gold</p>
                            <div className="buttons d-flex justify-content-center">
                            <button className="btn btn-light me-4 round-pill px-4 py-2 font-weight-bold">Review a Gas Station</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div>
            <section id="userreview">
      <div className="container shadow my-5">
        <div className="row justify-content-center">
         
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5 text-warning">Leave Us a Review</h1>

            <div className="mb-3">
                <label htmlFor="inputName" className="form-label text-warning">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="inputName"
                  name="name"
               
                />
              </div>
           
              <div className="mb-3">
                <label htmlFor="inputAddress" className="form-label text-warning">
                  Station Address
                </label>
                <input
                  type="address"
                  className="form-control"
                  id="inputAddress"
                  aria-describedby="addressHelp"
                  name="address"
                 
                 
                />
                <div id="addressHelp" className="form-text">
                 
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputReview" className="form-label text-warning">
                  Review
                </label>
                <textarea
                  type="review"
                  className="form-control"
                  id="inputReview"
                  name="review"
               
                />
              </div>
              <form onSubmit={Form}>
              <button type="submit" className="btn btn-primary w-100 mt-4 rounded-pill">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      </section>
    </div>

            <section id="sectiontwo">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0"></h3>
                            <h1 className="display-6 text-center mb-4 text-warning">User Reviews</h1>
                            <hr className="w-25 mx-auto"/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                        <div className="card p-3 bg-black">
  
  <div className="card-body text-center text-warning">
      <i className="fa fa-car fa-4x mb-4 text-primary"></i>
    <h5 className="card-title mb-3 fs-4 fw-bold">Patric A.</h5>
    <p className="card-text lead">The man behind the counter was very nice. However the soda I bought tastes just like whatever air freshener they use in the store. At least I hope that was your freshener. Gross.</p>
      
  </div>
</div>
                        </div>
                        <div className="col-md-4">
                        <div className="card p-3 bg-black">
  
  <div className="card-body text-center text-warning">
      <i className="fa fa-money fa-4x mb-4 text-primary"></i>
    <h5 className="card-title mb-3 fs-4 fw-bold">Georgie H.</h5>
    <p className="card-text lead">The 2 men that work in there during the day are very nice and helpful. I love going there seeing them . They are funny and I need a smile and a good laugh once in awhile. They are always in a good mood and showing us new things that have come in.</p>
  </div>
</div>
                        </div>
                        <div className="col-md-4">
                        <div className="card p-3 bg-black">
  
  <div className="card-body text-center text-warning">
      <i className="fa fa-area-chart fa-4x mb-4 text-primary"></i>
    <h5 className="card-title mb-3 fs-4 fw-bold">Lucy T.</h5>
    <p className="card-text lead">Slowest pumps ever must be because they have no automatic shut-off on the pump!? Wasted gas and money because it took so long to fill that I sat in my car only to start hearing the sound of water pouring. Turns out the pump over flowed. Dude at register didn't even care like he was use to it!</p>
  </div>
</div>
                        </div>
                        <div className="col-md-4">
                        <div className="card p-3 bg-black">
  
  <div className="card-body text-center text-warning">
      <i className="fa fa-car fa-4x mb-4 text-primary"></i>
    <h5 className="card-title mb-3 fs-4 fw-bold">Alex R.</h5>
    <p className="card-text lead">Only got gas here the one time. Didn't have any problems. Didn't notice anything extraordinary.</p>
  </div>
</div>
                        </div>
                        <div className="col-md-4">
                        <div className="card p-3 bg-black">
  
  <div className="card-body text-center text-warning">
      <i className="fa fa-car fa-4x mb-4 text-primary"></i>
    <h5 className="card-title mb-3 fs-4 fw-bold">Chris F.</h5>
    <p className="card-text lead">Clean, well stocked good hot food items!</p>
  </div>
</div>
                        </div>
                        <div className="col-md-4">
                        <div className="card p-3 bg-black">
  
  <div className="card-body text-center text-warning">
      <i className="fa fa-car fa-4x mb-4 text-primary"></i>
    <h5 className="card-title mb-3 fs-4 fw-bold">Wolfgang H.</h5>
    <p className="card-text lead">I grabbed a bag of pop rocks when I got into the car it was filled with ants so this should be a 0/5 review</p>
  </div>
</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}

export default Home;