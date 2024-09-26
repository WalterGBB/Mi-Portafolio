export const Testimonials = () => {
    return (
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
    )
};
