import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ path: "/:paramsId?", element: <Home /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
