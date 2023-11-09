/* import { useState } from "react"; */
import "./EditRegistrationData.css";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

function EditRegistrationData() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        birthDate: "",
        country: "",
        state: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(formData)
    }

    const handleFecthAPI = async () => {

        try {
            const token = localStorage.getItem('token')
            const decode = jwtDecode(token)
            const userId = decode.id
            console.log(decode.id)

            
            const apiUrl = `https://api-best-browser-games-github-luisbarrichello.vercel.app/users/${userId}`
            const requestData = {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            }
    
            const response = await fetch(apiUrl, requestData)
    
            console.log(response.status)


            if (response.ok) {
                const data = await response.json();
                console.log(data)
                alert('Alterações de cadastro enviado com sucesso')
            } else {
                    throw new Error(`HTTP error! status: ${response.status}`);
            }

        } catch (error) {
            console.error(error)
        }
    }
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await handleFecthAPI()
    };

    return (
        <>
            <Header />
            <main>
                <form onSubmit={handleFormSubmit} className="edit-registration-form">
                <fieldset>
                    <legend className="title">Editar Dados de Cadastro</legend>
                    <section className="form-section">
                    <label htmlFor="name">Nome Completo:</label>
                        <div className="input">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Nome Completo..."
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                    </section>
        
                    <section className="form-section">
                        <label htmlFor="email">E-mail:</label>
                        <div className="input">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email..."
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                    </section>
        
                    <section className="form-section">
                        <label htmlFor="birthDate">Data de Nascimento:</label>
                        <div className="input">
                            <input
                                type="date"
                                id="birthDate"
                                name="birthDate"
                                placeholder="Data de Nascimento..."
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                    </section>
        
                    <section className="form-section">
                        <label htmlFor="country">País:</label>
                        <div className="input">
                            <input
                                type="text"
                                id="country"
                                name="country"
                                placeholder="País..."
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                    </section>
        
                    <section className="form-section">
                        <label htmlFor="state">Estado:</label>
                        <div className="input">
                            <input
                                type="text"
                                id="state"
                                name="state"
                                placeholder="Estado..."
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                    </section>

                    <button type="submit" className="button-submit">Salvar Alterações</button>
                </fieldset>
                </form>
            </main>
            <Footer />
        </>
    );
    
}

export default EditRegistrationData;
