import { useEffect, useState } from "react";
import utils from "../../../assets/js/utils";
import CardCategory from "../CardCategory/CardCategory";
import PropTypes from "prop-types"

function ExploreCategory({showMoreCards}) {
    const [dataCategories, setDataCategories] = useState([])

    const handleFecthAPICategories = async () => {
        try {
            const apiUrl = utils.API_BASE_URL;
            const response = await fetch(`${apiUrl}/categories`)
            if(!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }
            const data = await response.json()
            setDataCategories(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleFecthAPICategories()
    }, [])

    return (
        <>
            {dataCategories.slice(0, showMoreCards).map((category) => (
                <CardCategory
                    Path={`/gamebycategory/${category._id}`}
                    key={category._id}
                    Category={
                        (dataCategories.find((categoryState) => category._id === categoryState._id)).name
                    }
                ></CardCategory>
            ))}
        </>
    )
}

export default ExploreCategory

ExploreCategory.propTypes = {
    showMoreCards: PropTypes.number
}