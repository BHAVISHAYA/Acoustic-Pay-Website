import React from 'react';
import "../styles/Error.css";
import { NavLink } from 'react-router-dom';

export const Error = () => {


    return (
        <>
            <div className="container-fluid notFound">
                <div className="row">
                    <h1>404</h1>
                    <h2>WE ARE SORRY, PAGE NOT FOUND !</h2>
                    <p>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
                    <span className='pt-4'>
                    <NavLink to="/" className="styleNav">Back To Home</NavLink>
                    </span>
                </div>
            </div>
        </>
    )
}
