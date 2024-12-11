import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
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
