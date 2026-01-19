🎬 Movie App 
A responsive movie browsing application built with React, TypeScript, TanStack Query, and Axios.
The app integrates with the TMDB API to display movies, genres, search results, and detailed movie information.

🚀 Features
Movie list with server‑side pagination

Genre filtering — click a genre to view movies in that category

Debounced search with live suggestions 

Search results page for full query results

Movie details page with extended information

Responsive layout with custom CSS breakpoints

Typed API models for strong TypeScript safety

Cached API requests using TanStack Query with configured staleTime

🧩 Project Structure 
The project is organized into clear, focused modules:

api/ — Axios requests (movies, genres, search)

components/ — reusable UI elements (cards, lists, badges, header, etc.)

pages/ — main screens (MoviesPage, MovieDetails, MovieGenresPage, SearchPage)

queries/ — TanStack Query hooks (movies, genres, search, suggestions)

hooks/ — custom hooks (debounce, pagination)

models/ — TypeScript interfaces for API responses

layout/ — shared layout wrapper

router/ — app routing configuration

styles/ — responsive CSS modules

🔀 Routing 
The app uses a nested layout with these main routes:

/ — movies list

/movie/:id — movie details

/genres/:id — movies by genre

/search — search results

🔎 Search System
Search input is debounced to avoid excessive API calls

Live suggestions appear while typing 

Clicking a suggestion → opens movie details

Clicking the search button → navigates to /search

Suggestions and results are cached with TanStack Query

📦 Tech Stack
React + TypeScript

TanStack Query for data fetching & caching

Axios for API requests

CSS Modules for styling

React Router for navigation

## Installation & Setup

1. Clone the repository
2. Install dependencies:
   npm install
3. Create a `.env` file 
4. Start the development server:
   npm run dev

## Environment Variables

Create a `.env` file in the project root with the following variables:

VITE_API_KEY=your_tmdb_api_key
VITE_API_URL=https://api.themoviedb.org/3

Do not commit your real API keys.

📱 Responsive Design
The UI adapts across mobile, tablet, laptop, and large screens using custom CSS breakpoints.

📝 TMDB Attribution
This product uses the TMDB API for movie data and images
but is not endorsed or certified by TMDB.