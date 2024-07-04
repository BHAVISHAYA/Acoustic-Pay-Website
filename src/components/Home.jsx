import "../styles/Home.css";
import { HowItWorks } from "./HowItWorks";

export const Home = () => {
    return (
        <>
            <div className="container-fluid home" style={{backgroundColor: "#EFF5FB"}}>
                <div className="row">
                    <div className="px-5 order-2 order-md-1 col-12 col-md-6 d-flex flex-column align-items-start justify-content-start justify-content-md-center">
                        <h1>
                            Online payment made
                            <br />
                            easy for you.
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut minus reprehenderit doloribus mollitia? Fuga error perferendis hic nostrum debitis laudantium repudiandae. Repellendus praesentium placeat doloremque aliquid quam quidem sequi nesciunt odit, quasi alias? Quisquam, rerum, quo magnam ratione et esse corrupti sapiente, minima dolorum aliquam quos vitae similique. Voluptates illo ducimus hic dolorem harum iure officiis quaerat nam tenetur, cumque, officia mollitia? Suscipit blanditiis, amet nobis corporis, repudiandae perferendis voluptates nostrum dolorum numquam, ea quasi! Enim natus ab ratione ut sapiente nisi sed magnam laboriosam temporibus quaerat voluptates, nam maiores? Beatae reiciendis totam voluptatem quae expedita repellat veritatis est modi!
                        </p>
                        <h3> Get early access for you </h3>
                        <div className="input-group">
                            <input type="text" className="my-4 rounded-pill w-100 me-3 form-control-text" placeholder="Enter Your Email..." />
                            <button> get It Now </button>
                        </div>
                    </div>
                    <div className="pt-4 px-md-5 col-12 col-md-6 order-1 order-md-2 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                </div>
            </div> 
            <HowItWorks />  
        </>
    );
}