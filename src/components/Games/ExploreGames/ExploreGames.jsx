import { useEffect, useState } from "react";
import utils from "../../../assets/js/utils";
import CardGame from "../CardGame/CardGame";
import PropTypes from 'prop-types'; 

function ExploreGames({visibleCards}) {
    const [dataGames, setDataGames] = useState([]);
    const [dataCategoriesForQuery, setDataCategoriesForQuery] = useState()

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

    useEffect(() => {
        handleFecthAPIGames();
        handleFecthAPICategories();
    }, [])

    return (
        <>
            {dataGames.slice(0,visibleCards).map((game) => (
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

export default ExploreGames

ExploreGames.propTypes = {
    visibleCards: PropTypes.number
}