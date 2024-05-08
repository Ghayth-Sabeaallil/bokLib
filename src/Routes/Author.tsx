import { lazy } from 'react';
const Header = lazy(() => import('../Components/Header/Header'));
const AuthorView = lazy(() => import('../Components/AuthorView/AuthorView'));




function Author() {

    return (<>
        <Header />
        <AuthorView />
    </>);
}

export default Author;