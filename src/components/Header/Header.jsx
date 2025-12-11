import NavButton from "./NavButton.jsx"
import Logo from "../Common/Logo.jsx"
import { useState } from "react"

const Header = () => {
    let [active, setActive] = useState(true);

    function handleClick () {
        setActive(state => !state);
        window.scrollTo(0, 0);
    }

    return (
        <header className="top-10 flex w-10/12 justify-between bg-red-800 text-white px-10 h-20 rounded-xl z-10 fixed" style={{marginLeft: "50%", transform: "translateX(-50%)"}}>
            <Logo />
            <div className={`burger cursor-pointer flex flex-col gap-1 justify-center lg:hidden ${active ? "" : "active"}`} onClick={() => setActive(!active)}>
                    <div className="bg-white w-10 h-1 rounded-md "></div>
                    <div className="bg-white w-10 h-1 rounded-md"></div>
                    <div className="bg-white w-10 h-1 rounded-md"></div>
            </div>
            <nav className={`lg:h-full  ${active ? "active" : ""}`} onClick={ handleClick }>
                
                <NavButton name="Home" link="/" />
                <NavButton name="About Us" link="/about" />
                <NavButton name="Services" link="/services" />
                <NavButton name="Contact Us" link="/contact" />
            </nav>
        </header>
    )
}

export default Header;