import { NavLink } from "react-router-dom";

const NavButton = ({name, link, setActive}) => {

    function handleClick () {
        setActive(state => !state);
        window.scrollTo(0, 0);
    }

    return (
        <NavLink to={link} className={({isActive}) => `inline-block hover:bg-red-700 ${isActive ? "bg-red-700" : ""} h-full content-center lg:w-28 text-center transition-all ease-in-out duration-300`} onClick={ handleClick }>{ name }</NavLink>
    )
}

export default NavButton;