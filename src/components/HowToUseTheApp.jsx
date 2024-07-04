import React from 'react'
import "../styles/HowToUseTheApp.css";
import howToUse from '../API/howToUse';

export const HowToUseTheApp = () => {
    return (
        <>
            <div className="container-fluid howToUse" style={{backgroundColor : "#FFFFFF"}}>
                <div className="container">
                    <div className="row justify-content-around align-items-center">
                        <div className="col-md-4 text-center pt-5 pb-5">
                            <img className='img-fluid' src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                        <div className="col-md-6 px-4">
                            <h5 className='pb-4'> -- AVAILABLE @GOOGLE AND IOS APP STORE ONLY -- </h5>
                            <h1 className='pb-5'>How to use the App ?</h1>

                            {
                                howToUse.map((currELe) => {
                                    return <>
                                        <div className="row pb-4 ourServices align-items-center justify-content-start">
                                            <div className="col-md-12 pb-4 text-md-start">
                                                <span className='num' > { currELe.id } </span>
                                                <br className='d-block d-md-none' />
                                                <span className='text'> { currELe.title } </span>
                                            </div>
                                            <div className="col-md-12">
                                                <p className='para'> { currELe.info } </p>
                                            </div>
                                        </div>
                                    </>
                                })
                            }



                            <button className='mx-4'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
