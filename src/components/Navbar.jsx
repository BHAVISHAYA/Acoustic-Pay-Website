import { useState } from "react";
import "../styles/Navbar.css";
import { WindowNav } from "./WindowNav";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {

    const [toggleIcon, setToggleIcon] = useState(false);
    const toggle = () => {
        setToggleIcon(!toggleIcon);
    }

    return (
        <>
            <nav className="container-fluid fixed-top">
                <div className="row nav">
                    <div className="px-3 col-2">
                        <img src="./public/Logo.svg" alt="" />
                    </div>
                    <div className="col-10 d-none d-md-block">
                        <WindowNav />
                    </div>
                    <div className="col-10 d-md-none d-block mobile text-end">
                        <MobileNav toggleIcon={toggleIcon} onSwitch={toggle} />
                    </div>
                </div>
            </nav>
        </>
    );
}