export default function RecentCard ({ imgOne, imgTwo }) {
    return (
        <div className="recent-card flex gap-8 flex-wrap justify-center lg:w-[60rem] px-10">
            <div className="dest-info lg:w-[30rem]">
                <h4>Destination, Country</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequatur, ad accusamus quibusdam temporibus ab vero quod itaque nobis nam natus, molestiae voluptatum totam pariatur. Quas officia minus reiciendis voluptate possimus velit nisi, nostrum natus suscipit quo facilis labore illo porro nihil aut voluptatem ut doloremque necessitatibus voluptatibus quia deleniti consequatur hic! Nobis voluptate sint expedita omnis dolor deserunt magnam, odit eum voluptatibus architecto accusamus eos libero accusantium recusandae sequi laboriosam iure in porro. Accusamus ducimus culpa fugit rem exercitationem eos enim saepe cum quia. Sed maxime vitae ratione! Dolor quasi eum debitis enim officiis recusandae consectetur voluptate, ullam adipisci!</p>
            </div>
            <div className="imgs flex gap-4 self-center" style={{height: "20rem"}}>
                <div className="w-28 h-72 self-start">
                    <img src={imgOne} className="w-full h-full object-cover"/>
                </div>
                <div className="w-28 h-72 self-end">
                    <img src={imgTwo} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}