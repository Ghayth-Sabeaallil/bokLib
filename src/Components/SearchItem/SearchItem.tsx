import "../../Styles/Components/SearchItem.scss"
import getTwoDecimala from "../../Utils/getTwoDecimala";
type cardProps = {
    handleClickBook: React.MouseEventHandler<HTMLDivElement>;
    title: string,
    author_name: string[],
    author_key: string[],
    year: number,
    img_id: number,
    first_sentence: string[],
    isbn: number[],
    languages: string[],
    subject_key: string[],
    rate: number,
    number_of_pages_median: number;
    id: string,
}

const SearchItem = ({ title, author_name, img_id, year, first_sentence, number_of_pages_median, rate, handleClickBook, id, author_key }: cardProps) => {
    return (
        <>
            <div className="item" id={id} onClick={handleClickBook}>
                {img_id == null ? <div className="bok-img-div"><img src="/image.png" alt="none" /></div> : <img className="bok-img" src={`https://covers.openlibrary.org/b/id/${img_id}-M.jpg`} alt={title} />}
                <span className="info">
                    {title != null ? <h1 className="title">{title}</h1> : null}
                    {author_name != null ? <><p>By: </p><a className="author" href={`/author?id=${author_key[0]}`}>{author_name}</a></> : null}
                    {first_sentence != null ? <h3 className="first-sentence">First Sentence: <p>{first_sentence}</p></h3> : null}
                    {number_of_pages_median != null ? <h3 className="pages">Pages: <p>{number_of_pages_median}</p></h3>
                        : null}
                    {rate != null ? <h3 className="rate">Rate: <p>{getTwoDecimala(rate)}/10</p></h3> : null}
                    {year != null ? <h4 className="year">First published in: <p>{year}</p></h4> : null}

                </span>
            </div>
        </>
    )
};
export default SearchItem;