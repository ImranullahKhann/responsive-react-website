import TripCard from "./TripCard.jsx"
import imgOne from "@/assets/pics-1.jpg"
import imgTwo from "@/assets/pics (2).jpg"
import imgThree from "@/assets/pics (3).jpg"

export default function RecentTrips () {
    return (
        <section className="flex flex-col items-center my-10 gap-10">
            <h2>Recent Trips</h2>
            <div className="cards flex gap-8 flex-wrap justify-center">
                <TripCard cardImg={imgOne}/>
                <TripCard cardImg={imgTwo}/>
                <TripCard cardImg={imgThree}/>
            </div>
        </section>  
    )
}