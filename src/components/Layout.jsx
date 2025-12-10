import { Outlet } from "react-router-dom";
import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"

const Layout = () => {
    return (
        <>
            <Header />
            <main className="text-white w-full">
                <Outlet />      
            </main>
            <Footer />
        </>
    )
}

export default Layout;