import React, { useState } from 'react';

interface NewRecipeFormProps {
    addRecipe: (recipe: any) => void;
}

const NewRecipeForm: React.FC<NewRecipeFormProps> = ({ addRecipe }) => {
    const [name, setName] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [reviews, setReviews] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newRecipe = {
            id: Math.random(),
            name,
            cookingTime: Number(cookingTime),
            ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
            reviews: reviews.split(',').map(review => Number(review.trim())),
        };

        addRecipe(newRecipe);
        setName('');
        setCookingTime('');
        setIngredients('');
        setReviews('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Recipe Name</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="cookingTime" className="form-label">Cooking Time (in minutes)</label>
                <input type="number" className="form-control" id="cookingTime" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="ingredients" className="form-label">Ingredients (comma separated values)</label>
                <input type="text" className="form-control" id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="reviews" className="form-label">Reviews (comma separated values)</label>
                <input type="text" className="form-control" id="reviews" value={reviews} onChange={(e) => setReviews(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Add Recipe</button>
        </form>
    );
};

export default NewRecipeForm;
