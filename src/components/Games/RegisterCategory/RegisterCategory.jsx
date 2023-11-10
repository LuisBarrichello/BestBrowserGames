import "./RegisterCategory.css";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function RegisterCategory() {
    const [ nameCategory, setNameCategory] = useState('')
    const [decodeState, setDecodeState] = useState(null);

    /* Verifica se o usuario tem permissao para cadastra */
    const getToken = () => {
        const token = Cookies.get('token');
        console.log(token)
        const dataUserDecoded = jwtDecode(token)
        return dataUserDecoded
    };

    const verifyRoleUser = () => {
        try {
            const dataUserDecoded = getToken()
            setDecodeState(dataUserDecoded)
            if(dataUserDecoded.roles[0] === 'admin') {
                return true
            } else {
                alert('Você não possuí permissão para cadastrar')
                window.location.href = '/'
                return false
            }
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    }

    useEffect(() => {
        verifyRoleUser()
    }, [])

    
    const handleInputChange = (event) => {
        const { value } = event.target;
        setNameCategory(value)
        console.log(nameCategory)
    }

    const handleFecthAPI = async ()  => {
        try {
            const token = Cookies.get('token');
            console.log(token);

            const apiUrl = 'https://api-best-browser-games-github-luisbarrichello.vercel.app/categories';
            const requestData = {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name: nameCategory})
            }
            const response = await fetch(apiUrl, requestData)
            if (!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error)
        }
    }

    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await handleFecthAPI()
    }


    return (
        <>
            <Header></Header>
            <main className="RegisterCategory">
                <h1 className="title">Adicionar Nova Categoria</h1>
                <form onSubmit={handleFormSubmit} className="form">
                <div className="container-input">
                    <label htmlFor="category-title">Título da Categoria</label>
                    <div className="input">
                        <input
                        type="text"
                        name="name"
                        id="category-title"
                        placeholder="Título da Categoria..."
                        required
                        onChange={handleInputChange}
                        />
                    </div>
                </div>
                
                <button className="button-register" type="submit">
                Cadastrar
                </button>
            </form>
            </main>
            <Footer></Footer>
        </>

    )
}

export default RegisterCategory