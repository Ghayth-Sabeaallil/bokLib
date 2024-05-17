import { useContext, useEffect, useState } from "react";
import "../../Styles/Components/AuthorView.scss";
import isObject from "../../Utils/isObject";
import { SaveContext } from "../../Data/ContextDataProvider";
import { getIdFromUrl } from "../../Utils/getIdFromUrl";
import useFetch from "../../Hooks/useFetch/useFetch";
import { Authors } from "../../Types/dataType";

const AuthorView = () => {
    //React Hooks
    const { state, dispatch } = useContext(SaveContext);
    const [authId, setId] = useState<string>("");
    const [add, setAdd] = useState<boolean>(false);

    const url = document.location.href;
    const id = getIdFromUrl(url);

    //Custom hooks
    const [author] = useFetch({ payload: { id: `/authors/${id}` }, type: "FETCH_AUTHOR" }) as Authors[];



    //Ask if the author bio is an object or not
    const isObj = isObject(author?.bio);

    //useEffect, check if the author is alreday added or not
    useEffect(() => {
        state.authors.map((a) => {
            if (a.id === authId) {
                setAdd(true);
            }
        })
        setId(id);
    });

    //Add author to fav using useContext
    const handleClickAdd: React.MouseEventHandler<SVGSVGElement> = () => {
        setAdd(true);
        dispatch({
            type: "ADD_AUTHOR",
            payload: { id: authId, name: author?.name!, img: author?.photos[0]!, year: author?.birth_date! },
        });
    };

    //Remove author from fav using useContext
    const handleClickRemove: React.MouseEventHandler<SVGSVGElement> = () => {
        setAdd(false);
        dispatch({
            type: "REMOVE_AUTHOR",
            payload: authId,
        });
    };

    return (
        <>
            <main className="container">
                <div className="authorView-box">
                    <div className="img-box">
                        {author?.photos == null ? <div className="bok-img-div"><img src="/image.png" alt="none" /></div> : <img className="bok-img" src={`https://covers.openlibrary.org/b/id/${author?.photos[0]}-L.jpg`} alt={author?.name} />}
                        <div>
                            {add ? <svg width="55px" height="55px" viewBox="0 0 64 64" fill="yellow" xmlns="http://www.w3.org/2000/svg" onClick={handleClickRemove}>
                                <path d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z" stroke="#426AB2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg> : <svg width="55px" height="55px" viewBox="0 0 64 64" fill="white" xmlns="http://www.w3.org/2000/svg" onClick={handleClickAdd}>
                                <path d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z" stroke="#426AB2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>}
                        </div>
                    </div>
                    <div className="info-box">
                        {author?.name != null && <h1>{author.name}</h1>}
                        {isObj ? <h2><span>Des: </span>{author?.bio.value}</h2> : <h2><span></span>{author?.bio}</h2>}
                        {author?.birth_date != null && <h3><span>Birthday: </span>{author.birth_date}</h3>}
                        {author?.death_date != null && <h3><span>Death Date: </span>{author.death_date}</h3>}
                        {author?.location != null && <h3><span>Location: </span>{author.location}</h3>}
                        {author?.wikipedia != null && <a href={author.wikipedia}><h3>Wiki</h3></a>}
                    </div>
                </div>
            </main>
        </>
    );
};
export default AuthorView;
