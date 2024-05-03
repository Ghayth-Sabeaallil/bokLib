import "../../Styles/Components/SearchBox.scss"

type searchBoxProps = {
    title: string,
    cover_i: number,
    author: string[]
}


const SearchBox = ({ cover_i, title, author }: searchBoxProps) => {
    return (
        <>
            <div className="search-item">
                {cover_i == null ? <div className="bok-img-div"></div> : <img className="bok-img" src={`https://covers.openlibrary.org/b/id/${cover_i}-S.jpg`} alt={title} />}
                <div className="info">
                    <p className="title">{title}</p>
                    <p className="author">By: {author}</p>
                </div>
            </div>
        </>
    )
}
export default SearchBox;