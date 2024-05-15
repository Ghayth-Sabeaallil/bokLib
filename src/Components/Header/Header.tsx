import { useState } from "react";
import "../../Styles/Components/Header.scss";
import SearchBox from "../SearchBox/SearchBox";
import SelectDropDown from "../SelectDropDown/SelectDropDown";
import { NavLink } from "react-router-dom";
import useFetchSearchBar from "../../Hooks/useFetch/useFetchSearchBar";
import { getIdFromUrl } from "../../Utils/getIdFromUrl";


function Header() {
    //Search Options
    const selectList = ["title", "author", "isbn", "query"];

    //React Hooks
    const [select, setSelect] = useState<string>("title");
    const [search, setSearch] = useState<string>("");

    //Custom hooks
    const [data] = useFetchSearchBar({ select, search });

    //Select which search option
    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setSelect(event.target.value);
    };

    //Search and show up the search box
    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearch(event.target.value);
        const search_box = document.getElementById(
            "search-box-container"
        ) as HTMLElement;
        if (event.target.value != "") {
            if (search_box) {
                search_box.style.display = "flex";
            }
        } else {
            if (search_box) {
                search_box.style.display = "none";
            }
        }
    };

    return (
        <>
            <header className="navbar-dekstop">
                <NavLink to="/" className="logo"><img src="/logo.png" alt="logo" /></NavLink>
                <div className="search-bar">
                    <div className="input-bar">
                        <SelectDropDown
                            handleSelectChange={handleSelectChange}
                            items={selectList}
                            value={select}
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div id="search-box-container" className="search-box-container">
                        {search != "" &&
                            (data?.numFound! > 0
                                && data?.docs.slice(0, 20).map((book) => (<NavLink to={`/book/${getIdFromUrl(book.key!)}`}><SearchBox cover_i={book.cover_i} title={book.title} author_name={book.author_name}
                                /></NavLink>))
                            )
                        }
                        <a className="show-all" href={`/search?${select}=${search}`}>
                            Show all Results
                        </a>
                    </div>
                </div>
                <NavLink to="/mylib" className="my-books"><svg
                    fill="#000"
                    width="30px"
                    height="30px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M30.639 26.361l-6.211-23.183c-0.384-1.398-1.644-2.408-3.139-2.408-0.299 0-0.589 0.040-0.864 0.116l0.023-0.005-2.896 0.776c-0.23 0.065-0.429 0.145-0.618 0.243l0.018-0.008c-0.594-0.698-1.472-1.14-2.453-1.143h-2.999c-0.76 0.003-1.457 0.27-2.006 0.713l0.006-0.005c-0.543-0.438-1.24-0.705-1.999-0.708h-3.001c-1.794 0.002-3.248 1.456-3.25 3.25v24c0.002 1.794 1.456 3.248 3.25 3.25h3c0.76-0.003 1.457-0.269 2.006-0.712l-0.006 0.005c0.543 0.438 1.24 0.704 1.999 0.708h2.999c1.794-0.002 3.248-1.456 3.25-3.25v-13.053l3.717 13.873c0.382 1.398 1.641 2.408 3.136 2.408 0.3 0 0.59-0.041 0.866-0.117l-0.023 0.005 2.898-0.775c1.398-0.386 2.407-1.646 2.407-3.141 0-0.298-0.040-0.587-0.115-0.862l0.005 0.023zM19.026 10.061l4.346-1.165 3.494 13.042-4.345 1.164zM18.199 4.072l2.895-0.775c0.056-0.015 0.121-0.023 0.188-0.023 0.346 0 0.639 0.231 0.731 0.547l0.001 0.005 0.712 2.656-4.346 1.165-0.632-2.357v-0.848c0.094-0.179 0.254-0.312 0.446-0.37l0.005-0.001zM11.5 3.25h2.998c0.412 0.006 0.744 0.338 0.75 0.749v2.75l-4.498 0.001v-2.75c0.006-0.412 0.338-0.744 0.749-0.75h0.001zM8.25 22.75h-4.5v-13.5l4.5-0.001zM10.75 9.25l4.498-0.001v13.501h-4.498zM4.5 3.25h3c0.412 0.006 0.744 0.338 0.75 0.749v2.75l-4.5 0.001v-2.75c0.006-0.412 0.338-0.744 0.749-0.75h0.001zM7.5 28.75h-3c-0.412-0.006-0.744-0.338-0.75-0.749v-2.751h4.5v2.75c-0.006 0.412-0.338 0.744-0.749 0.75h-0.001zM14.498 28.75h-2.998c-0.412-0.006-0.744-0.338-0.75-0.749v-2.751h4.498v2.75c-0.006 0.412-0.338 0.744-0.749 0.75h-0.001zM27.693 27.928l-2.896 0.775c-0.057 0.015-0.122 0.024-0.189 0.024-0.139 0-0.269-0.037-0.381-0.102l0.004 0.002c-0.171-0.099-0.298-0.259-0.35-0.45l-0.001-0.005-0.711-2.655 4.345-1.164 0.712 2.657c0.015 0.056 0.023 0.12 0.023 0.186 0 0.347-0.232 0.639-0.549 0.73l-0.005 0.001z"></path>
                </svg>
                    My Lib</NavLink>
            </header>
        </>
    );
}
export default Header;
