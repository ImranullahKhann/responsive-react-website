const NavButton = ({name, link}) => {
    return (
        <a className="inline-block hover:bg-red-700 h-full content-center w-28 text-center transition-all ease-in-out duration-300" href={link}>{ name }</a>
    )
}

export default NavButton;