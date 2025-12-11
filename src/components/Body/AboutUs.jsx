import Hero from "../Common/Hero.jsx"
import InfoTile from "../Common/InfoTile.jsx"

export default function AboutUs () {
    return (
        // - History
        // - Mission	
        // - Vision
        <>
            <Hero posterLink="https://images.pexels.com/photos/35111683/pexels-photo-35111683.jpeg?_gl=1*t9wnsl*_ga*NDc1NjUzNzgwLjE3NTc4NjI4NDA.*_ga_8JE65Q40S6*czE3NjU0MDI1MTUkbzE1JGcxJHQxNzY1NDAyNzM0JGo1OSRsMCRoMA.." title="About" />
            <div className="about-sections flex flex-col items-center gap-5 my-10">
                <InfoTile title={"Our History"}/>
                <InfoTile title={"Our Mission"} />
                <InfoTile title={"Our Vision"} />
            </div>
        </>
    )
}