import "../styles/Home.css";
import { HowItWorks } from "./HowItWorks";
import { HomeFirstContent } from "./HomeFirstContent";
import { About } from "./About";
import { Service } from "./Service";
import { Contact } from "./Contact";

export const Home = () => {
    return (
        <>
            <HomeFirstContent />
            <HowItWorks />
            <About /> 
            <Service />
            <Contact />
        </>
    );
}