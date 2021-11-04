import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './ManageOrders.css'

const ManageOrder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() =>
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
        , [])
    const handleDelete = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Cancel Booking Request')
                    const remaining = orders.filter(service => service._id !== id);
                    setOrders(remaining);
                }

            })
    }

    const [admin, setAdmin] = useState()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setAdmin(data.password)
        console.log(admin);
        reset()
    }
    return (

        <div className="container my-5 py-5">
            <div className="text-center">
                <h1 className='pb-4 pt-4 fw-bold colored mb-4'>Manage Orders</h1>
            </div>
            {

                user.displayName && <div>

                    <table className="table table-hover">
                        <thead>
                            <tr className="">
                                <th scope="col">Package Name</th>
                                <th scope="col">Your Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Cancel Booking</th>
                            </tr>
                        </thead>
                        {orders.map((service) => (
                            <tbody key={service._id}>
                                <tr className="">
                                    <td>{service.location}</td>
                                    <td>{service.name}</td>
                                    <td>{service.email}</td>
                                    <td><button className="btn btn-success">Pending</button></td>
                                    <td>
                                        {
                                            <button onClick={() => handleDelete(service._id)} className="btn btn-danger">Cancel Booking</button>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            }
        </div>
    );
};

export default ManageOrder;


