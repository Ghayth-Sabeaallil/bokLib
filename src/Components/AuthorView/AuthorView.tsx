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
