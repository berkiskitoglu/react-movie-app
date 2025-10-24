import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import SearchResults from "./pages/SearchResults";
import UserWatchList from "./pages/UserWatchList";
import Login from "./pages/LoginState";
import Register from "./pages/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> }, // Ana sayfa rotası
      { path: "movies", element: <Movies /> }, // Movie sayfası rotası
      { path: "movies/:id", element: <MovieDetails /> }, // Movie Details sayfası rotası
      { path: "search", element: <SearchResults /> },
      { path: "watchlist", element: <UserWatchList /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
