export default function Hero ({ posterLink, title, cta, link }) {
    return (
        <div className="hero w-full bg-cover bg-center" style={{ backgroundImage: `url('${posterLink}')`, height: "60rem"}}>
            <div className="hero-container relative w-full h-full">
                <h2 className="absolute top-64 text-center inset-x-0 text-6xl">{title}</h2>
                {cta ? <h3 className="absolute top-80 text-center inset-x-0 text-2xl font-normal">{cta}</h3> : ""}
                {link ? <a className="absolute top-96 text-center text-xl bg-white text-black w-32 h-10 rounded-md content-center hover:bg-gray-300" href={link.route} style={{marginLeft: "50%", transform: "translateX(-50%)"}}>{link.name}</a> : ""}
            </div>
        </div>
    )
}