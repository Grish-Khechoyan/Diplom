import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import SavedFilms from "./Pages/SavedFilms/SavedFilms";
import Documents from "./Pages/Documents/Documents";
import Layouts from "./Components/Layouts/Layouts";
import AllFilms from "./Pages/All Films/AllFilms";
import Movies from "./Pages/Movies/Movies";
import Social from "./Pages/Social/Social";
import About from "./Pages/About/About";
import News from "./Pages/News/News";
import Home from "./Pages/Home/Home";
import ROUTES from "./routes";

import "./App.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.ALLFILMS} element={<AllFilms />} />
        <Route path={ROUTES.MOVIES} element={<Movies />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.NEWS} element={<News />} />
        <Route path={ROUTES.SOCIAL} element={<Social />} />
        <Route path={ROUTES.DOCUMENTS} element={<Documents />} />
        <Route path={ROUTES.SAVEDFILMS} element={<SavedFilms />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;