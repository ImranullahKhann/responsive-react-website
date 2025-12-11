import Hero from "../Common/Hero.jsx"
import RecentDestinations from "../RecentDestinations/RecentDestinations.jsx"
import RecentTrips from "../Common/RecentTrips/RecentTrips.jsx"

export default function Home () {
    return (
        <>
            <Hero posterLink="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?_gl=1*1tzj009*_ga*NDc1NjUzNzgwLjE3NTc4NjI4NDA.*_ga_8JE65Q40S6*czE3NjUzOTQ3NzIkbzE0JGcxJHQxNzY1Mzk0OTM0JGo0NyRsMCRoMA.." title="Your Journey Begins Here" cta="Choose your Favorite Destination" link={{name:"Travel Plan", route:"#"}}/> 
            <RecentDestinations />
            <RecentTrips />
        </>
    )
}