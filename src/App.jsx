import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ViewProduct from "./pages/ViewProduct";
import Service from "./components/Layout/Service";
import { SWRConfig } from "swr";
import fetcher from "./services/fetcher";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
          path: "/about",
          element: <About />,
        },
        {
          path: "/view/:id",
          element: <ViewProduct />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return (
    <SWRConfig value={{ revalidateIfStale: false, revalidateOnFocus: false }}>
      <RouterProvider router={router} />;
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </SWRConfig>
  );
}

export default App;
