export const Articles = () => {
    return (
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
    )
};
