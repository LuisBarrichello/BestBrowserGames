import Header from "../../Common/Header/Header";
import ExploreGames from "../ExploreGames/ExploreGames";
import Footer from "../../Common/Footer/Footer";



function ExploreAllGames() {

    return (
        <>
            <Header></Header>
            <main>
                <section className="container-cards-games">
                    <div className="cards-games-container-title">
                        <h2>Explore todos os Jogos</h2>
                    </div>
                    <div className="wrapper-cards">
                        <ExploreGames visibleCards={Infinity}></ExploreGames>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default ExploreAllGames