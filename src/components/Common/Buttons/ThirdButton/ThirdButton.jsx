import "./ThirdButton.css"
import PropTypes from "prop-types" 

function ThirdButton({ text, onClick }) {
    return (
        <button className="button" onClick={onClick}>
        {text}
        </button>
    );
}

export default ThirdButton;

ThirdButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}