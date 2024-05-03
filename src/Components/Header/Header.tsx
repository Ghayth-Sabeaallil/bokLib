import { useState } from "react";
import "../../Styles/Components/Header.scss"
import useFetchSearchBar from "../../Hooks/useFetch/useFetchSearchBar";
import SearchBox from "../SearchBox/SearchBox";
import SelectDropDown from "../SelectDropDown/SelectDropDown";

function Header() {
    let selectList = ["title", "author", "isbn", "query"];
    const [select, setSelect] = useState<string>("title");
    const [search, setSearch] = useState<string>("");

    const [data] = useFetchSearchBar({ select, search });
    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setSelect(event.target.value);
    };
    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearch(event.target.value);
    };
    if (search != "") {
        let search_box = document.getElementById("search-box-container") as HTMLElement;
        if (search_box) {
            search_box.style.display = "flex";
        }
    }
    else {
        let search_box = document.getElementById("search-box-container") as HTMLElement;
        if (search_box) {
            search_box.style.display = "none";
        }
    }


    return (
        <><header className="navbar-dekstop">
            <a className="logo" href="/"><img src="/logo.png" alt="logo" /></a>
            <div className="search-bar">
                <div className="input-bar">


                    <SelectDropDown handleSelectChange={handleSelectChange} items={selectList} value={select} />
                    <input type="text" placeholder="title/author/isbn" onChange={handleSearchChange} /></div>

                <div id="search-box-container" className="search-box-container">
                    {(data?.numFound! > 0 && search != "") ? data?.docs.slice(0, 20).map((book) => (<SearchBox title={book.title} cover_i={book.cover_i} author={book.author_name} />)) : null}
                    <a className="show-all" href={`/search?${select}=${search}`}>Show all Results</a>
                </div>
            </div>
            <select>
                <option value="title">Favourit Books</option>
                <option value="author">Read Books</option>
            </select>
        </header>
        </>
    );
}

export default Header;
