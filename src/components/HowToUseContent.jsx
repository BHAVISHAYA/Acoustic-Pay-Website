import React, { useState } from 'react';
import "../styles/HowToUseTheApp.css";
import howToUse from '../API/howToUse';

export const HowToUseContent = () => {
    return (
        <>
            {
                howToUse.map((currEle) => {
                    return <>
                        <div className="row pb-4 ourServices align-items-center justify-content-start">
                            <div className="col-md-12 pb-4 text-md-start">
                                <span className='num' > { currEle.id } </span>
                                <br className='d-block d-md-none' />
                                <span className='text'> { currEle.title } </span>
                            </div>
                            <div className="col-md-12">
                                <p className='para'> { currEle.info } </p>
                            </div> 
                        </div>
                    </>
                })
            }
        </>
    )
}
