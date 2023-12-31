import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import TnC from "../pages/TnC/TnC";

const router = createBrowserRouter([
    {

        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TnC></TnC>
            }
        ]

    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [

            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://news-server-abhijitsarker.vercel.app/category/${params.id}`)
            },

        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://news-server-abhijitsarker.vercel.app/news/${params.id}`)
            },

        ]
    }

])

export default router;  