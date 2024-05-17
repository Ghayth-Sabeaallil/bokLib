import { NavLink } from "react-router-dom";
import "../../Styles/Components/SearchPageBox.scss"
import getSearchFromUrl from "../../Utils/getSearchFromUrl";
import SearchItem from "../SearchItem/SearchItem";
import { v4 as uuidv4 } from 'uuid';
import { getIdFromUrl } from "../../Utils/getIdFromUrl";
import { Search } from "../../Types/dataType";
import useFetch from "../../Hooks/useFetch/useFetch";


const SearchPageBox = () => {
    //Get the search option and the search words from the url
    const url: string = document.location.href;
    const [select, search] = getSearchFromUrl(url);

    //Custom hooks
    const [data] = useFetch({ payload: { select: select, search: search }, type: "FETCH_SEARCH" }) as Search[];


    return (
        <>
            <main className="container">
                <div className="search-box">
                    {data?.docs.map((book) => (<NavLink key={uuidv4()} to={`/book/${getIdFromUrl(book.key!)}`} className={"nav"}><SearchItem title={book.title} author_name={book.author_name} year={book.first_publish_year} img_id={book.cover_i} first_sentence={book.first_sentence} isbn={[]} languages={[]} subject_key={[]} rate={book.ratings_average} number_of_pages_median={book.number_of_pages_median} author_key={book.author_key} /></NavLink>))}
                </div>
            </main>
        </>
    )
};
export default SearchPageBox;