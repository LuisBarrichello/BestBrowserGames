import "./RegisterGame.css";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import { useState } from "react";

function RegisterGame() {
    const [formData, setFormData] = useState({
        name: '',
        category: {
            _id: null,
            name: ""
        }, 
        description: "",
        url: "",
        imageURL: "",
        videoURL: ""
    })

    /* VERIFICAR ROLE PARA USUARIO CADASTRAR CATEGORIA */

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        const newGame = {
            name: formData.name,
            category: {
                _id: null,
                name: formData.category.name,
            },
            description: formData.description,
            url: formData.url,
            imageURL: formData.imageURL,
            videoURL: formData.videoURL,
        };

        console.log(newGame)

        await handleFecthAPI(newGame)

    };
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'category.name') {
            setFormData({
                ...formData,
                category: {
                    ...formData.category,
                    name: value,
                },
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }

        console.log(formData)
    };

    const handleFecthAPI = async (newGame) => {
        try {
            const token = localStorage.getItem('token')
            const apiUrl = 'https://api-best-browser-games-github-luisbarrichello.vercel.app/games';
            const requestData = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
                },
                    body: JSON.stringify(newGame),
            }

            const response = await fetch(apiUrl, requestData);

            if (response.ok) {
                // Limpa o formulário
                setFormData({
                    name: "",
                    category: {
                        _id: "",
                        name: "",
                    },
                    description: "",
                    url: "",
                    imageURL: "",
                    videoURL: "",
                })
            } else {
                console.error("Erro ao cadastrar o jogo");
            }

        } catch (error) {
            // Se houver um erro na solicitação, você pode lidar com ele aqui
            console.error("Erro ao cadastrar o jogo", error);
        }        
    }

    return (
        <main>
            <Header />
            <h1 className="title">Adicionar Novo Jogo</h1>
            <form onSubmit={handleFormSubmit} className="form">
                <div className="container-input">
                <label htmlFor="game-title">Título do jogo</label>
                <div className="input">
                    <input
                    type="text"
                    name="name"
                    id="game-title"
                    placeholder="Título do jogo..."
                    required
                    onChange={handleInputChange}
                    />
                </div>
                </div>

                <div className="container-input">
                <label htmlFor="category">Categoria</label>
                <div className="input">
                    <input
                    type="text"
                    name="category.name"
                    id="category"
                    placeholder="Categoria..."
                    required
                    onChange={handleInputChange}
                    />
                </div>
                </div>

                <div className="container-input">
                    <label htmlFor="game-url">URL de acesso ao jogo</label>
                    <div className="input">
                        <input
                        type="text"
                        name="url"
                        id="game-url"
                        placeholder="URL de acesso ao jogo..."
                        required
                        onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="container-input">
                <label htmlFor="demo-video-url">
                    URL do vídeo de demonstração (opcional)
                </label>
                <div className="input">
                    <input
                    type="text"
                    name="videoURL"
                    id="demo-video-url"
                    placeholder="URL do vídeo de demonstração (opcional)..."
                    onChange={handleInputChange}
                    />
                </div>
                </div>

                <div className="container-input">
                <label htmlFor="game-description">Descrição</label>
                <div className="input">
                    <textarea
                    name="description"
                    id="game-description"
                    maxLength="250"
                    rows="4"
                    placeholder="Descrição do jogo..."
                    required
                    onChange={handleInputChange}
                    ></textarea>
                </div>
                </div>

                <div className="container-input">
                <label htmlFor="imageURL">URL Imagem ilustrativa</label>
                <div className="input">
                    <input
                    type="text"
                    name="imageURL"
                    id="image-url"
                    placeholder="Imagem ilustrativa..."
                    required
                    onChange={handleInputChange}
                    />
                </div>
                </div>
                
                <button className="button-register" type="submit">
                Cadastrar
                </button>
            </form>
            <Footer />
        </main>
    );
}

export default RegisterGame;
