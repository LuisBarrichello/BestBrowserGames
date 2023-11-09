import "./RegisterCategory.css";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import { useState } from "react";

function RegisterCategory() {
    const [ nameCatedory, setNameCategory] = useState('')

    /* VERIFICAR ROLE PARA USUARIO CADASTRAR CATEGORIA */
    
    const handleInputChange = (event) => {
        const { value } = event.target;
        setNameCategory(value)
        console.log(nameCatedory)
    }

    const handleFecthAPI = async ()  => {
        try {
            const apiUrl = 'https://api-best-browser-games-github-luisbarrichello.vercel.app/categories';
            const requestData = {
                method: 'POST',
                header: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nameCatedory)
            }

            const response = await fetch(apiUrl, requestData)

            
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
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