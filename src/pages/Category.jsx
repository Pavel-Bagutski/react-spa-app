import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../component/api";
import { useState } from "react";
import { Preloader } from "../component/Preloader";
import { MealList } from "../component/MealList";
import { Link, useNavigate } from "react-router-dom";

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            <button
                className="btn"
                onClick={() => navigate(-1)}
            >
                Go Back
            </button>

            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}
export { Category };
