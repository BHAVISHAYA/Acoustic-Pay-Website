import "../styles/Home.css";
import { HowItWorks } from "./HowItWorks";
import { HomeFirstContent } from "./HomeFirstContent";
import { HowToUseTheApp } from "./HowToUseTheApp";

export const Home = () => {
    return (
        <>
            <HomeFirstContent />
            <HowItWorks />
            <HowToUseTheApp />  
        </>
    );
}