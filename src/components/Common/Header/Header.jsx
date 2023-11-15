import Logo from "../Logo/Logo"
import { Link, NavLink } from "react-router-dom"
import IconResearch from "../../../assets/images/icon-research.svg"
import "./header.css"
import Cookies from "js-cookie"
import "../../../assets/css/main.css"
import { useState, useEffect } from "react"
import utils from "../../../assets/js/utils"
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
import IconMenu from "../../../assets/images/menu.svg"


function Header({setSearchResults = () => {}}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [dataGames, setDataGames] = useState([]);
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    
    const handleFecthAPIGames = async () => {
        try {
            const apiUrl = utils.API_BASE_URL;
            const response = await fetch(`${apiUrl}/games`)
            if(!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }
            const dataGames = await response.json()
            setDataGames(dataGames)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleFecthAPIGames()
        if(searchTerm.trim() !== "") {
            const results = dataGames.filter(game =>
                game.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            if (typeof setSearchResults === 'function') {
                setSearchResults(results);
            }
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchTerm]);
    

    const renderLogginOrMyAccount = () =>  {
        const tokenCookie = Cookies.get('token')
        if(tokenCookie !== null && tokenCookie !== undefined) {
            return (
                <NavLink to="/myaccount" className="links-pages">
                    <li>Minha Conta</li>
                </NavLink>
            )
        } else {
            return (
                <>
                    <NavLink to="./login" className="links-pages">
                        <li>Login</li>
                    </NavLink>
                    <NavLink to="./register" className="links-pages">
                        <li>Cadastrar conta</li>
                    </NavLink>
                </>
            )
        }
    }

    return (
        <header>
            <Logo></Logo>
            {location.pathname === '/' && (
                <div className="container-input-research">
                    <img src={IconResearch} alt="Lupa para pesquisar jogos e categorias" />
                    <input 
                        type="text" 
                        placeholder="Pesquisar Jogo"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)} 
                    />
                </div>
            )}
            <nav>
                <ul className={isMenuOpen ? "wrapper-links-pages open" : "wrapper-links-pages"}>
                    <NavLink to="/" className="links-pages">
                        <li>Home</li>
                    </NavLink>
                    <NavLink className="links-pages" to="/exploreallgames">
                        <li>Explorar</li>
                    </NavLink>
                    <div className="wrapper-buttons-account">
                        {renderLogginOrMyAccount()}
                    </div>
                </ul>
            </nav>
            <div className='menu'>
                <button onClick={toggleMenu}><img src={IconMenu} alt="" /></button>
            </div>

        </header>
    )
}

export default Header

Header.propTypes = {
    setSearchResults: PropTypes.func,
};
