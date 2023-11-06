import Header from "../../Comon/Header/Header";
import Footer from "../../Comon/Footer/Footer"
import CardGame from "../CardGame/CardGame";
import SecondaryButton from "../../Comon/Buttons/SecondaryButton/SecondaryButton"
import { Link } from "react-router-dom";
import "./Home.css"


function Home() {


    return (
        <>
            <Header></Header>
            <main>
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
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Home