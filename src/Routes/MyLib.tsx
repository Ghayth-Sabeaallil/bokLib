import { lazy } from 'react';
const Header = lazy(() => import('../Components/Header/Header'));

function MyLib() {

    return (<>
        <Header />
    </>);
}

export default MyLib;