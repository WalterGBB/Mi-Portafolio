export const Footer = () => {
    return (
        <footer className="d-flex flex-column align-items-center justify-content-center">
            <a href="#"> <img className="footer-logo" src="/avatar.png" alt="avatar" /></a>
            <p className="footer-texto text-center">¡Dios te bendiga!</p>
            <div className="iconos-redes-sociales d-flex flex-warp align-items-center justify-content-center">
                <a href="https://www.facebook.com/GianfrancolmL" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/gianfrancolml/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="https://x.com/WazTerBelhttps://wa.me/+51923474372?text=Hola%20FranCode%20!!!" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter-x"></i>
                </a>
                <a href="https://wa.me/+51923474372?text=Hola%20FranCode,%20hablamos?" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-whatsapp"></i>
                </a>
            </div>
            <div className="derechos-de-autor">
                Algunos derechos reservados &copy; FranCode (2024)
            </div>
        </footer>
    )
};
