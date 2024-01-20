import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
