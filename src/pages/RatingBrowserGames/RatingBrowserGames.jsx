    /* import SecondaryButton from "../../Comon/Buttons/SecondaryButton/SecondaryButton"; */
import Header from "../../components/Common/Header/Header"
import "./RatingBrowserGames.css"
import ThirdButton from "../../components/Common/Buttons/ThirdButton/ThirdButton"
import Footer from "../../components/Common/Footer/Footer"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import utils from "../../assets/js/utils"
import { jwtDecode } from "jwt-decode"
import Rating from "../../components/Rating/Rating"


function RatingBrowserGames() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [ratingsGame, setRatingsGame] = useState([])
    const [dataGame, setDataGame] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [rating, setRating] = useState({
        score: 0,
        description: '',
        game: '',
        user: '',
    });

    const { id } = useParams();
    const apiUrl = utils.API_BASE_URL

    const handleGetRatings = async () => {
        try {
            const apiUrl = utils.API_BASE_URL;
            const response = await fetch(`${apiUrl}/games/${dataGame._id}/ratings`)
    
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

    const handleFecthAPIGame = async () => {
        try {
            const response = await fetch(`${apiUrl}/games/${id}`)

            if(!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }

            const data = await response.json()
            setDataGame(data)
            setRating(prevState => ({
                ...prevState,
                game: data._id
            }))
            setIsLoaded(true)
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmitRating = async (rating) => {
        try {
            const token = utils.getToken()
            const requestData = {
                method: "POST",  
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `Bearer ${token}`,
                },
                    body: JSON.stringify(rating),
            }
            const response = await fetch(`${apiUrl}/ratings`, requestData)


            if (!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }

            const data = await response.json();
            alert(data.message);

        } catch (error) {
            console.error(error)
        }
    }

    const handleSetUserAndGame = () => {
        const tokenUser = utils.getToken()

        if (!tokenUser) {
            alert("Por favor, faça seu login ou cadastro para pode avaliar o jogo");
            setIsUserLoggedIn(false);
            return;
        }

        const dataUserDecoded = jwtDecode(tokenUser)

        console.log(dataUserDecoded)

        setRating({
            user: dataUserDecoded.id
        })

        setIsUserLoggedIn(true);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        if (!rating.description) {
            alert('Por favor, insira uma descrição para a avaliação.');
            return;
        }

        await handleSubmitRating(rating)

        setRating({
            score: 0,
            description: '',
            game: '',
            user: '',
        })
    }

    useEffect(() => {
        handleFecthAPIGame();
        handleSetUserAndGame();
    }, [id]);

    useEffect(() => {
        if (dataGame._id) {
            handleGetRatings();
        }
    }, [dataGame._id]);
    

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        
        setRating(prevState => ({
            ...prevState,
            [name]: name === 'score' ? +value : value
        }));
    }  

    return (
        <>
            <Header></Header>
            <main className="main-rating-game">
                <section className="continer-rating">
                    <div className="container-title-page">
                        <h1 className="title">Detalhes do Jogo</h1>
                        <span>Conheça mais sobre este emocionante jogo de categoria {dataGame.category.name}. Aventure-se em {dataGame.name} e compartilhe sua avaliação.</span>
                    </div>
                    <section className="container-game-infos">
                        <div className="title-preview">
                            <h2 className="title-game">{dataGame.name}</h2>
                            <div className="preview">
                                <img src={dataGame.imageURL} alt="" />
                            </div>
                        </div>
                        <div className="wrapper-infos-game">
                            <div className="gamen-now">
                                <a href={dataGame.url} target="blank" rel="noopener noreferrer">
                                    <ThirdButton text="Jogar agora"></ThirdButton>
                                </a>
                            </div>
                            <div className="container-description-page-game">
                                <h3 className="description-title">Descrição</h3>
                                <p className="description-page-game">{dataGame.description}</p>
                            </div>
                            <div className="category">
                                <h3 className="category-title-page-game">Categoria</h3>
                                <span>{dataGame.category.name}</span>
                            </div>
                        </div>
                    </section>
                    <section className="container-review">
                        <div className="container-review-title">
                            <h2>Avaliações</h2>
                            <span>Deixe sua avaliação</span>
                        </div>
                        {isUserLoggedIn && (
                            <form  onSubmit={handleFormSubmit} className="container-input-review">
                            <div className="container-input-review">
                                <label htmlFor="review-text"></label>
                                <textarea 
                                    name="description" 
                                    id="review-text" 
                                    cols="30" 
                                    rows="4" 
                                    placeholder="Digite sua avaliação aqui"
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div className="container-input-review-stars-button-submit">
                                <div className="container-input-review-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i}>
                                            <input
                                                type="radio"
                                                name="score"
                                                id={`star${i + 1}`}
                                                value={i + 1}
                                                onChange={handleInputChange}
                                            />
                                            <label 
                                                htmlFor={`star${i + 1}`}
                                                className={i < rating.score ? 'star-selected' : ''}
                                            >★</label>
                                        </span>
                                    ))}
                                </div>
                                <ThirdButton text="Avaliar" type="submit"></ThirdButton>
                            </div>
                        </form>
                        )}
                        
                        <div className="container-post-reviews">
                            <Rating isLoaded={isLoaded} ratingsGame={ratingsGame} userID={rating.user} ></Rating>
                            {/* REVIEWS AQUI */}
                        </div>
                    </section>
                </section>
                <Footer></Footer>
            </main>
        </>
    )
}

export default RatingBrowserGames