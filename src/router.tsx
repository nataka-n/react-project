import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Facts from "./pages/Facts";
import NotFound from "./pages/NotFound";
import Beans from "./pages/Beans";
import Recipes from "./pages/Recipes";
import Combinations from "./pages/Combinations";
import History from "./pages/History";
import BeanPage from "./pages/Bean";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import Review from "./pages/Review";
import About from "./pages/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: Loader,
    children: [
      { index: true, element: <Home /> },
      { path: "facts", element: <Facts /> },
      { path: "bean/:id", element: <BeanPage /> },
      { path: "beans", element: <Beans /> },
      { path: "review", element: <Review /> },
      { path: "recipes", element: <Recipes /> },
      { path: "combinations", element: <Combinations /> },
      { path: "history", element: <History /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;