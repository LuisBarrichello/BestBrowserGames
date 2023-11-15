import {  useEffect, useState } from "react";
import PropTypes from 'prop-types';
import ThirdButton from "../Common/Buttons/ThirdButton/ThirdButton";
import "./Rating.css"
import utils from "../../assets/js/utils";
import React from "react";


function Rating(props) {
    const {isLoaded, ratingsGame, userID } = props;

    const [isEditing, setIsEditing] = useState(false)
    const [editingRating, setEditingRating] = useState({})
    const [rating, setRating] = useState({
        score: 0,
        description: '',
        game: '',
        user: '',
    });
    
    const handleEditClick = (rating) => {
        setIsEditing(true);
        setEditingRating(rating);
        console.log(isEditing, editingRating);
    }
    
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditingRating(prevState => ({
            ...prevState,
            [name]: value,
        }));
        
        setRating(prevState => ({
            ...prevState,
            game: editingRating._id,
            user: editingRating.user._id,
            score: editingRating.score,
            description: editingRating.description,
        }));

        console.log(rating, editingRating)
    }  

    const handleSaveClick = async (event) => {
        event.preventDefault();
        try {
            
            if (!rating.description) {
                alert('Por favor, insira uma descrição para a avaliação.');
                return;
            }

            const apiUrl = utils.API_BASE_URL
            const token = utils.getToken()
            const requestData = {
                method: "PUT",  
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `Bearer ${token}`,
                },
                    body: JSON.stringify(rating),
            }
            const response = await fetch(`${apiUrl}/ratings/${editingRating._id}`, requestData)


            if (!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }

            const data = await response.json();
            alert(data.message);

            window.location.reload()

        } catch (error) {
            console.error(error)
        }
    }
    
    return (
        <>
            
            {ratingsGame.map((rating) => (
                <React.Fragment key={rating._id}>
                    {isEditing && editingRating?._id === rating._id ? (
                        <form className="container-input-review">
                            <div className="container-input-review">
                                <label htmlFor="review-text"></label>
                                <textarea 
                                    name="description" 
                                    id="review-text" 
                                    cols="30" 
                                    rows="4" 
                                    value={editingRating.description}
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
                                                id={`star-edit${i + 1}`}
                                                value={i + 1}
                                                onChange={handleInputChange}
                                            />
                                            <label 
                                                htmlFor={`star-edit${i + 1}`}
                                                className={i < rating.score ? 'star-selected-edit' : ''}
                                            >★</label>
                                        </span>
                                    ))}
                                </div>
                                <ThirdButton text="Avaliar" onClick={(event) => handleSaveClick(event)}></ThirdButton>
                            </div>
                        </form>
                    ) : (
                        <div className="post-review" key={rating._id}>
                            <span className="name-user">{rating.user.name}</span>
                            <span className="description-review">{rating.description}</span>
                            <div className="wrapper-rating-star">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < rating.score ? 'star-selected' : ''}>★</span>
                                ))}
                                <div className="cotainer-edit-rating">
                                {userID === rating.user._id ? <ThirdButton text="Editar avaliação" onClick={() => handleEditClick(rating)}></ThirdButton> : ''}
                            </div>
                            </div>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </>
    )
}

export default Rating

Rating.propTypes = {
    isLoaded: PropTypes.bool,
    ratingsGame: PropTypes.array,
    userID: PropTypes.string,
}