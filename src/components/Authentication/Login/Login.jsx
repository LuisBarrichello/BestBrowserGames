import { useState } from 'react';
import eyeIcon from '../../../assets/images/eye.svg';
import Logo from "../../Common/Logo/Logo";
import "../Authentication.css"

const loginUser = async (email, passoword) => {
    try {
        const apiUrl = 'https://api-best-browser-games-github-luisbarrichello-9uxojph5p.vercel.app/Users/loginUser';
        const responseData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(email, passoword),
        }

        const response = await fetch(apiUrl, responseData)

        console.log(response)

        return response

    } catch (error) {
        console.error(error)
    }
}


function Login() {

    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await loginUser({
            email: email, 
            password: password,
        })

        if('token' in response) {
            alert("Success: " + response.message);
            localStorage.setItem('token', response['token'])
            localStorage.setItem('user', JSON.stringify(response['username']))
            window.location.href = "/";
        } else {
            alert("Failed: " + response.message);
            window.location.href = "/register";
        }
    }

    
    return (
        <main className="main-authentication">
            <div className="hero-login">
                <Logo></Logo>
            </div>
            <div className="container-login">
                <h1 className="title">Junte-se ao jogo!</h1>
                <p className="sub-title">Descubra. Avalie. Jogue. Sua jornada pelo mundo dos browser games começa aqui!</p>
                <form action="" onSubmit={handleSubmit} className="form">
                    <div className="wrapper-form">
                        <div className="container-input">
                            <label htmlFor="email">E-mail</label>
                            <div className="input">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="input-email" 
                                    placeholder="Digite seu E-mail..." 
                                    onChange={event => setUsername(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="password">Senha</label>
                            <div className="input">
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="passoword" 
                                    placeholder="Digite sua senha..."
                                    onChange={event => setPassword(event.target.value)}
                                />
                                <button className="button-show-password">
                                    <img src={eyeIcon} alt="Show Password" className=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container-input-checkbox">
                        <div className="wrapper-input-checkbox">
                            <input 
                                type="checkbox" 
                                name="terms-conditions" 
                                id="terms" 
                                required
                            />
                            <p>Eu concordo com os <span>termos e condições</span></p>
                        </div>
                        <div className="wrapper-input-checkbox">
                            <input 
                                type="checkbox" 
                                name="terms-conditions" 
                                id="conditions" 
                                required
                            />
                            <p>Gostaria de ser informado sobre as últimas notícias e dicas</p>
                        </div>
                    </div>
                    <button type="submit" className="button-login">Entrar</button>
                </form>
            </div>
        </main>
    )
}

export default Login