import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layouts from "./Components/Layouts/Layouts";
import Films from "./Pages/Films/Films";
import About from "./Pages/About/About";
import News from "./Pages/News/News";
import Social from "./Pages/Social/Social";
import ROUTES from "./routes";

import "./App.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.FILMS} element={<Layouts />}>
        <Route index element={<Films />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.NEWS} element={<News />} />
        <Route path={ROUTES.SOCIAL} element={<Social />} />
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
