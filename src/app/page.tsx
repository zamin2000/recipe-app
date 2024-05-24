"use client";

import React, { useState } from "react";
import RecipeCard from "@/components/RecipeCard";

export default function Home() {
    const [recipes, setRecipes] = useState([
        { id: 0, name: 'Mac & Cheese', cookingTime: 60, ingredients: ["Macaroni", "Cheddar Cheese"], reviews: [5, 4, 5] },
        { id: 1, name: 'Mashed Potato', cookingTime: 30, ingredients: ["Maris Piper Potatoes", "Butter"], reviews: [5, 3, 1] },
    ]);

    return (
        <main className="container mt-4">
            <div>
                <h3>All Recipes</h3>
            </div>
            <div className="d-flex flex-wrap">
                {recipes.map(recipe => (
                    <RecipeCard
                        key={recipe.id}
                        name={recipe.name}
                        cookingTime={recipe.cookingTime}
                        ingredients={recipe.ingredients}
                        reviews={recipe.reviews}
                    />
                ))};
            </div>
        </main>
    );
};