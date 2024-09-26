export const Contact = () => {
    return (
        <section id="contacto" className="contacto seccion-oscura">
            <h2 className="seccion-titulo">¿Quieres contactarme?</h2>
            <h3 className="seccion-descripcion">Mándame un correo y conversemos</h3>
            <div className="container">
                <div className="rectangulo">
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
    )
};
