import {
    createBrowserRouter, useParams,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Categorey from "../Pages/Home/Categorey/Categorey";
import NewsLayout from "../NewsLayout/NewsLayout";
import Newsdetailes from "../Pages/News/News/Newsdetailes";
import Navigationlayout from "../NavLayout/Navigationlayout/Navigationlayout";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivetRout from "../PrivetRoute/PrivetRout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigationlayout></Navigationlayout>,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "registration",
                element: <Registration />
            }
        ]
    },

    {
        path: "categorey",
        element: <Main></Main>,
        children: [

            {
                path: ":id",
                element: <Categorey></Categorey>,
                loader: ({ params }) => fetch(`http://localhost:3000/categories/${params.id}`)
            },
        ]
    },
    {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivetRout><Newsdetailes></Newsdetailes></PrivetRout>,
                loader: ({ params }) => fetch(`http://localhost:3000/news/${params.id}`)

            },
        ]
    }
])

export default router