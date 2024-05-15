import "../../Styles/Components/SearchBox.scss";
import { v4 as uuidv4 } from 'uuid';

//Search Box Props
type searchBoxProps = {
    cover_i: number,
    title: string,
    author_name: string[],
};

const SearchBox = ({ cover_i, title, author_name }: searchBoxProps) => {
    return (
        <>
            <div key={uuidv4()} className="search-item">
                {cover_i == null ? (
                    <div className="bok-img-div"></div>
                ) : (
                    <img
                        className="bok-img"
                        src={`https://covers.openlibrary.org/b/id/${cover_i}-S.jpg`}
                        alt={title}
                    />
                )}
                <div className="info">
                    {title != null && <p className="title">{title}</p>}
                    {author_name != null && <p className="author">By: {author_name}</p>}

                </div>
            </div>
        </>
    );
};
export default SearchBox;
