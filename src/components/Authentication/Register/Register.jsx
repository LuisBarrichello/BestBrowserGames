import "../Authentication.css"
import Logo from "../../Common/Logo/Logo"

function Login() {

    return (
        <main className="main-authentication">
            <div className="hero-login">
                <Logo></Logo>
            </div>
            <div className="container-login">
                <h1 className="title">Junte-se ao jogo! <br /> Crie sua conta</h1>
                <p className="sub-title">Descubra. Avalie. Jogue. Sua jornada pelo mundo dos browser games começa aqui!</p>
                <form action="" className="form">
                    <div className="wrapper-form">
                        <div className="container-input">
                            <label htmlFor="full-name">Nome completo</label>
                            <div className="input">
                                <input type="text" name="full-name" id="full-name" placeholder="Nome Completo..." required/>
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="email">E-mail</label>
                            <div className="input">
                                <input type="email" name="email" id="input-email" placeholder="E-mail..." required/>
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="password">Crie sua senha</label>
                            <div className="input">
                                <input type="password" name="password" id="passoword" placeholder="Senha..." required/>
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="password">Digite novamente sua senha</label>
                            <div className="input">
                                <input type="password" name="password" id="passoword" placeholder="Senha..." required/>
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="date-of-birth">Data de nascimento</label>
                            <div className="input">
                                <input type="date" name="date-of-birth" id="date-of-birth" required/>
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="state">Estado</label>
                            <div className="input">
                                <input type="text" name="state" id="state" placeholder="Estado, ex: São Paulo..." required/>
                            </div>
                        </div>
                        <div className="container-input">
                            <label htmlFor="country">País</label>
                            <div className="input">
                                <input type="text" name="country" id="country" placeholder="País, ex: Brasil..." required/>
                            </div>
                        </div>
                    </div>
                    <div className="container-input-checkbox">
                        <div className="wrapper-input-checkbox">
                            <input type="checkbox" name="terms-conditions" id="terms-conditions" />
                            <p>Eu concordo com os <a href="#">termos e condições</a></p>
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