import { createBrowserRouter } from "react-router-dom";
import '../Styles/index.scss'
import { lazy } from 'react';
const Home = lazy(() => import('./Home'))
const Search = lazy(() => import('./Search'))
const Book = lazy(() => import('./Book'))
const Author = lazy(() => import('./Author'))
const MyLib = lazy(() => import('./MyLib'))


export const WebRoute = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/book/:bookId",
                element: <Book />,
            },
            {
                path: "/author/:authId",
                element: <Author />,
            },
            {
                path: "/mylib",
                element: <MyLib />,
            },
        ],
    },
]);
