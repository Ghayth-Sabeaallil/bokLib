import { lazy } from 'react';
import Main from '../Components/Main/Main';
const Header = lazy(() => import('../Components/Header/Header'));


function Home() {

    return (<>
        <Header />
        <Main />
    </>);
}

export default Home;