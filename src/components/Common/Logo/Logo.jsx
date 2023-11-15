import  { Component } from 'react';
import LogoIconGamer from '../../../assets/images/logo-game-controller.svg'
import './Logo.css';
import { Link } from 'react-router-dom';

class Logo extends Component {
    render() {
        return (
            <div>
                <Link to="/" className='logo'>
                    <img src={LogoIconGamer} alt="" /> 
                    <span className='logo-name'>
                        Best Browser Games
                    </span>
                </Link>
            </div>
        )
    }
}

export default Logo;
