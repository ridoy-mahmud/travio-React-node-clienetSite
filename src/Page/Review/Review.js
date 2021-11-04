import React from 'react';

const Review = () => {
    return (
        <div className="row justify-content-evenly mx-5 my-5 pb-5">
            <h1 className=" mb-5 text-center colored fw-bold">What our clients Says</h1>
            <div className="col-lg-4 d-flex">
                <div className="my-auto">
                    <img style={{ borderRadius: "50%" }} src="https://livedemo00.template-help.com/landing_61143_v1/images/user-lisa-evans-80x80.jpg" alt="" />
                </div>
                <div className="d-flex flex-column my-auto ms-4 w-75 text-start">
                    <p><small>Disney in December was absolutely delightful! From our 1 day at Magic Kingdom 2 days at Animal Kingdom, our family was filled with excitement and magical memories.</small></p>
                    <h6 className="fw-bold">- Lisa Evans</h6>
                </div>
            </div>
            <div className="col-lg-4 d-flex">
                <div className="my-auto">
                    <img style={{ borderRadius: "50%" }} src="https://livedemo00.template-help.com/landing_61143_v1/images/user-nicholas-lane-80x80.jpg" alt="" />
                </div>
                <div className="d-flex flex-column my-auto ms-4 w-75 text-start">
                    <p><small>You were an excellent Travel Agency for us! You considered our unique needs while planning our itinerary. Every suggestion you made was excellent!</small></p>
                    <h6 className="fw-bold">- Nicholas Lane</h6>
                </div>
            </div>
            <div className="col-lg-4 d-flex">
                <div className="my-auto">
                    <img style={{ borderRadius: "50%" }} src="https://livedemo00.template-help.com/landing_61143_v1/images/user-ethan-dean-80x80.jpg" alt="" />
                </div>
                <div className="d-flex flex-column my-auto ms-4 w-75 text-start">
                    <p><small>I’m sending you a sincere "thank you" for all of your assistance during my recent trip to Colorado. It was invaluable to me and I realize and appreciate it greatly.</small></p>
                    <h6 className="fw-bold">- Ethan Dean</h6>
                </div>
            </div>
        </div >
    );
};

export default Review;