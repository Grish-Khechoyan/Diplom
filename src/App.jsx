import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import SavedFilms from "./Pages/SavedFilms/SavedFilms";
import ViewMovies from "./Pages/ViewMovies/ViewMovies";
import Rating from "./Pages/Rating/Rating";
import Layouts from "./Components/Layouts/Layouts";
import Movies from "./Pages/Movies/Movies";
import Social from "./Pages/Social/Social";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import ROUTES from "./routes";

import "./App.css";
import TvShows from "./Pages/TvShows/TvShows";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.MOVIES} element={<Movies />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.TVSHOWS} element={<TvShows />} />
        <Route path={ROUTES.SOCIAL} element={<Social />} />
        <Route path={ROUTES.RATING} element={<Rating />} />
        <Route path={ROUTES.SAVEDFILMS} element={<SavedFilms />} />
        <Route path="/movies/:id" element={<ViewMovies />} />
        <Route path="/rating/:id" element={<ViewMovies />} />
        <Route path="/tv-shows/:id" element={<ViewMovies />} />
      </Route>
    )
  );
  return (
    <div style={{ height: "100vh", overflowY: "hidden" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
