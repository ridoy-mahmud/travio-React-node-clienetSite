import React from 'react';
import { Link } from 'react-router-dom';
import "./ServiceForHome.css"
const ServiceForHome = ({ service }) => {

    const { _id, image, name, description, price } = service;
    console.log(service)

    return (

        <div className="col-lg-4 col-sm-12 col-12 gx-5 ">
            <div class="card service">
                <div className="service-img">
                    <img className="card-img-top h-100 image-style" src={image} alt="" />
                </div>
                <div class="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title text-dark fw-bold">{name}</h5>
                        <h5 className="card-text text-dark fw-bold">${price}</h5>
                    </div>
                    <p className="card-text text-dark">{description}</p>
                    {<Link className="text-decoration-none" to={`/details/${_id}`}>
                        <button className="button-64 mt-4"><span className="text">Book now</span> </button>
                    </Link>}
                </div>
            </div>
        </div >

    );
};

export default ServiceForHome;

