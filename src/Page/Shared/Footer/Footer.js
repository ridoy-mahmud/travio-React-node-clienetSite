import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h2>Tra<span className="text-danger">Vio</span></h2>
                        <p> “Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson</p>
                        <h6>Go And Explore The World</h6>
                    </div >
                    <div className="col-lg-3">
                        <h4 className='text-center mb-4'>Useful Links</h4>
                        <div className='d-flex'>
                            <div>
                                <ul style={{ listStyle: "none" }}>
                                    <li>About</li>
                                    <li>Team</li>
                                    <li>Gallery</li>
                                    <li>Working Hours</li>
                                    <li>Costs</li>
                                </ul>
                            </div>
                            <div>
                                <ul style={{ listStyle: "none" }}>
                                    <li>Appointment</li>
                                    <li>Before After</li>
                                    <li>Time Table</li>
                                    <li>Depertments</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3" >
                        <h5> Our Newsletter</h5>
                        <br />
                        <p><small>Sign up to our newsletter to get the latest news and offers.</small></p>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search here" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                            <button className="btn btn-danger">Search</button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h6 className="mb-4">Opening Time Shedule</h6>
                        <table class="table">
                            <tbody className="text-white">
                                <tr>
                                    <th scope="row">1</th>
                                    <td><small>Mon - Tue</small></td>
                                    <td><small>08.30-18:30</small></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td><small> Wed- Thu</small></td>
                                    <td><small>08:30 - 18:30</small></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td><small>Friday</small></td>
                                    <td><small>08.30-18:30</small></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td><small>Saturday</small></td>
                                    <td><small>08.30-18:30</small></td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td><small>Sunday</small></td>
                                    <td><small>08.30-18:30</small></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;