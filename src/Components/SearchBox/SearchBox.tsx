import "../../Styles/Components/SearchBox.scss"

type searchBoxProps = {
    title: string,
    cover_i: number,
    year: number,
    rate: number
}


const SearchBox = ({ year, rate, cover_i, title, }: searchBoxProps) => {
    return (
        <>
            <div className="search-item">
                {cover_i == null ? <div className="bok-img-div"></div> : <img className="bok-img" src={`https://covers.openlibrary.org/b/id/${cover_i}-S.jpg`} alt={title} />}
                <div className="info">
                    <p className="title">{title}</p>
                    <p className="year">Year: {year}</p>
                    <p className="rate">Rate: {rate}/10</p>

                </div>
            </div>
        </>
    )
}
export default SearchBox;