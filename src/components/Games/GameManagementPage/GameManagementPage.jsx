import utils from "../../../assets/js/utils"
import { useEffect, useState } from "react";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import ThirdButton from "../../Common/Buttons/ThirdButton/ThirdButton";
import "./GameManagementPage.css"
import Cookies from "js-cookie";

function GameManagementPage() {
    const [categories, setCategories] = useState([]);
    const [isEditing, setIsEditing] = useState(false)
    const [editingGame, setEditingGame] = useState(null)
    const [dataGamesForQuery, setDataGamesForQuery] = useState([])

    const requestCategorys = async () => {
        try {
            const apiUrl = `${utils.API_BASE_URL}/categories`;
            const response = await fetch(apiUrl)
            if (!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }
            const data = await response.json()
            setCategories(data)
        } catch (error) {
            console.error(error)
        }
    } 

    const handleFecthAPIGames = async () => {
        try {
            const apiUrl = utils.API_BASE_URL;
            const response = await fetch(`${apiUrl}/games`)
            if(!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }
            const dataGames = await response.json()
            console.log(dataGames)
            setDataGamesForQuery(dataGames)
        } catch (error) {
            console.error(error)
        }
    } 

    const handleSaveClick = async () => {
        try {
            const token = Cookies.get('token');
            console.log(editingGame._id)
            const apiUrl = utils.API_BASE_URL;
            const requestData = {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `Bearer ${token}`,
                },
                body: JSON.stringify(editingGame)
            };
            const response = await fetch(`${apiUrl}/games/${editingGame._id}`, requestData)
    
            if (!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }
    
            /* handleFecthAPIGames() */
    
            setIsEditing(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleEditClick = (game) => {
        setIsEditing(true)
        setEditingGame(game)
        console.log(isEditing, editingGame)
    }   

    const handleDeleteClick = async (game) => {
        try {
            const gameId = game._id
            const token = Cookies.get('token');
            const apiUrl = utils.API_BASE_URL;
            const requestData = {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `Bearer ${token}`,
                }
            };
            const response = await fetch(`${apiUrl}/games/${gameId}`, requestData)

            if (!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }

            handleFecthAPIGames()
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditingGame(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(editingGame)
    }

    useEffect(() => {
        handleFecthAPIGames()
        requestCategorys()
    }, [])


    return (
        <>
            <Header></Header>
            <main className="GameManagementPage-wrapper-cards-games">
                <div>
                    <h1>Edição de Jogos</h1>
                </div>
                <section className="GameManagementPage-wrapper-cards">
                    {dataGamesForQuery.map((game) => (
                        <div className={isEditing && editingGame._id === game._id ? "form-card-edit card" : "card"} key={game._id}>
                            {isEditing && editingGame._id === game._id ? (
                                <form>
                                    <label htmlFor="imageURL">Image URL:</label>
                                    <input
                                        type="text"
                                        id="imageURL"
                                        value={editingGame.imageURL}
                                        onChange={(e) =>
                                            setEditingGame({ ...editingGame, imageURL: e.target.value })
                                        }
                                    />
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={editingGame.name}
                                        onChange={(e) =>
                                            setEditingGame({ ...editingGame, name: e.target.value })
                                        }
                                    />
                                    <label htmlFor="category">Category:</label>
                                    <select 
                                        type="text"
                                        name="category._id"
                                        id="category"
                                        placeholder="Categoria..."
                                        required
                                        value={editingGame.category.name} 
                                        onChange={(e) =>
                                            setEditingGame({ ...editingGame, description: e.target.value })
                                        }
                                    >
                                        {/* <option value='Selecione uma categoria'  disabled>Selecione uma categoria</option> */}
                                        {categories.map(category => (
                                            <option key={category._id} value={category.name}>{category.name}</option>
                                        ))}
                                    </select>
                                    <label htmlFor="description">Description:</label>
                                    <textarea
                                        id="description"
                                        value={editingGame.description}
                                        onChange={(e) =>
                                            setEditingGame({ ...editingGame, description: e.target.value })
                                        }
                                    />
                                    <div className="GameManagementPage-wrapper-buttons">
                                        <ThirdButton
                                            onClick={() => handleSaveClick()}
                                            text="Salvar"
                                        ></ThirdButton>
                                        <ThirdButton
                                            onClick={() => setIsEditing(false)}
                                            text="Cancelar"
                                        ></ThirdButton>
                                    </div>
                                </form>
                                ) : (
                                    <>
                                    
                                    <div className="preview-game">
                                        <img src={game.imageURL} alt="" />
                                    </div>
                                    <div className="gameName-category">
                                        <h4 className="gameName">{game.name}</h4>
                                        <span className="card-game-category">{game.category.name}</span>
                                    </div>
                                    <div className="container-description">
                                        <span className="description-card-game">{game.description}</span>
                                    </div>
                                    <div className="GameManagementPage-wrapper-buttons">
                                            <ThirdButton 
                                                onClick={() => handleEditClick(game)}
                                                text="Editar">
                                            </ThirdButton>
                                            <ThirdButton 
                                                onClick={() => handleDeleteClick()}  text="Deletar">
                                            </ThirdButton>
                                    </div>
                                    </>
                                )}
                        </div>
                    ))}
                </section>
            </main>
            <Footer></Footer>
        </>
    )

}

export default GameManagementPage