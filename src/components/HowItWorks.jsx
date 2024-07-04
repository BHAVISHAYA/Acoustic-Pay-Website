import React from 'react';
import "../styles/HowItWorks.css";
import workAPI from '../API/workAPI';
import { CurrencyRubleRounded } from '@mui/icons-material';

export const HowItWorks = () => {
    return (
        <div className="py-5 container-fluid workContainer">
            <div className="container">
                <div className="row text-center justify-content-around">
                    <h1 className='pt-5 pb-5 mb-3' >How does It Works</h1>
                    {
                        workAPI.map((currEle) => {
                            return <>
                                <div className="col-md-3 pb-3">
                                    <i className={ currEle.logo }></i>
                                    <h2 className='py-3'> { currEle.title } </h2>
                                    <p> { currEle.info } </p>
                                </div>
                            </>;
                        })
                    }
                </div>
            </div>
        </div>
    )
}
