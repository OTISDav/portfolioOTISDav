import Title from "./Title";

import img4 from "../assets/projects/archireflex.png";
import img5 from "../assets/projects/7.png";
import img6 from "../assets/projects/8.png";
import img7 from "../assets/projects/9.png";

import { Github, Video, Code2 } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "KYC – Analyse automatisée de documents d’identité",
        description:
            "Projet personnel en cours visant à développer une API Python/Django pour l’analyse automatisée de documents d’identité. Le projet explore l’utilisation de l’OCR, d’OpenCV et de la Computer Vision pour extraire et structurer les informations des documents.",
        technologies: [
            "Python",
            "Django",
            "Django REST Framework",
            "OCR",
            "OpenCV",
            "Computer Vision",
        ],
        status: "En développement",
        image: null,
    },

    {
        id: 2,
        title: "Photo Parfaite – API de sélection automatique d’images",
        description:
            "API Django REST permettant l’upload de plusieurs images, leur évaluation et la sélection automatique de la meilleure photo. Le projet explore le traitement d’images et des techniques de Computer Vision.",
        technologies: [
            "Python",
            "Django",
            "Django REST Framework",
            "Computer Vision",
            "Image Processing",
        ],
        repoLinkBackend: "https://github.com/OTISDav/photo_parfait",
        repoLinkFrontend: "https://github.com/OTISDav/app_analyse_photo",
        image: null,
    },

    {
        id: 3,
        title: "ThesisFinder – Plateforme de recherche académique",
        description:
            "Plateforme permettant de rechercher, consulter et organiser des mémoires et thèses. Elle comprend une API Django REST, une application Flutter et une base PostgreSQL avec authentification JWT, recherche, favoris, annotations et gestion des utilisateurs.",
        technologies: [
            "Django",
            "Django REST Framework",
            "Flutter",
            "PostgreSQL",
            "JWT",
        ],
        repoLinkBackend:
            "https://github.com/OTISDav/UbuntuThesisBackend",
        repoLinkFrontend:
            "https://github.com/OTISDav/thesisfront",
        image: null,
    },

    {
        id: 4,
        title: "Site de cabinet Architecture (ARCHI-REFLEX)",
        description:
            "Site pour un cabinet d’architecture avec demandes de stage, prise de rendez-vous, automatisation des emails et connexion à Google Calendar. Une interface d’administration permet de gérer les rendez-vous, stages, projets et logs de connexion.",
        technologies: ["React", "Django", "Tailwind CSS"],
        demoLink: "https://www.archi-reflex.com/",
        image: img4,
    },

    {
        id: 5,
        title: "AyimolouMap – Application mobile & Backend",
        description:
            "Application permettant de trouver des points de vente d’ayimolou à proximité et d’obtenir un itinéraire vers les différents points de vente.",
        technologies: [
            "Flutter",
            "Django",
            "PostgreSQL",
            "NeonDB",
        ],
        repoLinkBackend:
            "https://github.com/OTISDav/ayimolouMapbackend.git",
        repoLinkFrontend:
            "https://github.com/OTISDav/ayimlouMapFrontend.git",
        image: img5,
    },

    {
        id: 6,
        title: "Site de cabinet Architecture (ABM·Consulting)",
        description:
            "Site vitrine pour un cabinet d’architecture avec présentation des services et système de prise de rendez-vous.",
        technologies: ["React", "Tailwind CSS"],
        demoLink: "https://abmconsulting.vercel.app/",
        image: img6,
    },

    {
        id: 7,
        title: "Chatbot Gemini",
        description:
            "Application mobile de chatbot utilisant l’API Gemini pour permettre aux utilisateurs d’interagir avec un assistant conversationnel.",
        technologies: ["Flutter", "API Gemini"],
        repoLinkFrontend:
            "https://github.com/OTISDav/Chatbot_flutter_gemini.git",
        image: img7,
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
                        {/* Image ou aperçu */}
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover rounded-xl"
                            />
                        ) : (
                            <div className="w-full h-56 rounded-xl bg-base-200 flex items-center justify-center">
                                <div className="text-center px-4">
                                    <Code2
                                        className="mx-auto mb-3 text-blue-600"
                                        size={42}
                                    />

                                    <p className="text-2xl font-bold">
                                        Backend / API
                                    </p>

                                    <p className="text-sm text-gray-400 mt-2">
                                        Python · Django · REST API
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Statut */}
                        {project.status && (
                            <div className="mt-3">
                                <span className="badge badge-warning">
                                    {project.status}
                                </span>
                            </div>
                        )}

                        {/* Contenu */}
                        <div className="flex-1">
                            <h1 className="my-3 font-bold text-lg">
                                {project.title}
                            </h1>

                            <p className="text-sm text-gray-300 leading-relaxed">
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

                        {/* Boutons */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.demoLink && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn bg-blue-600 hover:bg-blue-700 text-white border-none flex-1"
                                >
                                    Demo
                                    <Video className="w-4" />
                                </a>
                            )}

                            {project.repoLinkFrontend && (
                                <a
                                    href={project.repoLinkFrontend}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                                    rel="noopener noreferrer"
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