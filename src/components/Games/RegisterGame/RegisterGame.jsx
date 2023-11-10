import "./RegisterGame.css";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function RegisterGame() {
    const [decodeState, setDecodeState] = useState(null)
    const [formDataGame, setFormDataGame] = useState({
        name: '',
        category: {
            _id: '',
            name: ""
        }, 
        description: "",
        url: "",
        imageURL: "",
        videoURL: ""
    })

    const getToken = () => {
        const token = Cookies.get('token');
        const dataUserDecoded = jwtDecode(token)

        return dataUserDecoded
    }

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


    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        const newGame = {
            name: formDataGame.name,
            category: {
                _id: null,
                name: formDataGame.category.name,
            },
            description: formDataGame.description,
            url: formDataGame.url,
            imageURL: formDataGame.imageURL,
            videoURL: formDataGame.videoURL,
        };

        console.log(newGame)

        await handleFecthAPI(newGame)

    };
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'category.name') {
            setFormDataGame({
                ...formDataGame,
                category: {
                    ...formDataGame.category,
                    name: value,
                },
            });
        } else {
            setFormDataGame({
                ...formDataGame,
                [name]: value,
            });
        }

        console.log(formDataGame)
    };

    const handleFecthAPI = async (newGame) => {
        try {
            const token = Cookies.get('token');
            console.log(token)
            const decode = jwtDecode(token)
            const { roles } = decode
            console.log(roles)

            if(roles[0] === 'admn') {
                const apiUrl = 'https://api-best-browser-games-github-luisbarrichello.vercel.app/games';
                const requestData = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": `Bearer ${token}`,
                    },
                        body: JSON.stringify(newGame),
                }
    
                const response = await fetch(apiUrl, requestData);
    
                if (response.ok) {
                    // Limpa o formulário
                    setFormDataGame({
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
            } else {
                throw new Error('Você não possuí acesso para cadastrar jogo')
            }

        } catch (error) {
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
                
                <button className="button-register" type="submit">
                Cadastrar
                </button>
            </form>
            <Footer />
        </main>
    );
}

export default RegisterGame;
