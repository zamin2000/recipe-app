"use client";

import React from "react";
import RecipeCard from "@/components/RecipeCard";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function Home() {
    const recipes = useSelector((state: RootState) => state.recipes.recipes);

    return (
        <main className="container mt-4">
            <div className="d-flex justify-content-between">
                <h3>All Recipes</h3>
                <Link href="/recipes/new" className="btn btn-primary">Add New Recipe</Link>
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
                ))}
            </div>
        </main>
    );
}
