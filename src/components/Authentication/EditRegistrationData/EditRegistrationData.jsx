/* import { useState } from "react"; */
import "./EditRegistrationData.css";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";

function EditRegistrationData() {
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Header></Header>
            <main>
                <div className="edit-registration-form">
                    <h1 className="title">Editar Dados de Cadastro</h1>
                    <form onSubmit={handleFormSubmit} className="form">
                        <div className="container-input">
                            <label>Nome Completo:</label>
                            <div className="input">
                                <input
                                    type="text"
                                    name="nome"
                                    placeholder="Nome Completo..."
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="container-input">
                            <label>E-mail:</label>
                            <div className="input">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email..."
                                    required
                                />
                            </div>
                        </div>

                        <div className="container-input">
                            <label>Data de Nascimento:</label>
                            <div className="input">
                                <input
                                    type="date"
                                    name="dataNascimento"
                                    placeholder="Data de Nascimento..."
                                    required
                                />
                            </div>
                        </div>

                        <div className="container-input">
                            <label>Estado:</label>
                            <div className="input">
                                <input
                                    type="text"
                                    name="estado"
                                    placeholder="Estado..."
                                    required
                                />
                            </div>
                        </div>

                        <div className="container-input">
                            <label>País:</label>
                            <div className="input">
                                <input
                                    type="text"
                                    name="país"
                                    placeholder="País..."
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="button-submit">Salvar Alterações</button>
                    </form>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default EditRegistrationData;
