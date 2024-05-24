# Next.js Recipe App with Redux

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Features

- View a list of recipes
- Add your own custom recipes
- Uses Redux for state management
- Styled with Bootstrap

## Project Structure

- `app/`: Contains the main application files and pages
- `components/`: Contains reusable UI components like RecipeCard and NewRecipeForm
- `store/`: Contains Redux store configuration and slices

## Redux

- This app uses Redux for state management
- `store/recipesSlice.ts`: contains the redux slice for managing the recipes state
- `store/index.ts`: sets up the redux store

## Screenshots

### Landing page
- Fully responsive design
- 2 default recipes load on start up every time
- Each recipe is displayed as a card
- Each recipe has a name, time, list of ingredients and an average rating, as well as the total number of reviews.

![alt text](<screenshots/60 minutes.png>)
￼
### Add New Recipe page
- Clicking the add new recipe button takes you to a new page with a form
- Users are able to enter the details of any custom recipe they like.
- Multiple ingredients can be specified by simply separating each ingredient with a comma.

![alt text](<screenshots/Add New Recipe.png>)

### Form validation
- Users cannot submit empty values
![alt text](<screenshots/Form validation.png>)
￼
- Entering cooking time only accepts numbers

![alt text](<screenshots/Pasted Graphic 5.png>)
￼
### Example recipe with valid data entries
- Once the user submits the form, they are redirected to the landing page where they will find a new card displayed with their new recipe.

![alt text](<screenshots/Complete Recipe.png>)

![alt text](<screenshots/Mac & Cheese.png>)
￼
### Responsive design
- Navbar transforms to a hamburger menu
- Content moves

![alt text](<screenshots/Responsive.png>)
￼
### Navbar
- Hamburger toggle opens and closes the nav bar items
￼
![alt text](<screenshots/Hamburger.png>)

## Improvements
- Add authentication so users can create their own private recipes, save them to their favourites, and give their ratings for every recipe.
- Configure a database so that user-created recipes are stored permanently 
- Create a favourites page which only displays the recipes that a user has marked as their favourites
- Implement an option to see a recipe in more detail than what is displayed on the landing page currently

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
