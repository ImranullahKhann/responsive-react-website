import NavButton from "./NavButton.jsx"
import "../../App.css"

const Header = () => {
    return (
        <header className="flex w-10/12 justify-between bg-red-800 text-white px-10 h-20 rounded-xl mt-8">
            <h1 className="logo updock-bold content-center cursor-pointer hover:text-">
                Rello
            </h1>
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