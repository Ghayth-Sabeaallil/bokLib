import useFetchBook from "../../Hooks/useFetch/useFetchBook";
import useFetchRate from "../../Hooks/useFetch/useFetchRate";
import "../../Styles/Components/BookView.scss";
import getIdFromUrl from "../../Utils/getIdFromUrl";
import getTwoDecimala from "../../Utils/getTwoDecimala";
import isObject from "../../Utils/isObject";
import { v4 as uuidv4 } from 'uuid';
import useFetchAuthor from "../../Hooks/useFetch/useFetchAuthor";
import getDataFromUrl from "../../Utils/getDataFromUrl";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { SaveBookContext } from "../../Data/ContextProvider";
const BookView = () => {
    let url: string = document.location.href;
    let id = getIdFromUrl(url);
    const [data] = useFetchBook(id);
    const [rate] = useFetchRate(id);
    const [add, setAdd] = useState<boolean>(false);
    const { bookState, bookDispatch } = useContext(SaveBookContext);
    const [bookId, setId] = useState<string>("");
    const [author] = useFetchAuthor(data?.authors![0].author?.key!);


    useEffect(() => {
        bookState.books.map((a) => {
            if (a.id === bookId) {
                setAdd(true);
            }
        })
        setId(id);
    });

    const handleClickAdd: React.MouseEventHandler<SVGSVGElement> = () => {
        setAdd(true);
        bookDispatch({
            type: "ADD_BOOK",
            payload: { id: bookId, img: data?.covers[0]!, title: data?.title!, author: author?.name! },
        });
    };
    const handleClickRemove: React.MouseEventHandler<SVGSVGElement> = () => {
        setAdd(false);
        bookDispatch({
            type: "REMOVE_BOOK",
            payload: bookId,
        });
    };

    return (
        <>
            <main className="container">
                <div className="bookView-box">
                    <div className="img-box">
                        {data?.covers == null ? <div className="bok-img-div"><img src="/image.png" alt="none" /></div> : <img className="bok-img" src={`https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`} alt={data.title} />}
                        <div>
                            {add ? <svg width="55px" height="55px" viewBox="0 0 64 64" fill="yellow" xmlns="http://www.w3.org/2000/svg" onClick={handleClickRemove}>
                                <path d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z" stroke="#426AB2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg> : <svg width="55px" height="55px" viewBox="0 0 64 64" fill="white" xmlns="http://www.w3.org/2000/svg" onClick={handleClickAdd}>
                                <path d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z" stroke="#426AB2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>}
                        </div>
                    </div>
                    <div className="info-box">
                        {data?.title != null ? <h1>{data.title}</h1> : null}
                        {isObject(data?.description) ? <h2><span>Description: </span>{data?.description.value}</h2> : <h2><span>Description: </span>{data?.description}</h2>}
                        {author?.name != null ? <><span>By: </span>  <NavLink to={`/author/${getDataFromUrl(author.key)}`}>{author.name}</NavLink>  </> : null}
                        {data?.first_publish_date != null ? <h3><span>Date of publish: </span>{data.first_publish_date}</h3> : null}
                        {data?.number_of_pages != null ? <h3><span>Pages: </span>{data?.number_of_pages}</h3> : null}
                        {data?.latest_revision != null ? <h3><span>Last Verision: </span> {data.latest_revision}</h3> : null}
                        {rate?.summary.average != null ? <h3><span>Rate: </span> {getTwoDecimala(rate?.summary.average)}/10</h3> : null}
                        <div className="subjects-box"><span>Subjects: </span>{data?.subjects != null ? data?.subjects.map((sub) => (<div key={uuidv4()} className="subject">{sub}</div>)) : null}</div>

                    </div>


                </div>
            </main>
        </>
    );
};
export default BookView;
