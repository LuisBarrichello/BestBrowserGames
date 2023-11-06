import "./ButtonCards.css"
import PropTypes from "prop-types"

function ButtonCards(props) {
    const { contentButton } = props
    return (
        <button className="button-cards">
            <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="button-text">{contentButton}</span>
        </button>
    )
}

export default ButtonCards

ButtonCards.propTypes = {
    contentButton: PropTypes.string.isRequired
}