import "../Authentication.css"
import eyeIcon from '../../../assets/images/eye.svg';
import Logo from "../../Comon/Logo/Logo";


function Login() {

    return (
        <main>
            <div className="hero-login">
                <Logo></Logo>
            </div>
            <div className="container-login">
                <h1 className="title">Junte-se ao jogo!</h1>
                <p className="sub-title">Descubra. Avalie. Jogue. Sua jornada pelo mundo dos browser games começa aqui!</p>
                <form action="" className="form">
                    <div className="wrapper-form">
                        <div className="container-input">
                            <label htmlFor="email">E-mail</label>
                            <div className="input">
                                <input type="email" name="email" id="input-email" placeholder="Digite seu E-mail..." />
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="password">Senha</label>
                            <div className="input">
                                <input type="password" name="password" id="passoword" placeholder="Digite sua senha..."/>
                                <button className="button-show-password">
                                    <img src={eyeIcon} alt="Show Password" className=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container-input-checkbox">
                        <div className="wrapper-input-checkbox">
                            <input type="checkbox" name="terms-conditions" id="terms-conditions" />
                            <p>Eu concordo com os <span>termos e condições</span></p>
                        </div>
                        <div className="wrapper-input-checkbox">
                            <input type="checkbox" name="terms-conditions" id="terms-conditions" />
                            <p>Gostaria de ser informado sobre as últimas notícias e dicas</p>
                        </div>
                    </div>
                    <button className="button-login">Entrar</button>
                </form>
            </div>
        </main>
    )
}

export default Login