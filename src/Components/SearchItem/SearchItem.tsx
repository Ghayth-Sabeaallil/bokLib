import "../../Styles/Components/SearchItem.scss"
type cardProps = {
    title: string,
    author_name: string[],
    year: number,
    img_id: number,
    first_sentence: string[],
    isbn: number[],
    languages: string[],
    subject_key: string[],
    rate: number,
    number_of_pages_median: number;
}

const SearchItem = ({ title, author_name, img_id, year, first_sentence, number_of_pages_median, rate }: cardProps) => {
    return (
        <>
            <div className="item">
                {img_id == null ? <div className="bok-img-div"><img src="/image.png" alt="none" /></div> : <img className="bok-img" src={`https://covers.openlibrary.org/b/id/${img_id}-M.jpg`} alt={title} />}
                <span className="info">
                    <h1 className="title">{title}</h1>
                    <h2 className="author">By: <p>{author_name}</p></h2>
                    <h3 className="first-sentence">First Sentence: <p>{first_sentence}</p></h3>
                    <h3 className="pages">Pages: <p>{number_of_pages_median}</p></h3>
                    <h3 className="rate">Rate: <p>{rate}/10</p></h3>



                    <h4 className="year">First published in: <p>{year}</p></h4></span>



            </div>
        </>
    )
};
export default SearchItem;