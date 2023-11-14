import Header from "../../Common/Header/Header"
import Footer from "../../Common/Footer/Footer"
import { useParams } from "react-router-dom"
import utils from "../../../assets/js/utils"
import { useEffect, useState } from "react"
import CardGame from "../CardGame/CardGame"

function GameByCategory() {
    const [dataGamesForQuery, setDataGamesForQuery] = useState([])

    const categoryIdByURL = useParams()

    const handleFetchAPIGames = async () => {
        try {
            const apiUrl = utils.API_BASE_URL;
            const response = await fetch(`${apiUrl}/games`)
            if(!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }
            const dataGames = await response.json()
            setDataGamesForQuery(dataGames)
        } catch (error) {
            console.error(error)
        }
    } 

    const gamesInCategory = dataGamesForQuery.filter(game => game.category._id === categoryIdByURL.id);
    const isCategoryEmpty = gamesInCategory.length === 0;

    useEffect(() => {
        handleFetchAPIGames()
    }, [])

    return (
        <>
            <Header></Header>
            <main>
                <section className="container-cards-games">
                    <div className="cards-games-container-title">
                        <h2>Jogos da categoria {dataGamesForQuery.find(game => game.category._id === categoryIdByURL.id)?.category.name}</h2>
                    </div>
                    <div className="wrapper-cards">
                        {gamesInCategory.map((game) => (
                            <CardGame 
                                key={game._id}
                                NameGame={game.name} 
                                Category={game.category.name} 
                                ImagePath={game.imageURL}
                                PathForPageGame={`/ratingbrowsergames/${game._id}`} 
                                Description={game.description}
                            ></CardGame> 
                        ))}
                    {isCategoryEmpty && <span key={categoryIdByURL.id}>Não há games dessa categoria ainda, experimente outras categorias enquanto nossos administradores cadastram jogos desta categoria </span>}
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default GameByCategory