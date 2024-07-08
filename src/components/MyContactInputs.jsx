import React from 'react';

export const MyContactInputs = () => {
    return (
        <>
            <form method='POST'>
                <div className="row">
                    <div className="col-md-6" style={{padding : "20px"}}>
                        <input className='form-control' type="text" placeholder='First Name' autoComplete='off' name="" id="" />
                    </div>
                    <div className="col-md-6" style={{padding : "20px"}}>
                        <input className='form-control' type="text" placeholder='Last Name' autoComplete='off' name="" id="" />
                    </div>
                    <div className="col-md-6" style={{padding : "20px"}}>
                        <input className='form-control' type="tel" placeholder='Phone Number' autoComplete='off' name="" id="" />
                    </div>
                    <div className="col-md-6" style={{padding : "20px"}}>
                        <input className='form-control' type="email" placeholder='Your Email' autoComplete='off' name="" id="" />
                    </div>
                    <div className="col-12" style={{padding : "20px"}}>
                        <input className='form-control' type="text" placeholder='Add Address' autoComplete='off' name="" id="" />
                    </div>
                    <div className="col-12" style={{padding : "20px"}}>
                        <input className='form-control' type="text" placeholder='Enter Your Message' autoComplete='off' name="" id="" />
                    </div>
                    <div className='col-12' style={{padding : "20px"}}>
                        <span>
                        <input className='form-check-input' type="checkbox" value="" id="" />
                        <p className='pt-2'>I agree that the Acoustic Pay may contact me at the email address or phone number above</p>
                        </span>
                    </div>
                    <div className="col-12 formBtn" style={{padding : "20px"}}>
                        <button 
                                style={{
                                    backgroundColor : "#5ECEAD", 
                                    border : "none", 
                                    color : "#1B2430", 
                                    width : "100%", 
                                    padding : "10px",
                                    fontSize : "1.1rem"
                                }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
