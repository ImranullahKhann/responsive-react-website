import NavButton from "./NavButton.jsx"
import Logo from "../Common/Logo.jsx"

const Header = () => {
    return (
        <header className="absolute top-10 flex w-10/12 justify-between bg-red-800 text-white px-10 h-20 rounded-xl">
            <Logo />
            <nav className="h-full">
                <NavButton name="Home" link="#" />
                <NavButton name="About Us" link="#" />
                <NavButton name="Services" link="#" />
                <NavButton name="Contact Us" link="#" />
            </nav>
        </header>
    )
}

export default Header;