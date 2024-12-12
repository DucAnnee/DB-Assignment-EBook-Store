import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile/Profile";
import Addresses from "../pages/Profile/Addresses";
import History from "../pages/Profile/History";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/customer/profile",
        element: <Profile />,
      },
      {
        path: "/customer/addresses",
        element: <Addresses />,
      },
      {
        path: "/customer/history",
        element: <History />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  // {
  //   path: "/login-user",
  //   element: <LoginUser />,
  // },
  // {
  //   path: "/login-admin",
  //   element: <LoginAdmin />,
  // },
]);

export default router;
