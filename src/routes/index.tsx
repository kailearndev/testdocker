import { useRoutes } from "react-router-dom";
import RequireAuth from "guard";
import Layout from "layouts";
import Home from "pages/Home";
import Login from "pages/User/Login";
import About from "pages/About";

function Routes() {
  const routes = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "/login", element: <Login /> },
        {
          element: <RequireAuth />,
          children: [{ path: "/about", element: <About /> }],
        },
      ],
    },
  ]);
  return routes;
}

export default Routes;
