"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import NewRecipeForm from '@/components/NewRecipeForm';
import { addRecipe } from '@/store/recipesSlice';

const NewRecipePage = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleAddRecipe = (newRecipe: any) => {
        dispatch(addRecipe(newRecipe));
        router.push('/');
    };

    return (
        <div className="container mt-4">
            <h3>Add New Recipe</h3>
            <NewRecipeForm addRecipe={handleAddRecipe} />
        </div>
    );
};

export default NewRecipePage;
