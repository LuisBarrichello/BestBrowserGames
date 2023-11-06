import "./header.css"
import "../../../assets/css/main.css"
import Logo from "../Logo/Logo"
import IconResearch from "../../../assets/images/icon-research.svg"
import { Link } from "react-router-dom"

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
                    <Link to="/" className="links-pages">
                        <li>Home</li>
                    </Link>
                    <Link className="links-pages">
                        <li>Explorar</li>
                    </Link>
                    <Link className="links-pages">
                        <li>Login</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header