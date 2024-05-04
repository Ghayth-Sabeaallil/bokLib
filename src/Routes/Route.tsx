import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('./Home'))
const Search = lazy(() => import('./Search'))
const Book = lazy(() => import('./Book'))



function WebRoute() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/search" Component={Search} />
                <Route path="/book" Component={Book} />
            </Routes>
        </Router>
    );
}

export default WebRoute;