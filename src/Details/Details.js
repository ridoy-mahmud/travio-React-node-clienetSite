import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {

    const { serviceId } = useParams();

    const [service, setService] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className="pt-3 container">
            <div className="row mt-5 p-5 mb-5 mt-5" style={{}}>
                <div className="col-lg-6">
                    <img className="image img-fluid" src={service.image} alt="" />
                </div>
                <div className="col-lg-6">
                    <h3 className="pt-4 text-start text-dark " >{service.name}</h3>
                    <h5 className="text-start text-dark mt-3" >Booking Price - ${service.price}</h5>
                    <p className=" text-start text-dark">{service.description}</p>
                    <h5 className="text-start text-dark mt-4">Duration  {service.time} Days</h5>

                    <div className="pt-3">
                        <Link to={`/order/${service._id}`}>
                            <button className="btn btn-outline-danger px-3 mt-3">Book now</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Details;






