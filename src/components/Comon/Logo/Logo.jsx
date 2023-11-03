import LogoIconGamer from '../../../assets/images/logo-game-controller.svg'
import './Logo.css';

function Logo() {
    return (
        <div className="logo">
            <img src={LogoIconGamer} alt="" /> Browser Game Hub
        </div>
    )
}

export default Logo