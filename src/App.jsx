import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Components/Layout/AppLayout";
import { Home } from "./Pages/Home";
import { Foods } from "./Pages/Foods";
import { Contact } from "./Pages/Contact";
import { About } from "./Pages/About";

import './App.css'
import { Recipe } from "./Components/UI/Recipe";
import { Cart } from "./Pages/Cart";



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/foods",
          element: <Foods />,
        },
        {
          path: "/foods/:id",
          element: <Recipe />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
