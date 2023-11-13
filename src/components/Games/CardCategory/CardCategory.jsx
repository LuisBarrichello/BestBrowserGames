import "./CardCategory.css"
import { Link } from "react-router-dom"
import ButtonCards from "../../Common/Buttons/ButtonCards/ButtonCards"
import PropTypes from "prop-types"

function CardCategory(props) {

    const { Category, Path } = props

    return (
        <div className="card-category">
                <div className="gameName-category">
                    <h4 className="card-name-category">{Category}</h4>
                </div>
                <Link to={Path} className="link-button">
                    <ButtonCards contentButton="Ver jogos"></ButtonCards>
                </Link>
        </div>
    )
}

export default CardCategory

CardCategory.propTypes = {
    Category: PropTypes.string.isRequired,
    Path: PropTypes.string.isRequired,
}