export const Experience = () => {
    return (
        <section className="experiencia seccion-oscura">
            <div className="container text-center">
                <h2 className="seccion-titulo">Conocimientos y experiencia</h2>
                <h3 className="seccion-descripcion">(Siempre en continuo aprendizaje)</h3>
                <div className="row">
                    {/* Desarrollo Web Front-end*/}
                    <div className="columna col-12 col-md-4 seccion-clara">
                        <i className="bi bi-palette"></i>
                        <p className="experiencia-titulo">Desarrollo Web Front-end</p>
                        <p>Nivel de experiencia <b>intermedio</b> trabajando con HTML, CSS y JavaScript para crear <b>sitios web responsivos y atractivos</b>. Utilizo Bootstrap para diseños rápidos y consistentes, y React para construir <b>aplicaciones dinámicas e interactivas</b>. </p>
                        <div className="badges-contenedor">
                            <span className="badge rounded-pill text-bg-danger">HTML</span>
                            <span className="badge rounded-pill text-bg-primary">CSS</span>
                            <span className="badge rounded-pill text-bg-warning">JavaScript</span>
                            <span className="morado badge rounded-pill">Bootstrap</span>
                            <span className="badge rounded-pill text-bg-info">React</span>
                            <span className="badge rounded-pill text-bg-primary">TypeScript</span>
                        </div>
                    </div>
                    {/* Desarrollo Web Back-end */}
                    <div className="columna col-12 col-md-4 seccion-clara">
                        <i className="bi bi-hammer"></i>
                        <p className="experiencia-titulo">Desarrollo Web Back-end</p>
                        <p>Nivel de experiencia <b>básico</b> trabajando con Node.js, conocimientos en la <b>manipulación de APIs</b>, <b>peticiones HTTP</b>, creación y conexión a <b>bases de datos</b> relacional (PostgreSQL), no relacional (MongoDB) y en la nube (Firebase)</p>
                        <div className="badges-contenedor">
                            <span className="badge rounded-pill text-bg-warning">JavaScript</span>
                            <span className="badge rounded-pill text-bg-dark">Node.js</span>
                            <span className="badge rounded-pill text-bg-primary">PostgreSQL</span>
                            <span className="badge rounded-pill text-bg-success">MongoDB</span>
                            <span className="badge rounded-pill text-bg-danger">Firebase</span>
                        </div>
                    </div>
                    {/* Implementación y despliegue */}
                    <div className="columna col-12 col-md-4 seccion-clara">
                        <i className="bi bi-rocket"></i>
                        <p className="experiencia-titulo">Implementación y Despliegue</p>
                        <p>Nivel de experiencia <b>intermedio</b> trabajando con herramientas de: <b>control de versiones</b> con Git y GitHub, <b>implementación</b> de código en Visual Studio Code e IntelliJ IDEA y <b>despliegue</b> web con Netlify.</p>
                        <div className="badges-contenedor">
                            <span className="badge rounded-pill text-bg-danger">Git</span>
                            <span className="badge rounded-pill text-bg-dark">GitHub</span>
                            <span className="badge rounded-pill text-bg-primary">Visual Studio Code</span>
                            <span className="badge rounded-pill text-bg-warning">IntelliJ IDEA</span>
                            <span className="badge rounded-pill text-bg-light">Netlify</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
