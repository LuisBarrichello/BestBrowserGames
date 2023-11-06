import "./CardGame.css"
import { Link } from "react-router-dom"
import ButtonCards from "../../Comon/Buttons/ButtonCards/ButtonCards"
import PropTypes from "prop-types"

function CardGame(props) {

    const { NameGame, Category, Path } = props

    return (
        <div className="card">
            <div className="preview-game">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Agar.io_Logo.png/800px-Agar.io_Logo.png" alt="" />
            </div>
            <div className="gameName-category">
                <h4 className="gameName">{NameGame}</h4>
                <span className="category">{Category}</span>
            </div>
            <div className="container-description">
                <span className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, nobis. Ipsa doloremque voluptate dolor ratione quidem fugiat vero, officiis architecto omnis commodi voluptatum libero possimus quia aliquid eligendi at tempore.</span>
            </div>
            <Link to={Path} className="link-button">
                <ButtonCards contentButton="Entrar e comentar"></ButtonCards>
            </Link>
        </div>
    )
}

export default CardGame

CardGame.propTypes = {
    NameGame: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
    Path: PropTypes.string.isRequired,
}