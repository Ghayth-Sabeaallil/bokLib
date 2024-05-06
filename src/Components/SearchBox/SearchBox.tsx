import useFetchSearchBar from "../../Hooks/useFetch/useFetchSearchBar";
import "../../Styles/Components/SearchBox.scss";
import { v4 as uuidv4 } from 'uuid';


type searchBoxProps = {
    search: string;
    select: string;
};

const SearchBox = ({ select, search }: searchBoxProps) => {
    const [data] = useFetchSearchBar({ select, search });

    return (
        <>
            {data?.numFound! > 0
                ? data?.docs.slice(0, 20).map((book) => (
                    <div key={uuidv4()} className="search-item">
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
                            <p className="title">{book.title}</p>
                            <p className="author">By: {book.author_name}</p>
                        </div>
                    </div>
                ))
                : null}
        </>
    );
};
export default SearchBox;
