export default function FooterLinks ({title, links}) {
    return (
        <section className="flex flex-col gap-1">
            <h3 className="text-lg">{title}</h3>
            {links.map((link, index) => {
                return (
                    <a key={index} className="text-sm hover:text-gray-300" href={link.route}>{link.name}</a>
                )
            })}
        </section>
    )
}