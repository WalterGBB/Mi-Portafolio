export const App = () => {
  return (
    <>
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

      {/* Sección Hero */}
      <section className="hero align-items-stretch">
        <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
          <img className="avatar" src="/avatar.png" alt="avatar" />
          <h1>Hola, soy FranCode</h1>
          <h2>Desarrollador Web FullStack</h2>
        </div>
        <div className="hero-inferior">
          <div className="frontend">
            <h2>Front-end</h2> <br />
            <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank">
              <img className="skills" src="/html-logo.png" alt="html-logo" />
            </a>
            <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
              <img className="skills" src="/css-logo.png" alt="css-logo" />
            </a>
            <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">
              <img className="skills" src="/js-logo.png" alt="js-logo" /> <br />
            </a>
            <a href="https://getbootstrap.com/" target="_blank">
              <img className="skills" src="/bootstrap-logo.png" alt="bootstrap-logo" />
            </a>
            <a href="https://es.react.dev/" target="_blank">
              <img className="skills" src="/react-logo.png" alt="react-logo" />
            </a>
          </div>
          <div className="backend">
            <h2>Back-end</h2> <br />
            <a href="https://nodejs.org/en" target="_blank">
              <img className="skills" src="/nodejs-logo.png" alt="nodejs-logo" />
            </a>
            <a href="https://www.postgresql.org/" target="_blank">
              <img className="skills" src="/postgresql-db-logo.png" alt="postgresql-db-logo" /> <br />
            </a>
            <a href="https://firebase.google.com/" target="_blank">
              <img className="skills" src="/firebase-logo.png" alt="postgresql-db-logo" />
            </a>
            <a href="https://www.mongodb.com/" target="_blank">
              <img className="skills" src="/mongodb-logo.png" alt="mongodb-logo" />
            </a>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="sobre-mi">
        <div className="contenedor">
          <h2 className="seccion-titulo">¿Quién es FranCode?</h2>
          <p className="seccion-texto">
            Hola 👋🏻, soy FranCode, un joven cristiano ❤️✝️ recién egresado de la carrera profesional de Ingeniería de Sistemas 💻<img className="icon" src="/graduate-ico.png" alt="graduate-icon" /> de la Universidad Nacional de Cajamarca ⛰️, Perú <img className="icon" src="/peru-icon.png" alt="PE-icon" /><br />
            Me fascina el maravilloso mundo de la programación <img className="icon" src="/programming-icon.png" alt="pc-icon" /> y busco cada día incrementar mis conocimientos en el campo para mejorar mis habilidades como programador🧑🏻‍💻 <br />
            Mis pasatiempos son: escuchar música <img className="icon" src="/music-icon.png" alt="PE-icon" /> (principalmente del género rock 💀🤘), tocar la guitarra 🎸, cantar 🎙️, la lucha de brazos 💪🏻, jugar al baloncesto 🏀, hacer ciclismo 🚴🏻 y jugar con mi gatos 😃🐈🐈‍⬛</p>
        </div>
      </section>

      {/* Experiencia */}
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
              </div>
            </div>
            {/* Desarrollo Web Back-end */}
            <div className="columna col-12 col-md-4 seccion-clara">
              <i className="bi bi-hammer"></i>
              <p className="experiencia-titulo">Desarrollo Web Back-end</p>
              <p>Nivel de experiencia <b>intermedio</b> trabajando con Node.js, conocimientos en la <b>manipulación de APIs</b>, <b>peticiones HTTP</b>, creación y conexión a <b>bases de datos</b> relacional (PostgreSQL), no relacional (MongoDB) y en la nube (Firebase)</p>
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
              <p>Nivel de experiencia <b>intermedio</b> trabajando con herramientas de: <b>control de versiones</b> con Git y GitHub, <b>implementación</b> de aplicaciones en Visual Studio Code, <b>despliegue y mantenimiento</b> web con Netlify.</p>
              <div className="badges-contenedor">
                <span className="badge rounded-pill text-bg-danger">Git</span>
                <span className="badge rounded-pill text-bg-dark">GitHub</span>
                <span className="badge rounded-pill text-bg-primary">Visual Studio Code</span>
                <span className="badge rounded-pill text-bg-light">Netlify</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="proyectos-recientes d-flex flex-column">
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
                  <p>Proyecto 1</p>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <img src="/icon-github.png" alt="icon-github" />
                    </a>
                    <a href="https://my-cat-snarf.netlify.app/" target="_blank" rel="noopener noreferrer">
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
                  <p>Proyecto 2</p>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <img src="/icon-github.png" alt="icon-github" />
                    </a>
                    <a href="https://my-cat-snarf.netlify.app/" target="_blank" rel="noopener noreferrer">
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
                  <p>Proyecto 3</p>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <img src="/icon-github.png" alt="icon-github" />
                    </a>
                    <a href="https://my-cat-snarf.netlify.app/" target="_blank" rel="noopener noreferrer">
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
                  <p>Proyecto 4</p>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <img src="/icon-github.png" alt="icon-github" />
                    </a>
                    <a href="https://my-cat-snarf.netlify.app/" target="_blank" rel="noopener noreferrer">
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
                  <p>Proyecto 5</p>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <img src="/icon-github.png" alt="icon-github" />
                    </a>
                    <a href="https://my-cat-snarf.netlify.app/" target="_blank" rel="noopener noreferrer">
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
                  <p>Proyecto 6</p>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <img src="/icon-github.png" alt="icon-github" />
                    </a>
                    <a href="https://my-cat-snarf.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <img src="/icon-navegador.png" alt="icon-navegador" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <button type="button" className="btn btn-info">
            Ver más proyectos
            <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </a>
      </section>

      {/* Articulos */}
      <section className="articulos justify-content-start seccion-oscura">
        <h2 className="seccion-titulo">Últimas noticias tech</h2>
        <h3 className="seccion-descripcion">(Actualizadas regularmente)</h3>
        <div className="card">
          <div className="card-header">
            Últ. actualización 25 de junio
          </div>
          <ul className="list-group list-group-flush">
            <a href="https://news.sky.com/story/first-samples-ever-collected-from-far-side-of-the-moon-make-it-back-to-earth-13158405" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">China se ha convertido en el primer país en traer con éxito muestras del lado oscuro de la Luna,</li>
            </a>
            <a href="https://gestion.pe/mundo/internacional/ue-advierte-a-apple-que-su-app-store-viola-las-normas-de-competencia-union-europea-noticia/" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">App Store viola las normas de competencia de la UE?</li>
            </a>
            <a href="https://gestion.pe/tecnologia/chancay-sera-el-primer-puerto-inteligente-de-sudamerica-las-tecnologias-que-usara-cosco-shipping-noticia/" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">Chancay, primer “puerto inteligente” de Sudamérica?</li>
            </a>
            <a href="https://cnnespanol.cnn.com/2024/06/18/nvidia-empresa-mas-valiosa-mundo-trax/" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">Nvidia se convierte en la empresa pública más valiosa del mundo superando a Microsoft y Apple</li>
            </a>
            <a href="https://www.xataka.com/robotica-e-ia/creiamos-que-chatgpt-era-genial-para-programar-han-hecho-estudio-mitad-sus-respuestas-incorrectas" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">Estudio revela que más de la mitad de las respuestas de ChatGPT son incorrectas</li>
            </a>
            <a href="https://www.xataka.com/aplicaciones/estos-dos-lenguajes-decada-1950-siguen-haciendo-historia-vuelven-a-estar-populares-mundo" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">Fortran y COBOL más vivos que nunca?</li>
            </a>
          </ul>
        </div>
        <a href="https://www.wired.com/tag/programming/">
          <button type="button" className="btn btn-info">
            Ver más noticias
            <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </a>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="testimonios">
        <h2 className="seccion-titulo">Testimonios</h2>
        <h3 className="seccion-descripcion">Estos son algunos testimonios de mis clientes...</h3>
        {/* Carrusel */}
        <div id="testimonios-carrusel" className="carousel carousel-light slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <img className="testimonio-imagen rounded-circle" src="/gato-greko.jpg" alt="gato-greko" />
                <p className="testimonio-texto">"Desde el cielo gatuno, yo atestiguo el compromiso y responsabilidad de mi amigo FranCode. Desde cachorro lo observaba mientras hacía sus tareas de la universidad, sentado horas y horas... Lo extraño mucho."</p>
                <div className="testimonio-info">
                  <p className="cliente">Greko</p>
                  <p className="cargo">Héroe de Guerra</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <img className="testimonio-imagen rounded-circle" src="/gato-snarf.jpeg" alt="gato-greko" />
                <p className="testimonio-texto">"Mi querido FranCode, no sé qué rayos harás encerrado en tu habitación por las tardes. Greko decía que program..., no recuerdo, pero si eres la mitad de bueno en eso como en cuidarnos, debes ser excelente..."</p>
                <div className="testimonio-info">
                  <p className="cliente">Snarf</p>
                  <p className="cargo">Capitán pulgas</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <img className="testimonio-imagen rounded-circle" src="/gato-onyx.jpeg" alt="gato-greko" />
                <p className="testimonio-texto">Yo soy la muerte, el destructor de mundos... Pero para FranCode siempre seré su Onyx bebé, beeebitooo... ¡Rayos humano!, no entiendes que dominaré el mundo?... ¡Yo soy la oscuridad! </p>
                <div className="testimonio-info">
                  <p className="cliente">Onyx</p>
                  <p className="cargo">Teniente pulguitas</p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="contacto seccion-oscura">
        <h2 className="seccion-titulo">¿Quieres contactarme?</h2>
        <h3 className="seccion-descripcion">Mándame un correo y conversemos</h3>
        <div className="container">
          <div className="contenedor container text-center rectangulo d-fex justify-content-evenly">
            <div className="row">
              <div className="col-12 col-md-4 invitacion">
                Hablemos
              </div>
              <div className="col-12 col-md-4 descripcion">
                Contáctame para desarrollar tu sitio web y haré que tu visión se vuelva realidad
              </div>
              <div className="col-12 col-md-4">
                <a href="mailto:waztercraft@gmail.com">
                  <button type="button">
                    Contacto
                    <i className="bi bi-envelope-check-fill"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de página (Footer) */}
      <footer className="d-flex flex-column align-items-center justify-content-center">
        <a href="#"> <img className="footer-logo" src="/avatar.png" alt="avatar" /></a>
        <p className="footer-texto text-center">¡Dios te bendiga!</p>
        <div className="iconos-redes-sociales d-flex flex-warp align-items-center justify-content-center">
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
        <div className="derechos-de-autor">
          Algunos derechos reservados &copy; FranCode (2024)
        </div>
      </footer>
    </>
  )
}
