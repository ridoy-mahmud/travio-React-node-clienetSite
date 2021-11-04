import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import './Order.css'

const Order = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Tour service Book Now Successfully')
                    reset();
                }
            })
    }

    const { serviceId } = useParams();

    const [service, setService] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    return (
        <div className="container">

            <div className="row mt-5 p-5 mb-5">

                <div className="col-lg-6">
                    <img className="image img-fluid" src={service.image} alt="" />
                    <h3 className="pt-2 text-start text-dark mb-4" >{service.name}</h3>
                    <h5 className="text-dark">Booking Price - ${service.price}</h5>
                    <p className="text-dark">{service.description}</p>

                </div>
                <div className="col-lg-6">
                    <div className="form-style w-75 mx-auto pb-4">
                        <div className="text-center">
                            <h1 className='pb-4 pt-4 text-dark'>Book Your Order</h1>
                        </div>
                        <form className="addService" onSubmit={handleSubmit(onSubmit)}>

                            <input className="form-control w-75" defaultValue={user.name} {...register("location", { required: true })} placeholder="Service Name" /> <br></br>

                            <input className="form-control  w-75" defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Your Name" /> <br></br>

                            <input className="form-control  w-75" type="email" defaultValue={user.email} {...register("email", { required: true })} placeholder="Your Email" /> <br></br>

                            <input className="form-control  w-75" {...register("address", { required: true })} placeholder="Your Address" /> <br></br>

                            <input className="form-control  w-75" {...register("number", { required: true })} placeholder="Mobile Number" /> <br></br>

                            <input className="form-control  w-75" {...register("date", { required: true })} placeholder="Date" /> <br></br>


                            <input type="submit" className="btn btn-outline-danger w-25 " />

                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Order;