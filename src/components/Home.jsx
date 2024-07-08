import "../styles/Home.css";
import { HowItWorks } from "./HowItWorks";
import { HomeFirstContent } from "./HomeFirstContent";
import { HowToUseTheApp } from "./HowToUseTheApp";
import { HowToSendMoney } from "./HowToSendMoney";
import { Contact } from "./Contact";

export const Home = () => {
    return (
        <>
            <HomeFirstContent />
            <HowItWorks />
            <HowToUseTheApp /> 
            <HowToSendMoney />
            <Contact />
        </>
    );
}