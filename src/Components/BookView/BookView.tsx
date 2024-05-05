import useFetchBook from "../../Hooks/useFetch/useFetchBook";
import "../../Styles/Components/BookView.scss";
import getBookId from "../../Utils/getBookId";

const BookView = () => {
    let url = document.location.href;
    let id = getBookId(url);
    const [data] = useFetchBook(id);
    console.log(data)
    return (
        <>
            <main className="container">
                <div className="bookView-box">

                </div>
            </main>
        </>
    );
};
export default BookView;
