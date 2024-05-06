import useFetchSearch from "../../Hooks/useFetch/useFetchSearchBar";
import "../../Styles/Components/SearchPageBox.scss"
import getBookFromUrl from "../../Utils/getBookFromUrl";
import getSearchFromUrl from "../../Utils/getSearchFromUrl";
import SearchItem from "../SearchItem/SearchItem";


const SearchPageBox = () => {
    const url: string = document.location.href;
    const [select, search] = getSearchFromUrl(url);

    const [data] = useFetchSearch({ select, search });

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e): void => {
        window.location.href = `/book?id=${e.currentTarget.id}`;
    }
    return (
        <>
            <main className="container">
                <div className="search-box">
                    {data?.docs.map((book) => (<SearchItem title={book.title} author_name={book.author_name} year={book.first_publish_year} img_id={book.cover_i} first_sentence={book.first_sentence} isbn={[]} languages={[]} subject_key={[]} rate={book.ratings_average} number_of_pages_median={book.number_of_pages_median} handleClick={handleClick} id={getBookFromUrl(book.key!)} />))}
                </div>
            </main>


        </>
    )
};
export default SearchPageBox;