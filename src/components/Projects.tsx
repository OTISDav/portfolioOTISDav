import Title from "./Title";

import img1 from "../assets/projects/archireflex.png";
import img2 from "../assets/projects/7.png";
import img3 from "../assets/projects/8.png";
import img4 from "../assets/projects/9.png"


import { Github, Video } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Site de cabinet Architecture (ARCHI-REFLEX)",
        description:
            "Mise en place d’un site pour un cabinet d’architecture avec demande de stage et prise de RDV, automatisation d’envoi de mails et connexion à Google Calendar. Partie admin pour gérer les demandes de RDV, stages, projets et logs de connexions.",
        technologies: ["React", "Django", "Tailwind CSS"],
        demoLink: "https://www.archi-reflex.com/",
        // repoLink: "#",
        image: img1,
    },

    {
        id: 2,
        title: "App mobile & Backend (AyimolouMap)",
        description:
            "Application permettant de trouver des coins de vente d’ayimolou à proximité avec itinéraire intégré dans l’application.",
        technologies: ["Flutter", "Django", "PostgreSQL", "NeonDB"],
        repoLinkBackend:
            "https://github.com/OTISDav/ayimolouMapbackend.git",
        repoLinkFrontend:
            "https://github.com/OTISDav/ayimlouMapFrontend.git",
        image: img2,
    },

    {
        id: 3,
        title: "Site de cabinet Architecture (ABM·Consulting)",
        description:
            "Mise en place d’un site pour un cabinet d’architecture avec  prise de RDV",
        technologies: ["React", "Tailwind CSS"],
        demoLink: "https://abmconsulting.vercel.app/",
        // repoLink: "#",
        image: img3,
    },


    {
        id: 4,
        title: "Chatbot_Gemini",
        description:
            "Application de chatbot gemini pour des questions",
        technologies: ["Flutter", "API Gemini",],
        repoLinkFrontend:
            "https://github.com/OTISDav/Chatbot_flutter_gemini.git",
        image: img4,
    },
];



const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />

            <div className="grid md:grid-cols-3 gap-4 items-stretch">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-base-300 p-5 rounded-xl shadow-lg flex flex-col h-full"
                    >
                        {/* Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-56 object-cover rounded-xl"
                        />

                        {/* Content */}
                        <div className="flex-1">
                            <h1 className="my-3 font-bold text-lg">
                                {project.title}
                            </h1>

                            <p className="text-sm text-gray-300">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 my-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="badge badge-outline"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.demoLink && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn bg-blue-600 hover:bg-blue-700 text-white border-none flex-1"
                                >
                                    Demo
                                    <Video className="w-4" />
                                </a>
                            )}

                            {/* {project.repoLink && (
                                <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-neutral flex-1"
                                >
                                    <Github className="w-4" />
                                    Repo
                                </a>
                            )} */}

                            {project.repoLinkFrontend && (
                                <a
                                    href={project.repoLinkFrontend}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-neutral flex-1"
                                >
                                    <Github className="w-4" />
                                    Frontend
                                </a>
                            )}

                            {project.repoLinkBackend && (
                                <a
                                    href={project.repoLinkBackend}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-neutral flex-1"
                                >
                                    <Github className="w-4" />
                                    Backend
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;