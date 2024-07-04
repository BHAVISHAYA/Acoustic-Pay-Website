import React from 'react';
import "../styles/HowItWorks.css";
import workAPI from '../API/workAPI';
import { Instructions } from './Instructions';

export const HowItWorks = () => {
    return (
        <div className="py-5 container-fluid workContainer" style={{backgroundColor : "#FFFFFF"}}>
            <div className="container">
                <div className="row text-center justify-content-around">
                    <h1 className='pt-5 pb-5 mb-3' >How does It Works</h1>
                    {
                        workAPI.map((currEle) => {
                            return <>
                                <Instructions 
                                    key={currEle.id} 
                                    logo={currEle.logo} 
                                    title={currEle.title} 
                                    info={currEle.info} 
                                />
                            </>;
                        })
                    }
                </div>
            </div>
        </div>
    )
}
