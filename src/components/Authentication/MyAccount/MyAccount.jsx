import ThirdButton from "../../Common/Buttons/ThirdButton/ThirdButton"
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import { Link, useActionData } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./MyAccount.css"
import { useState } from "react";

function MyAccount() {
    const { decodeState, setDecodeState } = useState()

    const getData = async () => {
        try {
            const token = await localStorage.getItem('token');
            const dataUserDecoded = jwtDecode(token)
            
            setDecodeState(dataUserDecoded)

        } catch (error) {
            
        }
    }

    useEd

    getData()

    const handleLogout = () => {
        // Implementar a lógica de logout aqui
    }

    return (
        <>
            <Header></Header>
            <main className="container-my-account">
                <div>
                    <Link to='/registergame'>
                        <ThirdButton text="Cadastrar Game"></ThirdButton>
                    </Link>
                </div>
                <div>
                    <h1>Meus Dados</h1>
                    <div>
                        <span>Nome: {decodeState?.name}</span>
                        <apan>Email: {decodeState?.email}</apan>

                        <span>Data de nascimento: {decodeState?.name}</span>
                        <apan>País: {decodeState?.email}</apan>

                        <span>Estado: {decodeState?.name}</span>
                    </div>

                    <button onClick={handleLogout}>Logout</button>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export default MyAccount