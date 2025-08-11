#🎬 IMDB Clone
Tagline: A simple IMDB-like movie browser built with React, Vite, Tailwind CSS, and the TMDB API.

#📖 Description
This IMDB Clone is a front-end web app that allows users to browse top-rated movies using The Movie Database (TMDB) API.
It’s built with modern tools — React (JavaScript) for UI, Vite for fast development, Tailwind CSS for styling, and ESLint for code quality.

Users can:

View a large banner featuring a random top-rated movie.

Browse movie listings.

Add/remove movies from a personal watchlist (saved in localStorage).

Enjoy a responsive and clean UI.

#✨ Features
Dynamic Banner: Shows a random top-rated movie’s backdrop image.

Movie Listing: Displays movie posters, titles, ratings, and more.

Watchlist: Add or remove movies, persisted via localStorage.

Responsive Design: Works across devices, powered by Tailwind CSS.

Fast Development: Vite dev server with hot reload.

Code Quality: ESLint to keep the code clean and consistent.

#🧰 Tech Stack
Frontend	API Source	Tools
React (JS)	TMDB API	Vite, Tailwind CSS, ESLint

#📁 Project Structure
src/components/ → React components like Banner, Movies, Navbar, etc.

src/utility/ → Utility files like genre.js.

public/ → Static assets.

tailwind.config.js → Tailwind setup.

vite.config.js → Vite config.

App.jsx → Main app component.

main.jsx → Entry point.

#⚙️ How to Run
-Clone the repository:
git clone https://github.com/D4C-WOU/IMDB-Clone.git

-Install dependencies:
npm install

-Add your TMDB API key in a .env file:
VITE_TMDB_KEY=your_api_key_here

-Start development server:
npm run dev

-Build for production:
npm run build


#📦 API Reference
TMDB API Docs

#👤 Author
Nand Joshi — GitHub Profile

📝 License
This project is licensed under the MIT License.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
