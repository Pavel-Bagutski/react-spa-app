import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Preloader } from "../component/Preloader";
import { getMealById } from "../component/api.js"; // Исправленный путь

function Reciple() {
    const { id } = useParams();
    const [reciple, setreciple] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getMealById(id).then((data) => setreciple(data.meals[0]));
    }, [id]);

    return (
        <>
            <buttons
                className="btn"
                onClick={() => navigate(-1)}
            >
                Go Back
            </buttons>

            {!reciple.idMeal ? (
                <Preloader />
            ) : (
                <div className="reciple">
                    <img
                        src={reciple.strMealThumb}
                        alt={reciple.strMeal}
                    />
                    <h1> {reciple.strMeal} </h1>
                    <h6>Category: {reciple.strCategory}</h6>
                    {reciple.strArea ? <h6>Area: {reciple.strArea} </h6> : null}

                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(reciple).map((key) => {
                                if (
                                    key.includes("Ingredient") &&
                                    reciple[key]
                                ) {
                                    return (
                                        <tr key={key}>
                                            <td>{reciple[key]}</td>
                                            <td>
                                                {
                                                    reciple[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>

                    <p>{reciple.strInstructions}</p>
                    {reciple.strYoutube ? (
                        <div className="row">
                            <h5>Video reciple</h5>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${reciple.strYoutube.slice(
                                    -11
                                )}`}
                                allowfullscreen
                            />
                        </div>
                    ) : null}
                </div>
            )}
        </>
    );
}

export { Reciple };
