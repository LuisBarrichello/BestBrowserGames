import "./header.css"
import "../../../assets/css/main.css"
import Logo from "../Logo/Logo"
import IconResearch from "../../../assets/images/icon-research.svg"

function Header() {
    return (
        <header>
                <Logo></Logo>
                <div className="container-input-research">
                    <img src={IconResearch} alt="Lupa para pesquisar jogos e categorias" />
                    <input type="text" placeholder="Pesquisar Jogos" />
                </div>
            <nav>
                <ul className="wrapper-links-pages">
                    <li className="links-pages">Home</li>
                    <li className="links-pages">Explorar</li>
                    <li className="links-pages">Login</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header