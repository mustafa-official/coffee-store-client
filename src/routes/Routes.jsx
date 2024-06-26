import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Register from "../pages/Register/Register";
import User from "../pages/User/User";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/update/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/user",
        element: <User></User>,
        loader: ()=> fetch('http://localhost:5000/user')
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ],
  },
]);
export default router;
