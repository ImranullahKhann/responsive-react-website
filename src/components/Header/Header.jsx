import NavButton from "./NavButton.jsx"
import Logo from "../Common/Logo.jsx"

const Header = () => {
    return (
        <header className="top-10 flex w-10/12 justify-between bg-red-800 text-white px-10 h-20 rounded-xl z-10 fixed" style={{marginLeft: "50%", transform: "translateX(-50%)"}}>
            <Logo />
            <nav className="h-full">
                <NavButton name="Home" link="/" />
                <NavButton name="About Us" link="/about" />
                <NavButton name="Services" link="/services" />
                <NavButton name="Contact Us" link="/contact" />
            </nav>
        </header>
    )
}

export default Header;