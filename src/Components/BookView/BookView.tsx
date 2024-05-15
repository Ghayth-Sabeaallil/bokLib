import useFetchBook from "../../Hooks/useFetch/useFetchBook";
import useFetchRate from "../../Hooks/useFetch/useFetchRate";
import "../../Styles/Components/BookView.scss";
import getTwoDecimala from "../../Utils/getTwoDecimala";
import isObject from "../../Utils/isObject";
import { v4 as uuidv4 } from "uuid";
import useFetchAuthor from "../../Hooks/useFetch/useFetchAuthor";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ReviewBox from "../ReviewBox/ReviewBox";
import { SaveContext } from "../../Data/ContextDataProvider";
import { getIdFromUrl } from "../../Utils/getIdFromUrl";



const BookView = () => {
  //React Hooks
  const [add, setAdd] = useState<boolean>(false);
  const [read, setRead] = useState<boolean>(false);
  const { state, dispatch } = useContext(SaveContext);
  const [bookId, setId] = useState<string>("");

  const url: string = document.location.href;
  const id = getIdFromUrl(url);

  //Custom hooks
  const [data] = useFetchBook(id);
  const [rate] = useFetchRate(id);
  const [author] = useFetchAuthor(data?.authors![0].author?.key!);


  //Ask if the books description is an object or not
  const isObj = isObject(data?.description);

  //useEffect, check if the book is alreday saved or readen
  useEffect(() => {
    state.books.map((a) => {
      if (a.id === bookId) {
        setAdd(true);
      }
    });
    state.reads.map((a) => {
      if (a.id === bookId) {
        setRead(true);
      }
    });
    setId(id);
  });

  //Add the book to fav using useContext
  const handleClickAdd: React.MouseEventHandler<SVGSVGElement> = () => {
    setAdd(true);
    dispatch({
      type: "ADD_BOOK",
      payload: {
        id: bookId,
        img: data?.covers[0]!,
        title: data?.title!,
        author: author?.name!,
      },
    });
  };

  //Remove the book from fav using useContext
  const handleClickRemove: React.MouseEventHandler<SVGSVGElement> = () => {
    setAdd(false);
    dispatch({ type: "REMOVE_BOOK", payload: bookId });
  };

  //Add the book to read list using useContext
  const handleClickAddRead: React.MouseEventHandler<SVGSVGElement> = () => {
    setRead(true);
    dispatch({
      type: "ADD_READ",
      payload: {
        id: bookId,
        img: data?.covers[0]!,
        title: data?.title!,
        author: author?.name!,
      },
    });
  };

  //Remove the book from read list using useContext
  const handleClickRemoveRead: React.MouseEventHandler<SVGSVGElement> = () => {
    setRead(false);
    dispatch({
      type: "REMOVE_READ",
      payload: bookId,
    });
  };

  return (
    <>
      <main className="container">
        <div className="bookView-box">
          <div className="img-box">
            {data?.covers == null ? (
              <div className="bok-img-div">
                <img src="/image.png" alt="none" />
              </div>
            ) : (
              <img
                className="bok-img"
                src={`https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`}
                alt={data.title}
              />
            )}
            <div>
              {add ? (
                <svg
                  width="55px"
                  height="55px"
                  viewBox="0 0 64 64"
                  fill="yellow"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleClickRemove}
                >
                  <path
                    d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z"
                    stroke="#426AB2"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="55px"
                  height="55px"
                  viewBox="0 0 64 64"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleClickAdd}
                >
                  <path
                    d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z"
                    stroke="#426AB2"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {read ? (
                <svg
                  fill="green"
                  width="55px"
                  height="55px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleClickRemoveRead}
                >
                  <path d="M6.53 9.02 4.58 7.07l-.88.89 2.83 2.83.88-.89 4.78-4.77-.89-.88-4.77 4.77z" />
                  <path d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8 7.77 7.77 0 0 0 8 .5zm0 13.75A6.52 6.52 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.52 6.52 0 0 1 8 14.25z" />
                </svg>
              ) : (
                <svg
                  fill="black"
                  width="55px"
                  height="55px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleClickAddRead}
                >
                  <path d="M6.53 9.02 4.58 7.07l-.88.89 2.83 2.83.88-.89 4.78-4.77-.89-.88-4.77 4.77z" />
                  <path d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8 7.77 7.77 0 0 0 8 .5zm0 13.75A6.52 6.52 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.52 6.52 0 0 1 8 14.25z" />
                </svg>
              )}
            </div>
          </div>
          <div className="info-box">
            {data?.title != null ? <h1>{data.title}</h1> : null}
            {isObj ? (
              <h2>
                <span className="black">Description: </span>
                {data?.description.value}
              </h2>
            ) : (
              <h2>
                <span>Description: </span>
                {data?.description}
              </h2>
            )}
            {author?.name != null ? (
              <>
                <span className="black">By: </span>{" "}
                <NavLink to={`/author/${getIdFromUrl(author.key)}`}>
                  {author.name}
                </NavLink>{" "}
              </>
            ) : null}
            {data?.first_publish_date != null ? (
              <h3>
                <span className="black">Date of publish: </span>
                {data.first_publish_date}
              </h3>
            ) : null}
            {data?.number_of_pages != null ? (
              <h3>
                <span className="black">Pages: </span>
                {data?.number_of_pages}
              </h3>
            ) : null}
            {data?.latest_revision != null ? (
              <h3>
                <span className="black">Last Verision: </span>{" "}
                {data.latest_revision}
              </h3>
            ) : null}
            {rate?.summary.average != null ? (
              <h3>
                <span className="black">Rate: </span>{" "}
                {getTwoDecimala(rate?.summary.average)}/10
              </h3>
            ) : null}
            <div className="subjects-box">
              <span className="black">Subjects: </span>
              {data?.subjects != null
                ? data?.subjects.map((sub) => (
                  <div key={uuidv4()} className="subject">
                    {sub}
                  </div>
                ))
                : null}
            </div>
            {read ? (
              <div className="review-box">
                <ReviewBox id={bookId} />
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
};
export default BookView;
