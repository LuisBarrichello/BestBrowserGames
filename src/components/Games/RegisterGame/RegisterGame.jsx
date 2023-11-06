import "./RegisterGame.css";
import Footer from "../../Comon/Footer/Footer";
import Header from "../../Comon/Header/Header";

function RegisterGame() {
    return (
        <main>
            <Header />
            <h1 className="title">Adicionar Novo Jogo</h1>
            <form action="" className="form">
                <div className="container-input">
                <label htmlFor="game-title">Título do jogo</label>
                <div className="input">
                    <input
                    type="text"
                    name="game-title"
                    id="game-title"
                    placeholder="Título do jogo..."
                    required
                    />
                </div>
                </div>

                <div className="container-input">
                <label htmlFor="category">Categoria</label>
                <div className="input">
                    <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Categoria..."
                    required
                    />
                </div>
                </div>

                <div className="container-input">
                    <label htmlFor="game-url">URL de acesso ao jogo</label>
                    <div className="input">
                        <input
                        type="text"
                        name="game-url"
                        id="game-url"
                        placeholder="URL de acesso ao jogo..."
                        required
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
                    name="demo-video-url"
                    id="demo-video-url"
                    placeholder="URL do vídeo de demonstração (opcional)..."
                    />
                </div>
                </div>

                <div className="container-input">
                <label htmlFor="game-description">Descrição</label>
                <div className="input">
                    <textarea
                    name="game-description"
                    id="game-description"
                    maxLength="250"
                    rows="4"
                    placeholder="Descrição do jogo..."
                    required
                    ></textarea>
                </div>
                </div>

                <div className="container-input">
                <label htmlFor="image-url">URL Imagem ilustrativa</label>
                <div className="input">
                    <input
                    type="text"
                    name="image-url"
                    id="image-url"
                    placeholder="Imagem ilustrativa..."
                    required
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
