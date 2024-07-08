import "../styles/About.css";
import { ContentImage } from "./ContentImage";
import { ContentText } from "./ContentText";
import { Footer } from "./Footer";

export const About = () => {
    return (
        <>
            <div className="container-fluid howToUse pb-5" style={{backgroundColor : "#FFFFFF", paddingTop : "6.6rem"}}>
                <div className="container">
                    <div className="row justify-content-around align-items-center">
                        <ContentImage imgSrc="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <ContentText text1="-- AVAILABLE @GOOGLE AND IOS APP STORE ONLY --" text2="How to use the App ?" />
                    </div>
                </div>
            </div>

            <div className="container-fluid howToUse pb-5" style={{backgroundColor : "#FFFFFF"}}>
                <div className="container">
                    <div className="row d-none d-md-flex justify-content-around align-items-center">
                        <ContentText text1="--SUPPORT IN ANY LANGUAGES--" text2="World class support is available 24/7" />
                        <ContentImage imgSrc="https://images.pexels.com/photos/5239911/pexels-photo-5239911.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                    <div className="row d-flex d-md-none justify-content-around align-items-center">
                        <ContentImage imgSrc="https://images.pexels.com/photos/5239911/pexels-photo-5239911.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <ContentText text1="--SUPPORT IN ANY LANGUAGES--" text2="World class support is available 24/7" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
