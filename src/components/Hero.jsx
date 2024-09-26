export const Hero = () => {
    return (
        <section className="hero align-items-stretch">
            <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
                <img className="avatar" src="/avatar.png" alt="avatar" />
                <h1>Hola, soy FranCode</h1>
                <h2>Desarrollador Web FullStack</h2>
            </div>
            <div className="hero-inferior">
                <div className="frontend">
                    <h2>Front-end</h2>
                    <div className="skills-contenedor">
                        <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank">
                            <img className="skills" src="/html-logo.png" alt="html-logo" />
                        </a>
                        <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
                            <img className="skills" src="/css-logo.png" alt="css-logo" />
                        </a>
                        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">
                            <img className="skills" src="/js-logo.png" alt="js-logo" />
                        </a>
                        <a href="https://getbootstrap.com/" target="_blank">
                            <img className="skills" src="/bootstrap-logo.png" alt="bootstrap-logo" />
                        </a>
                        <a href="https://es.react.dev/" target="_blank">
                            <img className="skills" src="/react-logo.png" alt="react-logo" />
                        </a>
                        <a href="https://typescriptlang.org/" target="_blank">
                            <img className="skills" src="/typescript-logo.png" alt="typescript-logo" />
                        </a>
                    </div>
                </div>
                <div className="backend">
                    <h2>Back-end</h2>
                    <div className="skills-contenedor">
                        <a href="https://nodejs.org/en" target="_blank">
                            <img className="skills" src="/nodejs-logo.png" alt="nodejs-logo" />
                        </a>
                        <a href="https://www.postgresql.org/" target="_blank">
                            <img className="skills" src="/postgresql-db-logo.png" alt="postgresql-db-logo" />
                        </a>
                        <a href="https://firebase.google.com/" target="_blank">
                            <img className="skills" src="/firebase-logo.png" alt="postgresql-db-logo" />
                        </a>
                        <a href="https://www.mongodb.com/" target="_blank">
                            <img className="skills" src="/mongodb-logo.png" alt="mongodb-logo" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};
