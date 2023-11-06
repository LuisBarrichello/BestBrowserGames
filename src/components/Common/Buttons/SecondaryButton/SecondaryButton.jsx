import "./SecondaryButton.css"
import PropTypes from "prop-types" 

function SecondaryButton(props) {
  const { contentButton } = props

  return (
    <button className="button">
      {contentButton}
    </button>
  );
}

export default SecondaryButton;

SecondaryButton.propTypes = {
  contentButton: PropTypes.string.isRequired,
}