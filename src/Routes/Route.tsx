import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import '../Styles/index.scss'
import { lazy } from 'react';
import SaveAuthContextProvider from '../Data/SaveAuthContextProvider/SaveAuthContextProvider';
const Home = lazy(() => import('./Home'))
const Search = lazy(() => import('./Search'))
const Book = lazy(() => import('./Book'))
const Author = lazy(() => import('./Author'))
const MyLib = lazy(() => import('./MyLib'))


const WebRoute = createBrowserRouter([
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
ReactDOM.createRoot(document.getElementById("root")!).render(

    <React.StrictMode>
        <SaveAuthContextProvider>
            <Suspense fallback={<div>Loading ...</div>}>
                <RouterProvider router={WebRoute} />
            </Suspense>
        </SaveAuthContextProvider>
    </React.StrictMode>,
);
