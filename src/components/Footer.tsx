import { Container, Github, Linkedin, Youtube } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-center  p-10">
            <aside>

                <Container className="w-10 h-10" />
                <p className="font-bold">
                    OTIS
                    <span className="text-blue-600">Dav</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} -  Tous droits réservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/OTISDav" target="_blank" rel="noopener noreferrer">
                        <Github className="text-blue-600" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <Youtube className="text-red-400" />
                    </a>
                    <a href="https://www.linkedin.com/in/david-botcholi-otis?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bjs%2Ff79kXRJyMb0Y%2B0dSJuw%3D%3D" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="text-blue-600" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
