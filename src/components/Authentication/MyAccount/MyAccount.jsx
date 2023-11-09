import ThirdButton from "../../Common/Buttons/ThirdButton/ThirdButton"
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./MyAccount.css"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function MyAccount() {
    const [decodeState, setDecodeState] = useState(null)

    const getToken = () => {
        const token = Cookies.get('token');
        const dataUserDecoded = jwtDecode(token)

        return dataUserDecoded
    }

    const getDataUser = async () => {
        try {

            const dataUserDecoded = getToken()
            setDecodeState(dataUserDecoded)

        } catch (error) {
            console.error('Error decoding token:', error);
        }
    }

    useEffect(() => {
        getDataUser()
    }, [])

    const handleLogout = () => {
        Cookies.remove('token');
        window.location.href = './'
    }

    return (
        <>
            <Header></Header>
            <main className={decodeState?.roles[0] === 'admin' ? "container-my-account-grid" : 'container-my-account-flex'} >
                {decodeState?.roles[0] === 'admin' ? (
                    <div className="wrapper-section-register">
                        <h2>Cadastrar</h2>
                        <Link to='/registergame'>
                            <ThirdButton text="Cadastrar Game"></ThirdButton>
                        </Link>
                        <Link to='/registercategory'>
                            <ThirdButton text="Cadastrar Categoria"></ThirdButton>
                        </Link>
                    </div>
                ) : null}
                <div className="container-data">
                    <h1>Meus Dados</h1>
                    <div className="wrapper-data-user">
                        <div>
                            <p>Nome: {decodeState?.name}</p>

                        </div>
                        <p>Email: {decodeState?.email}</p>

                        <p>Data de nascimento: {decodeState?.birthDate}</p>
                        <p>País: {decodeState?.country}</p>

                        <p>Estado: {decodeState?.state}</p>
                    </div>

                    <div className="wrapper-butons-data-user">

                        <ThirdButton text="Logout" onClick={handleLogout}></ThirdButton>
                        
                        <Link to="./editdatamyaccount">
                            <ThirdButton text="Editar dados" onClick={handleLogout}></ThirdButton>
                        </Link>

                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export default MyAccount