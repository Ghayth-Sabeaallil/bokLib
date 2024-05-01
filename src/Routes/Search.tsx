import { lazy } from 'react';
const Header = lazy(() => import('../Components/Header/Header'));


function Search() {

    return (<>
        <Header />
    </>);
}

export default Search;