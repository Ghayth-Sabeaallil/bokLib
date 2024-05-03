import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('./Home'))

function WebRoute() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
            </Routes>
        </Router>
    );
}

export default WebRoute;