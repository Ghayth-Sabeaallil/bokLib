import { NavLink } from "react-router-dom";
import useFetchSearch from "../../Hooks/useFetch/useFetchSearch";
import "../../Styles/Components/SearchPageBox.scss"
import getSearchFromUrl from "../../Utils/getSearchFromUrl";
import SearchItem from "../SearchItem/SearchItem";
import { v4 as uuidv4 } from 'uuid';

const getDataFromUrl = (url: string) => {
    let str: string[] = url.split("/");
    let resutl: string = str[str.length - 1];
    return resutl;
};


const SearchPageBox = () => {
    const url: string = document.location.href;
    const [select, search] = getSearchFromUrl(url);

    const [data] = useFetchSearch({ select, search });

    return (
        <>
            <main className="container">
                <div className="search-box">
                    {data?.docs.map((book) => (<NavLink key={uuidv4()} to={`/book/${getDataFromUrl(book.key!)}`} className={"nav"}><SearchItem title={book.title} author_name={book.author_name} year={book.first_publish_year} img_id={book.cover_i} first_sentence={book.first_sentence} isbn={[]} languages={[]} subject_key={[]} rate={book.ratings_average} number_of_pages_median={book.number_of_pages_median} author_key={book.author_key} /></NavLink>))}
                </div>
            </main>


        </>
    )
};
export default SearchPageBox;