import React from 'react';

interface RecipeCardProps {
    name: string;
    cookingTime: number;
    ingredients: string[];
    reviews: number[];
}

const RecipeCard: React.FC<RecipeCardProps> = ({ name, cookingTime, ingredients, reviews }) => {
    const totalReviews = reviews.length;
    const averageRating = totalReviews ? (reviews.reduce((a, b) => a + b, 0) / totalReviews).toFixed(1) : 'No reviews';

    return (
        <div className="card m-2" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Cooking Time: {cookingTime} minutes</h6>
                <ul className="list-group list-group-flush">
                    {ingredients.map((ingredient, index) => (
                        <li className="list-group-item" key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="card-footer">
                <p className="card-text">{`Rating: ${averageRating} (${totalReviews} reviews)`}</p>
            </div>
        </div>
    );
};

export default RecipeCard;
