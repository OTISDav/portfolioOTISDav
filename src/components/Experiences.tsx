import Title from "./Title"

import imgDJANGO from "../assets/techno/django.png";
import imgREACT from "../assets/techno/react.png";
import imgFLUTTER from "../assets/techno/flutter.png";
import imgDART from "../assets/techno/dart.png";
import imgPANDAS from "../assets/techno/pandas.png";
import imgNUMPY from "../assets/techno/numpy.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgDOCKER from "../assets/techno/docker.png";

import kof from "../assets/companies/kof.png";



const skills = [
    { id: 1, name: "Django", image: imgDJANGO },
    { id: 2, name: "React", image: imgREACT },
    { id: 3, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 4, name: "Flutter", image: imgFLUTTER },
    { id: 7, name: "Dart", image: imgDART },
    { id: 5, name: "Pandas", image: imgPANDAS },
    { id: 6, name: "Numpy", image: imgNUMPY },
    { id: 7, name: "Docker", image: imgDOCKER },
];


const experiences = [
    {
        id: 1,
        role: "Stagiaire Software Engineer",
        company: "KofCorporation",
        period: "juin 2024 - oct 2025",
        description: [
            "Développement d'une application de recherche et mise en ligne des memoires et theses",
            "Optimisation des performances de l'application.",
        ],
        image: kof,
    },

];



const Experiences = () => {
    return (
        <div id="Experiences">
            <Title title="Expériences" />
            <div className="flex  flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4  justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className=" flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-blue-1000">
                                <img src={skill.image} alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="text text-blue-600">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((expericence) => (
                        <div
                            key={expericence.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <img
                                    src={expericence.image}
                                    alt={expericence.company}
                                    className="object-cover h-10 w-10"
                                />
                                <div className="ml-4">
                                    <h1 className="text text-blue-600 font-bold">
                                        {expericence.role} , {expericence.company}
                                    </h1>
                                    <span className="text-sm">{expericence.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {expericence.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences
