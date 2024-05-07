import useFetchAuthor from "../../Hooks/useFetch/useFetchAuthor";

import "../../Styles/Components/AuthorView.scss";
import getIdFromUrl from "../../Utils/getIdFromUrl";
import isObject from "../../Utils/isObject";
const AuthorView = () => {
    let url = document.location.href;
    let id = getIdFromUrl(url);
    const [author] = useFetchAuthor(`/authors/${id}`);

    return (
        <>
            <main className="container">
                <div className="authorView-box">
                    <div className="img-box">
                        {author?.photos == null ? <div className="bok-img-div"><img src="/image.png" alt="none" /></div> : <img className="bok-img" src={`https://covers.openlibrary.org/b/id/${author?.photos[0]}-L.jpg`} alt={author?.name} />}
                        <div>
                            <svg id="save" width="55px" height="55px" viewBox="0 0 64 64" fill="#f07d7d" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z" stroke="#426AB2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg width="55px" height="55px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true">
                                <path fill="#494c4e" d="M23 10h-.1c-.46-2.28-2.48-4-4.9-4-1.33 0-2.53.52-3.43 1.36C13.78 7.13 12.91 7 12 7s-1.78.12-2.57.36C8.53 6.52 7.33 6 6 6c-2.42 0-4.44 1.72-4.9 4H1c-.55 0-1 .45-1 1s.45 1 1 1h.1c.46 2.28 2.48 4 4.9 4 2.76 0 5-2.24 5-5 0-.66-.13-1.29-.36-1.87.43-.08.88-.13 1.36-.13s.94.04 1.36.13c-.23.58-.36 1.21-.36 1.87 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h.1c.55 0 1-.45 1-1s-.45-1-1-1zM6 14c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm12 0c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                            </svg>
                        </div>
                    </div>
                    <div className="info-box">
                        {author?.name != null ? <h1>{author.name}</h1> : null}
                        {isObject(author?.bio) ? <h2><span>Description: </span>{author.bio.value}</h2> : <h2><span>Description: </span>{author?.bio}</h2>}

                        {author?.birth_date != null ? <h3><span>Birthday: </span>{author.birth_date}</h3> : null}
                        {author?.death_date != null ? <h3><span>Death Date: </span>{author.death_date}</h3> : null}

                        {author?.location != null ? <h3><span>Location: </span>{author.location}</h3> : null}
                        {author?.wikipedia != null ? <a href={author.wikipedia}><h3>Wiki</h3></a> : null}
                    </div>


                </div>
            </main>
        </>
    );
};
export default AuthorView;
