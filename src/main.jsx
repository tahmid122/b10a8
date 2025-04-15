import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/root/Root";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Dashboard from "./components/Dashboard/Dashboard";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Explore from "./components/Explore/Explore";
import Product from "./components/Explore/Product";
import AllProducts from "./components/Explore/AllProducts";
import Product2 from "./components/Explore/Product2";
import AllProducts2 from "./components/Explore/AllProducts2";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "statistics",
        Component: Statistics,
      },
      {
        path: "dashboard",
        Component: Dashboard,
        children: [
          // { index: true, Component: Cart },
          { path: "cart", Component: Cart },
          { path: "wishlist", Component: Wishlist },
        ],
      },
      {
        path: "product-details/:proId",
        loader: () => fetch("/gadget.json"),
        Component: ProductDetails,
      },
      {
        Component: Explore,
        children: [{ path: "/:category", Component: AllProducts2 }],
      },
      {
        path: "*",
        element: <h1>404</h1>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
