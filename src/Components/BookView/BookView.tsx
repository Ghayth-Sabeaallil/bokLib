import useFetchBook from "../../Hooks/useFetch/useFetchBook";
import useFetchRate from "../../Hooks/useFetch/useFetchRate";
import "../../Styles/Components/BookView.scss";
import getBookId from "../../Utils/getBookId";
import getTwoDecimala from "../../Utils/getTwoDecimala";
import isObject from "../../Utils/isObject";
import { v4 as uuidv4 } from 'uuid';
const BookView = () => {
    let url = document.location.href;
    let id = getBookId(url);
    const [data] = useFetchBook(id);
    const [rate] = useFetchRate(id);

    return (
        <>
            <main className="container">
                <div className="bookView-box">
                    <div className="img-box">
                        {data?.covers == null ? <div className="bok-img-div"><img src="/image.png" alt="none" /></div> : <img className="bok-img" src={`https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`} alt={data.title} />}
                    </div>
                    <div className="info-box">
                        {data?.title != null ? <h1>{data.title}</h1> : null}
                        {isObject(data?.description) ? <h2><span>Description: </span>{data?.description.value}</h2> : <h2><span>Description: </span>{data?.description}</h2>}
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
