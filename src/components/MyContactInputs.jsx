import { useState } from 'react';

export const MyContactInputs = () => {
    
    const [userData, setUserData] = useState({
        firstName : "",
        lastName : "",
        phone : "",
        email : "",
        address : "",
        message : "",
    });

    const postUserData = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserData({...userData, [name] : value});
    }

    //* Connect With Firebase 
    const submitData = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, address, message } = userData;
        if(firstName && lastName && phone && email && address && message) {
            const res = fetch(
                "https://acoustic-pay-default-rtdb.firebaseio.com/userDataRecord.json",
                {
                    method : "POST", 
                    headers : {
                        "content-Type" : "application.json",
                    },
                    body : JSON.stringify({
                        fName : firstName, 
                        lName : lastName, 
                        phone : phone, 
                        email : email, 
                        add : address, 
                        msg : message,
                    }),
                }
            );
            if(res) {
                setUserData({
                    firstName : "",
                    lastName : "",
                    phone : "",
                    email : "",
                    address : "",
                    message : "",
                })
                alert("Data Stored Successfully");
            }
            else {
                alert("Please fill the data");
            }
        }
        else {
            alert("Please fill the data");
        }
    }

    return (
        <>
            <form method='POST'>
                <div className="row">
                    <div className="col-md-6" style={{padding : "20px"}}>
                        <input className='form-control' type="text" placeholder='First Name' autoComplete='off' name="firstName" id="" value={userData.firstName} onChange={postUserData} />
                    </div>
                    <div className="col-md-6" style={{padding : "20px"}}>
                        <input className='form-control' type="text" placeholder='Last Name' autoComplete='off' name="lastName" id="" value={userData.lastName} onChange={postUserData} />
                    </div>
                    <div className="col-md-6" style={{padding : "20px"}}>
                        <input className='form-control' type="tel" placeholder='Phone Number' autoComplete='off' name="phone" id="" value={userData.phone} onChange={postUserData} />
                    </div>
                    <div className="col-md-6" style={{padding : "20px"}}>
                        <input className='form-control' type="email" placeholder='Your Email' autoComplete='off' name="email" id="" value={userData.email} onChange={postUserData} />
                    </div>
                    <div className="col-12" style={{padding : "20px"}}>
                        <input className='form-control' type="text" placeholder='Add Address' autoComplete='off' name="address" id="" value={userData.address} onChange={postUserData} />
                    </div>
                    <div className="col-12" style={{padding : "20px"}}>
                        <input className='form-control' type="text" placeholder='Enter Your Message' autoComplete='off' name="message" id="" value={userData.message} onChange={postUserData} />
                    </div>
                    <div className='col-12' style={{padding : "20px"}}>
                        <span>
                        <input className='form-check-input' type="checkbox" id="" checked />
                        <p className='pt-2'>I agree that the Acoustic Pay may contact me at the email address or phone number above</p>
                        </span>
                    </div>
                    <div className="col-12 formBtn" style={{padding : "20px"}}>
                        <button 
                            onClick={submitData}
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
