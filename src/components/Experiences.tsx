import Title from "./Title";

import kof from "../assets/companies/kof.png";

const skillGroups = [
    {
        title: "Python & Backend",
        skills: [
            "Python",
            "Django",
            "Django REST Framework",
            "API REST",
            "PostgreSQL",
        ],
    },
    {
        title: "IA & Computer Vision",
        skills: [
            "Computer Vision",
            "OCR",
            "OpenCV",
            "Traitement d’images",
        ],
    },
    {
        title: "Data",
        skills: [
            "Pandas",
            "NumPy",
            "Analyse de données",
            "Prétraitement des données",
        ],
    },
    {
        title: "Outils & développement",
        skills: [
            "Git",
            "GitHub",
            "Docker",
            "React",
            "Flutter",
        ],
    },
];

const experiences = [
    {
        id: 1,
        role: "Stagiaire Software Engineer",
        company: "KofCorporation",
        period: "Juin 2024 – Octobre 2025",
        description: [
            "Développement d’une plateforme de recherche, consultation et organisation de mémoires et thèses.",
            "Conception et développement d’API REST avec Django REST Framework.",
            "Intégration de l’API avec une application mobile Flutter et une base de données PostgreSQL.",
            "Implémentation de fonctionnalités de recherche, authentification, favoris et gestion des utilisateurs.",
            "Optimisation des performances et amélioration de l’expérience utilisateur.",
        ],
        image: kof,
    },
];

const Experiences = () => {
    return (
        <div id="Experiences" className="mt-10">
            <Title title="Expériences & Compétences" />

            <div className="grid md:grid-cols-2 gap-6 mt-6">

                {/* COMPÉTENCES */}
                <div className="bg-base-200 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-bold text-blue-600 mb-5">
                        Développeur Python / IA
                    </h2>

                    <div className="space-y-6">
                        {skillGroups.map((group, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-base mb-3">
                                    {group.title}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill, skillIndex) => {
                                        const highlightedSkills = [
                                            "Python",
                                            "Django",
                                            "Django REST Framework",
                                            "Computer Vision",
                                            "OCR",
                                            "OpenCV",
                                        ];

                                        return (
                                            <span
                                                key={skillIndex}
                                                className={
                                                    highlightedSkills.includes(
                                                        skill
                                                    )
                                                        ? "badge badge-primary px-3 py-3"
                                                        : "badge badge-outline px-3 py-3"
                                                }
                                            >
                                                {skill}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* EXPÉRIENCE */}
                <div className="flex flex-col space-y-4">
                    {experiences.map((experience) => (
                        <div
                            key={experience.id}
                            className="bg-base-200 p-6 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <img
                                    src={experience.image}
                                    alt={experience.company}
                                    className="object-cover h-12 w-12 rounded"
                                />

                                <div className="ml-4">
                                    <h2 className="text-blue-600 font-bold text-lg">
                                        {experience.role}
                                    </h2>

                                    <p className="font-medium">
                                        {experience.company}
                                    </p>

                                    <span className="text-sm text-gray-400">
                                        {experience.period}
                                    </span>
                                </div>
                            </div>

                            <ul className="list-disc ml-6 mt-5 space-y-2 text-sm">
                                {experience.description.map(
                                    (desc, index) => (
                                        <li key={index}>{desc}</li>
                                    )
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* PROJETS IA */}
            <div className="mt-6 bg-base-200 p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold text-blue-600 mb-4">
                    Projets IA & Computer Vision
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                    {/* KYC */}
                    <div className="p-4 bg-base-300 rounded-lg">
                        <div className="flex items-center justify-between gap-3">
                            <h3 className="font-bold">
                                KYC – Analyse de documents
                            </h3>

                            <span className="badge badge-warning">
                                En développement
                            </span>
                        </div>

                        <p className="text-sm text-gray-400 mt-3">
                            Projet personnel visant à développer une API
                            Python/Django pour l’analyse automatisée de
                            documents d’identité. Le projet explore
                            l’utilisation de l’OCR, d’OpenCV et de la
                            Computer Vision pour extraire et structurer les
                            informations des documents.
                        </p>
                    </div>

                    {/* PHOTO PARFAITE */}
                    <div className="p-4 bg-base-300 rounded-lg">
                        <h3 className="font-bold">
                            Photo Parfaite
                        </h3>

                        <p className="text-sm text-gray-400 mt-3">
                            API Django REST permettant d’uploader plusieurs
                            images, de les évaluer et de sélectionner
                            automatiquement la meilleure photo à partir d’un
                            score d’analyse.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Experiences;