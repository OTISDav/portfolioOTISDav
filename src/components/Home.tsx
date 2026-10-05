import { Mail, MessageCircle, Github } from "lucide-react";

const Home = () => {
    return (
        <div
            id="Home"
            className="flex flex-col justify-center items-center md:items-start md:my-32 my-16 px-6"
        >
            <div className="max-w-4xl">
                <p className="text-blue-600 font-semibold text-lg mb-3 text-center md:text-left">
                    Développeur Python · Backend · IA
                </p>

                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left leading-tight">
                    Bonjour, je suis{" "}
                    <span className="text-blue-600">
                        BOTCHOLI ESSONANI DAVID
                    </span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold mt-5 text-center md:text-left">
                    Développeur Python orienté Intelligence Artificielle
                </h2>

                <p className="my-6 text-md md:text-lg text-center md:text-left max-w-3xl leading-relaxed">
                    Je développe des applications backend et des API avec{" "}
                    <strong>Python, Django et Django REST Framework</strong>.
                    Je m'intéresse particulièrement à la{" "}
                    <strong>Computer Vision, l'OCR, le traitement d'images</strong>{" "}
                    et l'analyse de données avec <strong>Pandas et NumPy</strong>.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                    <span className="badge badge-lg p-4">
                        Python
                    </span>

                    <span className="badge badge-lg p-4">
                        Django
                    </span>

                    <span className="badge badge-lg p-4">
                        Django REST
                    </span>

                    <span className="badge badge-lg p-4">
                        Computer Vision
                    </span>

                    <span className="badge badge-lg p-4">
                        OpenCV
                    </span>

                    <span className="badge badge-lg p-4">
                        PostgreSQL
                    </span>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <a
                        href="mailto:davidbotcholi2003@gmail.com"
                        className="btn bg-blue-600 text-white hover:bg-blue-700 border-none flex items-center gap-2"
                    >
                        <Mail className="w-5 h-5" />
                        Me contacter
                    </a>

                    <a
                        href="https://wa.me/22891753075"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-green-600 text-white hover:bg-green-700 border-none flex items-center gap-2"
                    >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp
                    </a>

                    <a
                        href="https://github.com/OTISDav"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline flex items-center gap-2"
                    >
                        <Github className="w-5 h-5" />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;