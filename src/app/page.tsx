"use client"
import RecipeCard from "@/components/RecipeCard";

export default function Home() {
	const recipes = [
		{ id: 0, name: 'Mac & Cheese', cookingTime: 60, ingredients: ["Macaroni", "Cheddar Cheese", "Milk"], reviews: [5,4,5] },
		{ id: 1, name: 'Mashed Potato', cookingTime: 30, ingredients: ["Maris Piper Potatoes", "Butter"], reviews: [5,3,1] },
	];

	return (
		<main className="my-3 container">
			<div className="d-flex justify-content-between">
				<h4>
					Recipes
				</h4>
			</div>
			<div className="d-flex flex-wrap">
				{recipes.map(recipe => (
					<RecipeCard
						key={recipe.id}
						name={recipe.name}
						cookingTime={recipe.cookingTime}
						ingredients={recipe.ingredients}
                        reviews={recipe.reviews}
					/>)
				)}
			</div>
		</main>
	)
};