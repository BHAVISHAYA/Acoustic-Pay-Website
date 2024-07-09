import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home";
import { Service } from "./components/Service";
import { Contact } from './components/Contact';
import { About } from "./components/About";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Error } from "./components/Error";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes> 
                    <Route exact path="/" element={<Home />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;