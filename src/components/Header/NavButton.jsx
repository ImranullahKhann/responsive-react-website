import { NavLink } from "react-router-dom";

const NavButton = ({name, link}) => {
    return (
        <NavLink to={link} className={({isActive}) => `inline-block hover:bg-red-700 ${isActive ? "bg-red-700" : ""} h-full content-center w-28 text-center transition-all ease-in-out duration-300`}>{ name }</NavLink>
    )
}

export default NavButton;