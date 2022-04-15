import React from 'react';
import Map from './Map';

const sectionOne = () => {
    return (
        <div>
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
        </div>
    );
}
export default sectionOne;