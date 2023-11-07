import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"
import IconResearch from "../../../assets/images/icon-research.svg"
import "./header.css"
import "../../../assets/css/main.css"

function Header() {
    const isLoggedIn = false;
    const isRegister = true;

    const renderLogginOrMyAccount = () =>  {
        if(isLoggedIn === true && isRegister === true) {
            return (
                <Link to="./" className="links-pages">
                    <li>Minha Conta</li>
                </Link>
            )
        } else {
            return (
                <>
                    <Link to="./login" className="links-pages">
                        <li>Login</li>
                    </Link>
                    <Link to="./register" className="links-pages">
                        <li>Cadastrar conta</li>
                    </Link>
                </>
            )
        }
    }

    

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
                    <div className="wrapper-buttons-account">
                        {renderLogginOrMyAccount()}
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header