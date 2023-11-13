import utils from "../../../assets/js/utils"
import { useEffect, useState } from "react";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import ThirdButton from "../../Common/Buttons/ThirdButton/ThirdButton";
import "./GameManagementPage.css"
import Cookies from "js-cookie";

function GameManagementPage() {
    const [isEditing, setIsEditing] = useState(false)
    const [editingGame, setEditingGame] = useState(null)
    const [dataGamesForQuery, setDataGamesForQuery] = useState([])

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
    
            handleFecthAPIGames()
    
            setIsEditing(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleEditClick = (game) => {
        setIsEditing(true)
        setEditingGame(game)
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

    useEffect(() => {
        handleFecthAPIGames()
    }, [])


    return (
        <>
            <Header></Header>
            <main className="GameManagementPage-wrapper-cards-games">
                {dataGamesForQuery.map((game) => (
                    <>
                        <div className="card">
                            <div className="preview-game">
                                <img src={game.imageUrl} alt="" />
                            </div>
                            <div className="gameName-category">
                                <h4 className="gameName">{game.name}</h4>
                                <span className="card-game-category">{game.category}</span>
                            </div>
                            <div className="container-description">
                                <span className="description-card-game">{game.descriptin}</span>
                            </div>
                            <div>
                                <ThirdButton contentButton="Editar"></ThirdButton>
                                <ThirdButton contentButton="Deletar"></ThirdButton>
                            </div>
                        </div>
                    </>
                ))}
            </main>
            <Footer></Footer>
        </>
    )

}

export default GameManagementPage