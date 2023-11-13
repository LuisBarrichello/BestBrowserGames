import { useEffect, useState } from "react";
import utils from "../../assets/js/utils"
import PropTypes from 'prop-types';


function Rating(props) {
    const [ratingsGame, setRatingsGame] = useState([])
    const { isLoaded, gameId } = props

    const handleGetRatings = async () => {
        try {
            const apiUrl = utils.API_BASE_URL;
            const response = await fetch(`${apiUrl}/games/${gameId}/ratings`)
    
            if(!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }
            const dataRatingsGame = await response.json()
            setRatingsGame(dataRatingsGame)
        } catch (error) {
            console.error(error)
        }
    }
    
    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    
    useEffect(() => {
        handleGetRatings();
    }, [])

    return (
        <>
        {console.log(ratingsGame)}
            {ratingsGame.map((rating) => (
                <div className="post-review" key={rating._id}>
                    <span className="name-user">{rating.user.name}</span>
                    <span className="description-review">{rating.description}</span>
                    <div className="wrapper-rating-star">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < rating.score ? 'star-selected' : ''}>★</span>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default Rating

Rating.propTypes = {
    isLoaded: PropTypes.bool,
    gameId: PropTypes.string,
}