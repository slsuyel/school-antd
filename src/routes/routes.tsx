import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.route";
import Login from "../pages/Auth/Login";

const admin = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  admin
    ? {
        path: "/admin",
        element: <App />,
        children: routeGenerator(adminPaths),
      }
    : {
        path: "/login",
        element: <Login />,
      },

  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;

/* import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.route";
import Login from "../pages/Auth/Login";

const admin = true;

let routes = [];

if (admin) {
  routes.push(
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/admin",
      element: <App />,
      children: routeGenerator(adminPaths),
    },
    {
      path: "/login",
      element: <Login />,
    }
  );
} else {
  routes.push(
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/login",
      element: <Login />,
    }
  );
}

const router = createBrowserRouter(routes);

export default router;
 */
