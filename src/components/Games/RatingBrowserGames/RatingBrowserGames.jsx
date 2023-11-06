/* import SecondaryButton from "../../Comon/Buttons/SecondaryButton/SecondaryButton"; */
import Header from "../../Common/Header/Header"
import PropTypes from "prop-types"
import "./RatingBrowserGames.css"
import IconLink from "../../../assets/images/icon-link.svg"
import ThirdButton from "../../Common/Buttons/ThirdButton/ThirdButton"
import Footer from "../../Common/Footer/Footer"

function RatingBrowserGames({category, nameOfGame, URLGame,description}) {

   /*  const handleClickShowMore = () => {
        console.log('Botão clicado! VER MAIS');
    } */
    const handleClickReview = () => {
        console.log('Botão clicado! VER MAIS');
    }

    return (
        <>
            <Header></Header>
            <main>
                <div className="container-title-page">
                    <h1 className="title">Detalhes do Jogo</h1>
                    <span>Conheça mais sobre este emocionante jogo de categoria {category}. Aventure-se em {nameOfGame} e compartilhe sua avaliação.</span>
                </div>
                <section className="container-game-infos">
                    <div className="title-preview">
                        <h2 className="title-game">{nameOfGame}Teste</h2>
                        <div className="preview"></div>
                        {/* RENDERIZAR VIDEO SE TIVER OU FOTO */}
                    </div>
                    <div className="wrapper-infos-game">
                        <div className="gamen-now">
                            <a href={URLGame}>
                                <img src={IconLink} alt="" />
                                <span>Jogar agora</span>
                            </a>
                        </div>
                        <div className="container-description">
                            <h3 className="description-title">Descrição</h3>
                            <p className="description">{description}Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.</p>
                        </div>
                        <div className="category">
                            <h3 className="category-title">Categoria</h3>
                            {/* RENDERIZAR QUANTIDADE DE CATEOGIRA QUE FOR APLICAVEL */}
                        </div>
                    </div>
                </section>
                <section className="container-review">
                    <div className="container-review-title">
                        <h2>Avaliações</h2>
                        <span>Deixe sua avaliação</span>
                    </div>
                    <form action="" className="container-input-review">
                        <div className="container-input-review">
                            <label htmlFor="review-text"></label>
                            <textarea name="review-text" id="review-text" cols="30" rows="4" placeholder="Digite sua avaliação aqui"></textarea>
                        </div>
                        <div className="container-flex">
                            <div className="container-input-review">
                                <label htmlFor="review-rating"></label>
                                {/* CRIAR RATING DE ESTRELAS AQUI */}
                                <input type="radio" name="star" id="start" />
                            </div>
                            <ThirdButton text="Avaliar" onClick={handleClickReview}></ThirdButton>
                        </div>
                    </form>
                    <div className="container-post-reviews">
                        <div className="post-review">
                            <span className="name-user">Teste</span>
                            <span className="description-review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a nam quis laborum veritatis illum enim pariatur ipsa earum, temporibus eveniet voluptate facilis rem illo consequuntur, obcaecati totam officia mollitia.</span>
                            <span className="rating-star">tst rating</span>
                        </div>
                        <div className="post-review">
                            <span className="name-user">Teste</span>
                            <span className="description-review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a nam quis laborum veritatis illum enim pariatur ipsa earum, temporibus eveniet voluptate facilis rem illo consequuntur, obcaecati totam officia mollitia.</span>
                            <span className="rating-star">tst rating</span>
                        </div>
                        {/* REVIEWS AQUI */}
                    </div>
                </section>
                <Footer></Footer>
            </main>
        </>



)
}
/* <SecondaryButton text="Avaliar" onClick={handleClickShowMore}></SecondaryButton> */

export default RatingBrowserGames

RatingBrowserGames.propTypes = {
    category: PropTypes.string.isRequired,
    nameOfGame: PropTypes.string.isRequired,
    URLGame: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}