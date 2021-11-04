import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceForHome from '../ServiceForHome/ServiceForHome';

const ServicesForHome = () => {
    const [services, setServices] = useState([])
    const serviceSlice = services.slice(0, 6)

    useEffect(() =>
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
        , [])

    return (
        <div className="container mb-5">

            <div className="text-center">
                <h1 className='pb-4 fs-1 fw-bold colored mb-5 mt-4'>Our Destinations</h1>
            </div>


            <div className="row g-5">
                {
                    serviceSlice.map((service => <ServiceForHome
                        key={service._id}
                        service={service}>
                    </ServiceForHome>))
                }
            </div>
        </div >
    );
};

export default ServicesForHome;