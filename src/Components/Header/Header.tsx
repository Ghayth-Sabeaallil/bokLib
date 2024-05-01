import { useState } from "react";
import "../../Styles/Components/Header.scss"
import useFetchSearch from "../../Hooks/useFetch/useFetchSearch";

function Header() {
    const [select, setSelect] = useState<string>("");
    const [search, setSearch] = useState<string>("");

    const [data] = useFetchSearch({ select, search });
    console.log(data?.numFound)
    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setSelect(event.target.value);
    };
    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearch(event.target.value);
    };

    return (
        <><header className="navbar-dekstop">
            <a className="logo" href="/"><img src="/logo.png" alt="logo" /></a>
            <div className="search-bar">
                <select onChange={handleSelectChange}>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="isbn">ISBN</option>
                    <option value="query">Query</option>
                </select>
                <input type="text" placeholder="title/author/isbn" onChange={handleSearchChange} />
                <button>Search</button>
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
