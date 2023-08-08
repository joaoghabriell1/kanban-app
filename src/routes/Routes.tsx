import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ path: "/:paramsId?", element: <Home /> }],
    },
    { path: "/auth", element: <Auth /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
