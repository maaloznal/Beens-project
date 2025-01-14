import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Facts from "./pages/facts/Facts";
import NotFound from "./pages/Not Found/NotFound";
import Beans from "./pages/beans/Beans";
import Reciptes from "./pages/recipies/Reciptes";
import Combinations from "./pages/combinations/Combinations";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/facts",
    element: <Facts />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/beans",
    element: <Beans />,
  },
  {
    path: "/reciptes",
    element: <Reciptes />,
  },
  {
    path: "/combinations",
    element: <Combinations />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
]);

export default router;
