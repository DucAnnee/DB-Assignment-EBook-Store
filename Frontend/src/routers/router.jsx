import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // {
  //   path: "/signup",
  //   element: <Login />, // sửa thành Signup sau
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
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