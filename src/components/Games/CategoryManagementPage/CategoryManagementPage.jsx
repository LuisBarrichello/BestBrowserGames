import utils from "../../../assets/js/utils"
import { useEffect, useState } from "react";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import ThirdButton from "../../Common/Buttons/ThirdButton/ThirdButton";
import "./CategoryManagementPage.css"
import Cookies from "js-cookie";

function CategoryManagementPage() {
    const [isEditing, setIsEditing] = useState(false)
    const [editingCategory, setEditingCategory] = useState(null)
    const [dataCategoriesForQuery, setDataCategoriesForQuery] = useState([])

    const handleFecthAPICategories = async () => {
        try {
            const apiUrl = utils.API_BASE_URL;
            const response = await fetch(`${apiUrl}/categories`)
            if(!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }
            const dataCategories = await response.json()
            console.log(dataCategories)
            setDataCategoriesForQuery(dataCategories)
        } catch (error) {
            console.error(error)
        }
    } 

    const handleSaveClick = async () => {
        try {
            const token = Cookies.get('token');
            console.log(editingCategory._id)
            const apiUrl = utils.API_BASE_URL;
            const requestData = {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `Bearer ${token}`,
                },
                body: JSON.stringify(editingCategory)
            };
            const response = await fetch(`${apiUrl}/categories/${editingCategory._id}`, requestData)
    
            if (!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }
    
            handleFecthAPICategories()
    
            setIsEditing(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleEditClick = (category) => {
        setIsEditing(true)
        setEditingCategory(category)
    }   

    const handleDeleteClick = async (category) => {
        try {
            const categoryId = category._id
            const token = Cookies.get('token');
            const apiUrl = utils.API_BASE_URL;
            const requestData = {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `Bearer ${token}`,
                }
            };
            const response = await fetch(`${apiUrl}/categories/${categoryId}`, requestData)

            if (!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }

            handleFecthAPICategories()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleFecthAPICategories()
    }, [])


    return (
        <>
            <Header></Header>
            <main>
                <ul className="CategoryManagementPage-wrapper-cards-categories">
                    {dataCategoriesForQuery.map((category) => (
                        <div key={category._id} className="card-category">
                            <div className="CategoryManagementPage-gameName-category">
                                {isEditing && editingCategory._id === category._id ? (
                                    <input
                                    className="CategoryManagementPage-edit-name-category"
                                        type="text"
                                        value={editingCategory.name}
                                        onChange={(e) => setEditingCategory({...editingCategory, name: e.target.value})}
                                    />
                                ) : (
                                    <h4 className="card-name-category">{category.name}</h4>
                                )}
                            </div>
                            <div className="CategoryManagementPage-wrapper-buttons">
                                {isEditing && editingCategory._id === category._id ? (
                                    <ThirdButton onClick={() => handleSaveClick()} text="Salvar"></ThirdButton>
                                ): (
                                    <>
                                        <ThirdButton text="Editar Categoria" onClick={() => handleEditClick(category)}></ThirdButton>
                                        <ThirdButton text="Deletar" onClick={() => handleDeleteClick(category)}></ThirdButton>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </ul>
            </main>
            <Footer></Footer>
        </>
    )
}

export default CategoryManagementPage