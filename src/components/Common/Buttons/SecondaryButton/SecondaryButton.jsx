import "./SecondaryButton.css"
import PropTypes from "prop-types" 

function SecondaryButton(props) {
  const { contentButton, OnClick } = props

  return (
    <button onClick={OnClick} className="button">
      {contentButton}
    </button>
  );
}

export default SecondaryButton;

SecondaryButton.propTypes = {
  contentButton: PropTypes.string.isRequired,
  OnClick: PropTypes.func
}