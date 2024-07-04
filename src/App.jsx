import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home";
import { Service } from "./components/Service";
import { Contact } from './components/Contact';
import { About } from "./components/About";
import { Navbar } from './components/Navbar';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes> 
            </BrowserRouter>
        </>
    );
}

export default App;