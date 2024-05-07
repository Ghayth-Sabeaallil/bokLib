import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('./Home'))
const Search = lazy(() => import('./Search'))
const Book = lazy(() => import('./Book'))
const Author = lazy(() => import('./Author'))
const MyLib = lazy(() => import('./MyLib'))





function WebRoute() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/search" Component={Search} />
                <Route path="/book" Component={Book} />
                <Route path="/author" Component={Author} />
                <Route path="/mylib" Component={MyLib} />
            </Routes>
        </Router>
    );
}

export default WebRoute;