import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('./Home'))
const Search = lazy(() => import('./Search'))

function WebRoute() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/search" Component={Search} />
            </Routes>
        </Router>
    );
}

export default WebRoute;