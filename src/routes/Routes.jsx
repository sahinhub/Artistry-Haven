import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllArtCraftItems from "../pages/AllArtCraftItems";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCraftItem from "../pages/PrivatePages/AddCraftItem";
import MyArtCraftList from "../pages/PrivatePages/MyArtCraftList";
import ViewDetails from "../pages/PrivatePages/ViewDetails";
import UpdateCraftItem from "../pages/PrivatePages/UpdateCraftItem";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[

            {
            path:'/',
            element:<Home></Home>,
            },
            {
            path:'/all-art-craft-items',
            element:<AllArtCraftItems></AllArtCraftItems>,
            },
            {
            path:'/login',
            element:<Login></Login>,
            },
            {
            path:'/register',
            element:<Register></Register>,
            },
            {
            path:'/add-craft-item',
            element:<AddCraftItem></AddCraftItem>,
            },
            {
            path:'/my-art-craft-list',
            element:<MyArtCraftList></MyArtCraftList>,
            },
            {
            path:'/craft-item/:id',
            element:<ViewDetails></ViewDetails>,
            },
            {
            path:'/update-craft-item/:id',
            element:<UpdateCraftItem></UpdateCraftItem>,
            },
        ]
    }
])
export default routes;