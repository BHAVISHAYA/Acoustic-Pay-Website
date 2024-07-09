import "../styles/Contact.css";
import { MyContactInputs } from './MyContactInputs';

export const Contact = () => {
    return (
        <>
            <div className="container-fluid contactPage" style={{backgroundColor:"#FFFFFF", paddingTop : "8rem", height : "100%"}}>
                <div className="row justify-content-evenly">
                    <div className="col-md-4 col-10">
                        <h1 className='pb-4'>Contact With Our Sales Team</h1>
                        <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, repellendus.</p>
                        <figure className='pb-4'>
                            <img className='img-fluid' src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="contactImg" />
                        </figure>
                    </div>
                    <div className="col-md-6 px-4">
                        <MyContactInputs />
                    </div>
                </div>
            </div>
        </>
    )
}