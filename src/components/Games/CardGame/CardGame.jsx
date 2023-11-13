import "./CardGame.css"
import { Link } from "react-router-dom"
import ButtonCards from "../../Common/Buttons/ButtonCards/ButtonCards"
import PropTypes from "prop-types"

function CardGame(props) {

    const { NameGame, Category, ImagePath , PathForPageGame, Description } = props

    return (
        <div className="card">
            <div className="preview-game">
                <img src={ImagePath} alt="" />
            </div>
            <div className="gameName-category">
                <h4 className="gameName">{NameGame}</h4>
                <span className="card-game-category">{Category}</span>
            </div>
            <div className="container-description">
                <span className="description-card-game">{Description}</span>
            </div>
            <Link to={PathForPageGame} className="link-button">
                <ButtonCards contentButton="Entrar e comentar"></ButtonCards>
            </Link>
        </div>
    )
}

export default CardGame

CardGame.propTypes = {
    NameGame: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
    PathForPageGame: PropTypes.string.isRequired,  
    ImagePath: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
};
