import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer"
import SecondaryButton from "../../components/Common/Buttons/SecondaryButton/SecondaryButton"
import { Link } from "react-router-dom";
import "./Home.css"
import ExploreGames from "../../components/Games/ExploreGames/ExploreGames";
import ExploreCategory from "../../components/Games/ExploreCategory/ExploreCategory";
import { useState, useEffect } from "react";
import CardGame from "../../components/Games/CardGame/CardGame";
import utils from "../../assets/js/utils";
import Recommendation from "../../components/Games/Recommendation/Recommendation";


function Home() {
    const [searchResults, setSearchResults] = useState([]);
    const [dataCategoriesForQuery, setDataCategoriesForQuery] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);

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
    
    useEffect(() => {
        handleFecthAPICategories()
        setShowSearchResults(searchResults.length > 0)
    }, [searchResults])

    return (
        <>
            <Header setSearchResults={setSearchResults}></Header>
            <main className="main-home">
            {showSearchResults && searchResults.length > 0 && (
                    <>
                        <div className="cards-games-container-title">
                            <h2>Resultado</h2>
                        </div>
                        {searchResults.map((game) => (
                        <CardGame
                            key={game._id}
                            NameGame={game.name}
                            Category={
                            dataCategoriesForQuery &&
                            dataCategoriesForQuery?.find(
                                (category) => category._id === game.category._id
                            ).name
                            }
                            ImagePath={game.imageURL}
                            PathForPageGame={`/ratingbrowsergames/${game._id}`}
                            Description={game.description}
                        />
                        ))}
                    </>
                )}

                {!showSearchResults && (
                    <>
                        <section className="container-cards-games">
                            <div className="cards-games-container-title">
                                <h2>Explore Novos Horizontes de Jogos</h2>
                                <span>Escolha entre uma variedade de jogos em diferentes categorias e descubra sua próxima aventura. De estratégia a ação, temos algo para todos.</span>
                            </div>
                            <div className="wrapper-cards">
                                <ExploreGames visibleCards={6}></ExploreGames>
                            </div>
                            <Link className="show-more" to="/exploreallgames">
                                <SecondaryButton contentButton="Ver mais"></SecondaryButton>
                            </Link>
                        </section>
                        
                        <section className="container-featured-categories">
                            <div className="featured-categories-container-title">
                                <h2>Explore Novos Horizontes de Jogos</h2>
                                <span>Escolha entre uma variedade de jogos em diferentes categorias e descubra sua próxima aventura. De estratégia a ação, temos algo para todos.</span>
                            </div>
                            <div className="wrapper-cards">
                                <ExploreCategory></ExploreCategory>
                            </div>
                            <Link className="show-more">
                                <SecondaryButton contentButton="Ver mais"></SecondaryButton>
                            </Link>
                        </section>

                        <section className="container-featured-categories">
                        <div className="featured-categories-container-title">
                                <h2>Recomendações de browser games</h2>
                                <span>Deixe-nos ajudá-lo a encontrar seu próximo jogo favorito. Nossas recomendações personalizadas são baseadas em seus gostos e preferências. Explore, jogue e divirta-se!</span>
                            </div>
                            <div className="wrapper-cards">
                                <Recommendation></Recommendation>
                            </div>
                            <Link className="show-more">
                                <SecondaryButton contentButton="Ver mais"></SecondaryButton>
                            </Link>
                        </section>
                    </>
                )}
            </main>
            <Footer></Footer>
        </>
    )
}

export default Home