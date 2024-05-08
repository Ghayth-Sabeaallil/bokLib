import { lazy } from 'react';
const Header = lazy(() => import('../Components/Header/Header'));
const MyLibCom = lazy(() => import('../Components/MyLibCom/MyLibCom'));


function MyLib() {

    return (<>
        <Header />
        <MyLibCom />
    </>);
}

export default MyLib;