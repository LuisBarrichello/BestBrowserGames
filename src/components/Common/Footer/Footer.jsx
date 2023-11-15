import "./footer.css";
import IconLinkedin from "../../../assets/images/linkedin.svg"
import IconGithub from "../../../assets/images/github.svg"

function Footer() {
    return (
        <section className="footer">
            <div>
                <div className="copyright">
                    <p className="paragraph-copyright">
                    © 2023, Best Browser Games, Inc. Todos os direitos reservados.
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
            </div>
            <div className="developedBy">
                <span className="developedByPerson">Desenvolvido por: Luís Gabriel Barrichello</span>
                <a href="https://github.com/LuisBarrichello" target="_blank" rel="noopener noreferrer">
                    <img src={IconGithub} alt="" />
                    <span>Github</span>
                </a>
                <a href="https://www.linkedin.com/in/luisgabrielbarrichello/" target="_blank" rel="noopener noreferrer">
                    <img src={IconLinkedin} alt="" />
                    <span>Linkedin</span>
                </a>
            </div>
        </section>
    );
}

export default Footer;