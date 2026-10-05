import Title from "./Title";
import img from "../assets/img2.jpg";
import {
    BrainCircuit,
    Database,
    FileCode2,
    GitBranch,
    ScanSearch,
} from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Développeur Python / Backend",
        description:
            "Je développe des API et services backend avec Python, Django et Django REST Framework.",
        icon: <FileCode2 className="text-blue-600" size={28} />,
    },
    {
        id: 2,
        title: "API & Architecture Backend",
        description:
            "Je conçois des API REST connectées à PostgreSQL avec authentification, gestion des données et logique métier.",
        icon: <Database className="text-blue-600" size={28} />,
    },
    {
        id: 3,
        title: "Computer Vision & OCR",
        description:
            "Je m'intéresse à l'analyse automatique d'images, à l'OCR, au traitement d'images et à la Computer Vision.",
        icon: <ScanSearch className="text-blue-600" size={28} />,
    },
    {
        id: 4,
        title: "Intelligence artificielle & Data",
        description:
            "Je me forme à l'analyse et au traitement des données avec Pandas et NumPy et je développe des projets orientés IA.",
        icon: <BrainCircuit className="text-blue-600" size={28} />,
    },
    {
        id: 5,
        title: "Développement & outils",
        description:
            "J'utilise Git, GitHub et Docker pour versionner, structurer et déployer mes projets.",
        icon: <GitBranch className="text-blue-600" size={28} />,
    },
];

const About = () => {
    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
            <Title title="À propos" />

            <div className="md:min-h-screen flex justify-center items-center">
                <div className="hidden md:block">
                    <img
                        src={img}
                        alt="BOTCHOLI ESSONANI DAVID"
                        className="w-96 object-cover rounded-xl"
                    />
                </div>

                <div className="md:ml-8 space-y-4">
                    {aboutSections.map((section) => (
                        <div
                            key={section.id}
                            className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-[500px] shadow-xl"
                        >
                            <div className="mb-2 md:mb-0 flex-shrink-0">
                                {section.icon}
                            </div>

                            <div className="md:ml-4 text-center md:text-left">
                                <h2 className="text-xl font-bold mb-1">
                                    {section.title}
                                </h2>

                                <p className="text-sm leading-relaxed">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;