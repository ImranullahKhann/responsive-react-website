import Logo from "../Common/Logo.jsx";
import SocialLink from "./SocialLink.jsx"
import FooterLinks from "./FooterLinks.jsx"
import linksData from "./linksData.js";

const Footer = () => {
    return (
        <footer className="text-white bg-red-800 w-full px-32 py-5">
            <section className="flex justify-between mb-8">
                <div className="">
                    <Logo />
                    <p>See the World</p>
                </div>
                <div className="socials flex gap-3">
                    <SocialLink iconClass="fa-brands fa-square-instagram"/>
                    <SocialLink iconClass="fa-brands fa-square-facebook"/>
                    <SocialLink iconClass="fa-brands fa-youtube"/>
                    <SocialLink iconClass="fa-brands fa-square-x-twitter"/>
                </div>
            </section>
            <section className="flex justify-between">
                <FooterLinks title={linksData[0].title} links={linksData[0].links}/>
                <FooterLinks title={linksData[1].title} links={linksData[1].links}/>
                <FooterLinks title={linksData[2].title} links={linksData[2].links}/>
                <FooterLinks title={linksData[3].title} links={linksData[3].links}/>
            </section>
        </footer>
    )
}

export default Footer;