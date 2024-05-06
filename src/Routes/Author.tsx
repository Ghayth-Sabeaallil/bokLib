import { lazy } from 'react';
const Header = lazy(() => import('../Components/Header/Header'));




function Author() {

    return (<>
        <Header />
    </>);
}

export default Author;