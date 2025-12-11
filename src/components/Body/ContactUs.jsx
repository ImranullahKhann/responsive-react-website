import Hero from "../Common/Hero.jsx"
import ContactForm from "../Common/ContactForm.jsx"

export default function ContactUs () {
    return (
        // Hero
        // form
        <>
            <Hero posterLink="https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?_gl=1*1608bao*_ga*NDc1NjUzNzgwLjE3NTc4NjI4NDA.*_ga_8JE65Q40S6*czE3NjU0MDI1MTUkbzE1JGcxJHQxNzY1NDAyNjUzJGo1OSRsMCRoMA.." title="Contact Us" /> 
            <div className="contact flex flex-col items-center gap-6 my-10">
                <h2>Send a Message!</h2>
                <ContactForm />
            </div>
        </>
        
    )
}