import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact heading">
            <h1 className="text-center fw-bold   colored ">Contact Us</h1>
            <div className="d-flex justify-content-center">
                <div className="w-50">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your name"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Address</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Address"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Send Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                    </div>
                    <div>
                        <button className=" button-64"><span className="text">Contact</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;