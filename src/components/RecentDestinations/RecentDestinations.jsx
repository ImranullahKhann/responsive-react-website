import RecentCard from "./RecentCard"
import imgOne from "@/assets/pics-1.jpg"
import imgTwo from "@/assets/pics (2).jpg"
import imgThree from "@/assets/pics (3).jpg"
import imgFour from "@/assets/pics (4).jpg"
import imgFive from "@/assets/pics (5).jpg"

export default function RecentDestinations () {
    return (
        <section className="flex flex-col items-center my-10 gap-10">
            <h2 className="text-center">Recent Destinations</h2>
            <RecentCard imgOne={imgOne} imgTwo={imgTwo}/>
            <RecentCard imgOne={imgTwo} imgTwo={imgThree}/>
            <RecentCard imgOne={imgFour} imgTwo={imgFive} />
        </section>
    )
}