import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Recipe {
    id: number;
    name: string;
    cookingTime: number;
    ingredients: string[];
    reviews: number[];
}

interface RecipesState {
    recipes: Recipe[];
}

const initialState: RecipesState = {
    recipes: [
        { id: 0, name: 'Mac & Cheese', cookingTime: 60, ingredients: ["Macaroni", "Cheddar Cheese"], reviews: [5, 4, 5] },
        { id: 1, name: 'Mashed Potato', cookingTime: 30, ingredients: ["Maris Piper Potatoes", "Butter"], reviews: [5, 3, 1] },
    ],
};

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipe: (state, action: PayloadAction<Recipe>) => {
            state.recipes.push(action.payload);
        },
    },
});

export const { addRecipe } = recipesSlice.actions;

export default recipesSlice.reducer;