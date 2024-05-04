import { lazy } from 'react';
const Header = lazy(() => import('../Components/Header/Header'));
const BookView = lazy(() => import('../Components/BookView/BookView'));




function Book() {

    return (<>
        <Header />
        <BookView />
    </>);
}

export default Book;