export const Proyects = () => {
    return (
        <section id="proyectos" className="proyectos d-flex flex-column">
            <h2 className="seccion-titulo">Mis proyectos recientes</h2>
            <h3 className="seccion-descripcion">Estos son algunos proyectos que he creado recientemente</h3>
            {/* Galería de proyectos */}
            <div className="container text-center proyectos-contenedor">
                <div className="row">
                    {/* Proyecto1 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="proyecto">
                            <img src="/proyecto1.png" alt="proyecto1" />
                            <div className="overlay">
                                <p>Tic Tac Toe</p>
                                <div className="iconos-contenedor">
                                    <a href="https://github.com/WalterGBB/tic-tac-toe" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-github.png" alt="icon-github" />
                                    </a>
                                    <a href="https://francode-tic-tac-toe.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-navegador.png" alt="icon-navegador" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto2 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="proyecto">
                            <img src="/proyecto2.png" alt="proyecto2" />
                            <div className="overlay">
                                <p>API Clima</p>
                                <div className="iconos-contenedor">
                                    <a href="https://github.com/WalterGBB/App-Clima" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-github.png" alt="icon-github" />
                                    </a>
                                    <a href="https://francode-app-clima.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-navegador.png" alt="icon-navegador" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto3 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="proyecto">
                            <img src="/proyecto3.png" alt="proyecto3" />
                            <div className="overlay">
                                <p>Carrito de compras</p>
                                <div className="iconos-contenedor">
                                    <a href="https://github.com/WalterGBB/App-Carrito" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-github.png" alt="icon-github" />
                                    </a>
                                    <a href="https://app-carrito-react.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-navegador.png" alt="icon-navegador" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto4 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="proyecto">
                            <img src="/proyecto4.png" alt="proyecto4" />
                            <div className="overlay">
                                <p>API Películas</p>
                                <div className="iconos-contenedor">
                                    <a href="hhttps://github.com/WalterGBB/App-Peliculas" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-github.png" alt="icon-github" />
                                    </a>
                                    <a href="https://buscador-peliculas-react-js-swc.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-navegador.png" alt="icon-navegador" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto5 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="proyecto">
                            <img src="/proyecto5.png" alt="proyecto5" />
                            <div className="overlay">
                                <p>App Tareas</p>
                                <div className="iconos-contenedor">
                                    <a href="https://github.com/WalterGBB/App-TaskList" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-github.png" alt="icon-github" />
                                    </a>
                                    <a href="https://tasklist-react-typescript.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-navegador.png" alt="icon-navegador" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto6 */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="proyecto">
                            <img src="/proyecto6.png" alt="proyecto6" />
                            <div className="overlay">
                                <p>JS Proyects</p>
                                <div className="iconos-contenedor">
                                    <a href="https://github.com/WalterGBB/Js-Proyects" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-github.png" alt="icon-github" />
                                    </a>
                                    <a href="https://proyectos-basicos-html-css-js.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        <img src="/icon-navegador.png" alt="icon-navegador" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://github.com/" className="btn" target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-info">
                    Ver más proyectos
                    <i className="bi bi-arrow-right-circle-fill"></i>
                </button>
            </a>
        </section>
    )
};
