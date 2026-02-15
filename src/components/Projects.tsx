import Title from "./Title"

import img1 from '../assets/projects/archireflex.png';
// import img2 from '../assets/projects/2.png';
// import img3 from '../assets/projects/3.png';
// import img4 from '../assets/projects/4.png';
// import img5 from '../assets/projects/5.png';
// import img6 from '../assets/projects/6.png';
import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Site de cabinet Architecture(ARCHI-REFLEX)',
        description: 'Mise en place d"un site pour un cabinet d"architecture avec demande de satge et prise de RDV avec automatisation d"envoie de mail automatique et connexion a Google Calendar; Partie admin pour gerer les demande de RDV, stage, ajouter les projet et logs pour les connexions',
        technologies: ['React', 'Django', 'Tailwind CSS'],
        demoLink: 'https://www.archi-reflex.com/',
        repoLink: '#',
        image: img1,
    },

];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-blue-600 text-blue hover:bg-blue-700">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn bg-blue-600 text-white hover:bg-blue-700 border-none w-2/3" href={project.demoLink}>
                                Demo
                                <Video className="w-4" />
                            </a>

                            <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                <Github className="w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
