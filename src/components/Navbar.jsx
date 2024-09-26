export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-toggler">
                    <a className="nabvar-brand" href="#">
                        <img src="/favicon.ico" alt="Logo de la página" />
                    </a>
                    <ul className="navbar-nav d-flex justify-content-center align-items-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#sobre-mi">Sobre mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#proyectos">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonios">Testimonios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};
