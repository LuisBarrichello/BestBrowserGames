import "../Authentication.css"
import Logo from "../../Common/Logo/Logo"
import { useState } from "react";

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
        country: '',
        state: '',
    });

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
            const apiUrl = 'https://api-best-browser-games-github-luisbarrichello.vercel.app/users';
            const requestData = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            };
            
            const response = await fetch(apiUrl, requestData)

            const data = await response.json();
            console.log(data);

            if (!response.ok) {
                throw new Error(`Erro ao cadastrar - ${response.message}`);
            }

            alert("Usuário registrado com sucesso!");
            window.location.href = "/"

        } catch (error) {
            console.error(error)
        }
    } 

    const handleSubmit = async (event) => {
        event.preventDefault()        
        await handleFecthAPI(formData)
    }

    return (
        <main className="main-authentication">
            <div className="hero-login">
                <Logo></Logo>
            </div>
            <div className="container-login">
                <h1 className="title">Junte-se ao jogo! <br /> Crie sua conta</h1>
                <p className="sub-title">Descubra. Avalie. Jogue. Sua jornada pelo mundo dos browser games começa aqui!</p>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="wrapper-form">
                        <div className="container-input">
                            <label htmlFor="name">Nome completo</label>
                            <div className="input">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Nome Completo..."
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="email">E-mail</label>
                            <div className="input">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="E-mail..."
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="password">Crie sua senha</label>
                            <div className="input">
                                <input type="password" name="password" id="password" placeholder="Senha..." required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="confirmPassword">Digite novamente sua senha</label>
                            <div className="input">
                                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Senha..." required
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="birthDate">Data de nascimento</label>
                            <div className="input">
                                <input type="date" name="birthDate" id="birthDate" required 
                                    value={formData.birthDate}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="country">País</label>
                            <div className="input">
                                <input type="text" name="country" id="country" placeholder="País, ex: Brasil..." required
                                    value={formData.country}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="state">Estado</label>
                            <div className="input">
                                <input type="text" name="state" id="state" placeholder="Estado, ex: São Paulo..." required
                                    value={formData.state}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div className="container-input-checkbox">
                        <div className="wrapper-input-checkbox">
                            <input type="checkbox" name="terms-conditions" id="terms-conditions" onChange={handleInputChange}/>
                            <p>Eu concordo com os <a href="#">termos e condições</a></p>
                        </div>
                        <div className="wrapper-input-checkbox">
                            <input type="checkbox" name="terms-conditions" id="terms-conditions" onChange={handleInputChange}/>
                            <p>Gostaria de ser informado sobre as últimas notícias e dicas</p>
                        </div>
                    </div> */}
                    <button className="button-login">Entrar</button>
                </form>
            </div>
        </main>
    )
}

export default Register