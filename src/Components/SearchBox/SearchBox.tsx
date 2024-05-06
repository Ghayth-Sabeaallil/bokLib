import useFetchSearchBar from "../../Hooks/useFetch/useFetchSearchBar";
import "../../Styles/Components/SearchBox.scss";
import { v4 as uuidv4 } from 'uuid';
import getDataFromUrl from "../../Utils/getDataFromUrl";


type searchBoxProps = {
    handleClick: React.MouseEventHandler<HTMLDivElement>;
    search: string;
    select: string;
};

const SearchBox = ({ select, search, handleClick }: searchBoxProps) => {
    const [data] = useFetchSearchBar({ select, search });



    return (
        <>
            {data?.numFound! > 0
                ? data?.docs.slice(0, 20).map((book) => (<div key={uuidv4()} className="search-item" id={getDataFromUrl(book.key!)} onClick={handleClick}>
                    {book.cover_i == null ? (
                        <div className="bok-img-div"></div>
                    ) : (
                        <img
                            className="bok-img"
                            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
                            alt={book.title}
                        />
                    )}
                    <div className="info">
                        {book.title != null ? <p className="title">{book.title}</p> : null}
                        {book.author_name != null ? <p className="author">By: {book.author_name}</p> : null}

                    </div>
                </div>))
                : null}
        </>
    );
};
export default SearchBox;
