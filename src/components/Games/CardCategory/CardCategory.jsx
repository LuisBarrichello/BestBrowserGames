import "./CardCategory.css"
import { Link } from "react-router-dom"
import ButtonCards from "../../Common/Buttons/ButtonCards/ButtonCards"
import PropTypes from "prop-types"

function CardCategory(props) {

    const { Category, Path } = props

    return (
        <div className="card-category">
            <div className="preview-category">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Agar.io_Logo.png/800px-Agar.io_Logo.png" alt="" />
            </div>
            <div className="wrapper-content-card-category">
                <div className="gameName-category">
                    <h4 className="name-category">{Category}</h4>
                </div>
                <div className="container-description">
                    <span className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, nobis. Ipsa doloremque voluptate dolor ratione quidem fugiat vero, officiis architecto omnis commodi voluptatum libero possimus quia aliquid eligendi at tempore.</span>
                </div>
                <Link to={Path} className="link-button">
                    <ButtonCards contentButton="Entrar e comentar"></ButtonCards>
                </Link>
            </div>
        </div>
    )
}

export default CardCategory

CardCategory.propTypes = {
    Category: PropTypes.string.isRequired,
    Path: PropTypes.string.isRequired,
}