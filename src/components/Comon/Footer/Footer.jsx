import "./footer.css";

function Footer() {
    return (
        <section className="footer">
            <div className="copyright">
                <p className="paragraph-copyright">
                © 2023, Browser Game Hub, Inc. Todos os direitos reservados.
                </p>
            </div>
            <div className="footer-legal">
                <ul>
                    <li>
                        <a href="#" className="link-legal">
                        Termos de Serviço
                        </a>
                    </li>
                    <li>
                        <a href="#" className="link-legal">
                        Política de Privacidade
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Footer;