import { lazy } from 'react';
const Header = lazy(() => import('../Components/Header/Header'));
const SearchPageBox = lazy(() => import('../Components/SearchPageBox/SearchPageBox'));



function Search() {

    return (<>
        <Header />
        <SearchPageBox />
    </>);
}

export default Search;