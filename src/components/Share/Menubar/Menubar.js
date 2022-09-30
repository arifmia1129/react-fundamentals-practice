import React from 'react';
import "./Menubar.css";

const Menubar = ({ count }) => {
    return (
        <div>
            <div className="row mt-3">
                <div className="col-md-4">
                    <h5>logo</h5>
                </div>
                <div className="col-md-8">
                    <div className="menu-container d-flex justify-content-end me-5">
                        <li className='mx-5'>Home</li>
                        <li className='mx-5'>Contact</li>
                        <li className='mx-5'>Cart <sup>{count}</sup></li>
                        <li className='mx-5'>Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;