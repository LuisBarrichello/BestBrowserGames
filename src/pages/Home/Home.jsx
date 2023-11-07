import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer"
import CardGame from "../../components/Games/CardGame/CardGame";
import SecondaryButton from "../../components/Common/Buttons/SecondaryButton/SecondaryButton"
import { Link } from "react-router-dom";
import "./Home.css"
import CardCategory from "../../components/Games/CardCategory/CardCategory";



function Home() {


    return (
        <>
            <Header></Header>
            <main className="main-home">
                <section className="container-cards-games">
                    <div className="cards-games-container-title">
                        <h2>Explore Novos Horizontes de Jogos</h2>
                        <span>Escolha entre uma variedade de jogos em diferentes categorias e descubra sua próxima aventura. De estratégia a ação, temos algo para todos.</span>
                    </div>
                    <div className="wrapper-cards">
                        <CardGame NameGame="Nome do Jogo" Category="Categoria do Jogo" Path="/caminho-do-jogo" />
                        <CardGame NameGame="Nome do Jogo" Category="Categoria do Jogo" Path="/caminho-do-jogo" />
                        <CardGame NameGame="Nome do Jogo" Category="Categoria do Jogo" Path="/caminho-do-jogo" />
                        <CardGame NameGame="Nome do Jogo" Category="Categoria do Jogo" Path="/caminho-do-jogo" />
                        <CardGame NameGame="Nome do Jogo" Category="Categoria do Jogo" Path="/caminho-do-jogo" />
                        <CardGame NameGame="Nome do Jogo" Category="Categoria do Jogo" Path="/caminho-do-jogo" />
                    </div>
                    <Link>
                        <SecondaryButton contentButton="Ver mais"></SecondaryButton>
                    </Link>
                </section>
                
                <section className="container-featured-categories">
                    <div className="featured-categories-container-title">
                        <h2>Explore Novos Horizontes de Jogos</h2>
                        <span>Escolha entre uma variedade de jogos em diferentes categorias e descubra sua próxima aventura. De estratégia a ação, temos algo para todos.</span>
                    </div>
                    <div className="wrapper-cards">
                        <CardCategory Category="Stratgy"></CardCategory>
                        <CardCategory Category="Stratgy"></CardCategory>
                        <CardCategory Category="Stratgy"></CardCategory>
                        <CardCategory Category="Stratgy"></CardCategory>
                        <CardCategory Category="Stratgy"></CardCategory>
                        <CardCategory Category="Stratgy"></CardCategory>
                    </div>
                    <Link>
                        <SecondaryButton contentButton="Ver mais"></SecondaryButton>
                    </Link>
                </section>

                <section className="container-featured-categories">
                <div className="featured-categories-container-title">
                        <h2>Recomendações de browser games</h2>
                        <span>Deixe-nos ajudá-lo a encontrar seu próximo jogo favorito. Nossas recomendações personalizadas são baseadas em seus gostos e preferências. Explore, jogue e divirta-se!</span>
                    </div>
                    <div className="wrapper-cards">
                        <CardGame NameGame="Nome do Jogo" Category="Categoria do Jogo" Path="/caminho-do-jogo" />
                        <CardGame NameGame="Nome do Jogo" Category="Categoria do Jogo" Path="/caminho-do-jogo" />
                        <CardGame NameGame="Nome do Jogo" Category="Categoria do Jogo" Path="/caminho-do-jogo" />
                        <CardGame NameGame="Nome do Jogo" Category="Categoria do Jogo" Path="/caminho-do-jogo" />
                        <CardGame NameGame="Nome do Jogo" Category="Categoria do Jogo" Path="/caminho-do-jogo" />
                        <CardGame NameGame="Nome do Jogo" Category="Categoria do Jogo" Path="/caminho-do-jogo" />
                    </div>
                    <Link>
                        <SecondaryButton contentButton="Ver mais"></SecondaryButton>
                    </Link>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Home