import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ViewProduct from "./pages/ViewProduct";
import Service from "./components/Layout/Service";

function App() {
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        {
          element: <Service />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
          ],
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/view/:id",
          element: <ViewProduct />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
