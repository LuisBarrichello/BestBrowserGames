import LogoIconGamer from '../../../assets/images/logo-game-controller.svg'
import './Logo.css';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <div /* className="logo" */>
            <Link to="/" className='logo'>
                <img src={LogoIconGamer} alt="" /> Best Browser Games
            </Link>
        </div>
    )
}

export default Logo