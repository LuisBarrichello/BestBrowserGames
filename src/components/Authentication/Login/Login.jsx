import { useState } from 'react';
import eyeIcon from '../../../assets/images/eye.svg';
import eyeIconOff from '../../../assets/images/eye-off.svg'
import Logo from "../../Common/Logo/Logo";
import Cookies from 'js-cookie';
import "../Authentication.css"

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(formData)
    }

    const handleFecthAPI = async (formData) => {
        try {
            const apiUrl = 'https://api-best-browser-games-github-luisbarrichello.vercel.app/users/login';
            const responseData = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(formData),
            }
    
            const response = await fetch(apiUrl, responseData)

            console.log(response.status)
            if (response.status === 201) {
                const data = await response.json();
                console.log(data);

                if ('token' in data) {
                    Cookies.set('token', data.token, { expires: 1 })
                    /* localStorage.setItem('token', data.token); */
                    window.location.href = "/";
                }
            } else {
                const errorData = await response.json();
                setLoginError(errorData.message);
                alert(loginError)
            }
    
        } catch (error) {
            console.error(error)    
        }
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleFecthAPI(formData)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    
    return (
        <main className="main-authentication">
            <div className="hero-login">
                <Logo></Logo>
            </div>
            <div className="container-login">
                <h1 className="title">Junte-se ao jogo!</h1>
                <p className="sub-title">Descubra. Avalie. Jogue. Sua jornada pelo mundo dos browser games começa aqui!</p>
                <form onSubmit={handleSubmit} className="form">
                    <div className="wrapper-form">
                        <div className="container-input">
                            <label htmlFor="email">E-mail</label>
                            <div className="input">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="input-email" 
                                    placeholder="Digite seu E-mail..." 
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="password">Senha</label>
                            <div className="input">
                                <input 
                                    type={showPassword ? 'text' : 'password'}
                                    name="password" 
                                    id="password" 
                                    placeholder="Digite sua senha..."
                                    onChange={handleInputChange}
                                />
                                <button 
                                    className="button-show-password"
                                >
                                    <img 
                                        src={showPassword ? eyeIconOff : eyeIcon} 
                                        alt="Show Password" 
                                        className=""
                                        onClick={togglePasswordVisibility}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="button-login">Entrar</button>
                </form>
            </div>
        </main>
    )
}

export default Login