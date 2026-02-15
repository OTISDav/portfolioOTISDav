import { Mail } from "lucide-react"
import img from '../assets/img.jpg'

const Home = () => {
    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">

            <div className="flex flex-col ">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour , <br /> je suis {" "}
                    <span className="text-blue-600">BOTCHOLI ESSONANI DAVID</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    Je suis un développeur fullstack <br />
                    Utilisant Django React et Flutter. <br />Contactez-moi si vous avez besoin
                    de mes services.
                </p>


            <div className="flex gap-4">
            <a
                href="mailto:davidbotcholi2003@gmail.com"
                className="btn bg-blue-600 text-white hover:bg-blue-700 border-none flex items-center gap-2"
            >
                <Mail className="w-5 h-5" />
                Email
            </a>

            <a
                href="https://wa.me/22891753075"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-green-600 text-white hover:bg-green-700 border-none flex items-center gap-2"
            >
                WhatsApp
            </a>
</div>



            </div>
{/* 
            <div className="md:ml-60">
                <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl" 
                style={{
                    borderRadius : "30% 70% 70% 30% / 67% 62% 38% 33%"
                }}
                />
            </div> */}
        </div>
    )
}

export default Home
