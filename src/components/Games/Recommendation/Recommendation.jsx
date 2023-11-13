import { useState, useEffect } from "react";
import utils from "../../../assets/js/utils";
import { jwtDecode } from "jwt-decode";
import CardGame from "../CardGame/CardGame";


function Recommendation() {
    const [dataGames, setDataGames] = useState([]);
    const [gamesNotRated, setGamesNotRated] = useState([])
    const [visibleCards, setVisibleCards] = useState(6)
    const [dataCategoriesForQuery, setDataCategoriesForQuery] = useState()

    const handleFecthAPIGames = async () => {
        try {
            const apiUrl = utils.API_BASE_URL;
            const response = await fetch(`${apiUrl}/games`)
            if(!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }
            const dataGames = await response.json()
            setDataGames(dataGames)
        } catch (error) {
            console.error(error)
        }
    }

    const handleFecthAPICategories = async () => {
        try {
            const apiUrl = utils.API_BASE_URL;
            const response = await fetch(`${apiUrl}/categories`)
            if(!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }
            const dataCategories = await response.json()
            setDataCategoriesForQuery(dataCategories)
            
        } catch (error) {
            console.error(error)
        }
    }

    const getGamesNotRated = () => {
        const userToken = utils.getToken();
        if(userToken === undefined) {
            alert('Faça login para acessar as recomendações personalizadas')
            setGamesNotRated([]); 
            return;
        }
        const userId = jwtDecode(userToken).id;
        const gamesNotRatedForUser = dataGames.filter((game) => {
            return game.ratings.every((rating) => rating.user !== userId)
        })

        setGamesNotRated(gamesNotRatedForUser)
    }

    useEffect(() => {
        handleFecthAPIGames()
        handleFecthAPICategories()
    }, [])
    
    useEffect(() => {
        getGamesNotRated()
    }, [dataGames])

    return (
        <>
            {gamesNotRated.slice(0,visibleCards).map((game) => (
                <CardGame
                    key={game._id}
                    NameGame={game.name}
                    Category={
                        (dataCategoriesForQuery.find((category) => category._id === game.category._id)).name
                    }
                    ImagePath={game.imageURL}
                    PathForPageGame={`/ratingbrowsergames/${game._id}`}
                    Description={game.description}
                ></CardGame>
            ))}
        </>
    )
}

export default Recommendation