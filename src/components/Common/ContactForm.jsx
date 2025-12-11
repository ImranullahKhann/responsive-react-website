export default function ContactForm () {
    return (
        <form className="flex flex-col gap-3 w-80 text-black">
            <input type="text" placeholder="Name" className="p-1 rounded-md"/>
            <input type="email" placeholder="Email" className="p-1 rounded-md" />
            <input type="text" placeholder="Subject" className="p-1 rounded-md" />
            <textarea name="Message" placeholder="Your Message" rows="6" className="p-1 rounded-md"></textarea>
            <button className="bg-red-800 text-white w-32 h-10 self-center rounded-md hover:bg-red-600 transition-all duration-300 ease-in-out" onClick={(e) => e.preventDefault()}>Send</button>
        </form>
    )
}