import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/home/Home";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import Combinations from "./pages/combinations/Combinations";
import Reciptes from "./pages/recipies/Reciptes";
import Facts from "./pages/facts/Facts";
import Loader from "./components/Loader/Loader";
import BeanPage from "./pages/beanPage/BeanPage";
import Beans from "./pages/beans/Bean";
import Review from "./pages/Reviwe/Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: Loader,
    children: [
      { index: true, element: <Home /> },
      {
        path: "facts",
        element: <Facts />,
      },
      {
        path: "review",
        element: <Review />,
      },
      {
        path: "beanPage/:id",
        element: <BeanPage />,
      },
      {
        path: "beans",
        element: <Beans />,
      },
      {
        path: "reciptes",
        element: <Reciptes />,
      },
      {
        path: "combinations",
        element: <Combinations />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
    ],
  },
]);

export default router;
